import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/* ============================================================
   FUNDMASTER WEALTH — Lead form handler (Next.js port of submit.php)
   ------------------------------------------------------------
   Receives both lead forms, runs the same cheap spam gates as
   the PHP handler, then sends the email through Gmail SMTP.

   Rate limiting and duplicate suppression are OMITTED — they
   needed local JSON files, which Vercel's ephemeral filesystem
   can't keep. Turnstile + honeypot + fill-time + payload scan
   still cover the common cases. Add Upstash Redis later if
   volume warrants the persistent counters.
   ============================================================ */

export const runtime = 'nodejs';

const TO_EMAIL = process.env.TO_EMAIL || 'hello@fundmaster.co.nz';
const FROM_EMAIL = process.env.FROM_EMAIL || process.env.SMTP_USER || '';
const FROM_NAME = process.env.FROM_NAME || 'Fundmaster Wealth Website';
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET || '';
const SITE_URL = (process.env.SITE_URL || 'https://www.fundmasterwealth.co.nz').replace(/\/$/, '');
const LOGO_URL = process.env.LOGO_URL || SITE_URL + '/images/logo-c.svg';

const MIN_FILL_SECONDS = 4;

function json(ok, message = 'ok', status = 200, fields = {}) {
  return NextResponse.json(
    { ok, error: ok ? null : message, fields },
    {
      status,
      headers: {
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
    }
  );
}

/* Accept the request the way a bot expects, then throw it away. */
function drop(reason) {
  console.warn('[fundmaster-lead] dropped:', reason);
  return json(true, 'ok');
}

function clean(v, max = 200) {
  if (typeof v !== 'string') return '';
  const stripped = v.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
  return stripped.trim().slice(0, max);
}

function moneyValue(v) {
  const digits = v.replace(/[^0-9]/g, '');
  if (!digits || digits.length > 12) return '';
  return Number(digits).toLocaleString('en-NZ');
}

function payloadSpam(values) {
  const blob = values.join(' ').toLowerCase();
  if (/(https?:\/\/|www\.|\[url|<\/?a\b|<script|\{\{|\bhref\s*=)/i.test(blob)) {
    return 'link or markup';
  }
  const words = ['viagra', 'cialis', 'casino', 'backlink', 'seo service', 'porn', 'sex video'];
  for (const w of words) if (blob.includes(w)) return w;
  return '';
}

async function verifyTurnstile(token, ip) {
  if (!token) return false;
  try {
    const body = new URLSearchParams({
      secret: TURNSTILE_SECRET,
      response: token,
      remoteip: ip,
    });
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
      signal: AbortSignal.timeout(5000),
    });
    const data = await res.json();
    return !!data.success;
  } catch {
    /* Cloudflare unreachable — let the lead through rather than lose it. */
    console.warn('[fundmaster-lead] Turnstile unreachable; allowing submission');
    return true;
  }
}

function clientIp(req) {
  const xff = req.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  return req.headers.get('x-real-ip') || '0.0.0.0';
}

function originAllowed(req) {
  const origin = req.headers.get('origin') || '';
  const referer = req.headers.get('referer') || '';
  const raw = origin || referer;
  if (!raw) return true; /* header stripped — do not punish */
  try {
    const host = new URL(raw).host.toLowerCase();
    const self = (req.headers.get('host') || '').toLowerCase();
    if (!self) return true;
    return host === self || host === 'www.' + self || 'www.' + host === self;
  } catch {
    return false;
  }
}

function headerSafe(v) {
  return v.replace(/[\r\n]/g, '').trim();
}

function escapeHtml(v) {
  return String(v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildLeadHtml({ name, mobile, email, income, deposit, submittedAt, source, pageUrl, ip, userAgent }) {
  const e = escapeHtml;
  const money = (v) => (v ? '$' + e(v) : '<span style="color:#94a3b8;font-style:italic">not supplied</span>');
  const fieldRow = (label, value) => `
    <tr>
      <td style="padding:14px 18px;border-bottom:1px solid #eef2f7;font-family:'Inter',Arial,sans-serif;font-size:13px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:.6px;width:38%;vertical-align:top">${label}</td>
      <td style="padding:14px 18px;border-bottom:1px solid #eef2f7;font-family:'Inter',Arial,sans-serif;font-size:15px;color:#0f172a;font-weight:500;vertical-align:top">${value}</td>
    </tr>`;
  const metaRow = (label, value) => `
    <tr>
      <td style="padding:6px 0;font-family:'Inter',Arial,sans-serif;font-size:12px;color:#94a3b8;width:34%">${label}</td>
      <td style="padding:6px 0;font-family:'Inter',Arial,sans-serif;font-size:12px;color:#475569;word-break:break-all">${value}</td>
    </tr>`;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>New First Home Buyer Check request</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Inter',Arial,sans-serif;color:#0f172a">
  <span style="display:none!important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;overflow:hidden">New lead from ${e(name)} &middot; ${e(email)}</span>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 12px">
    <tr>
      <td align="center">
        <table role="presentation" width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;border-radius:20px;overflow:hidden;box-shadow:0 20px 60px -20px rgba(15,23,42,.25);background:#ffffff">

          <tr>
            <td style="background:linear-gradient(140deg,#061128 0%,#0b2247 45%,#123059 78%,#16405f 100%);padding:36px 40px;text-align:left">
              <img src="${e(LOGO_URL)}" alt="FundMaster Wealth" height="44" style="height:44px;width:auto;display:block;margin-bottom:22px;border:0;outline:none;text-decoration:none">
              <div style="display:inline-block;padding:5px 12px;border-radius:100px;background:rgba(22,184,166,.18);color:#5eead4;font-family:'Inter',Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-bottom:14px">New Lead</div>
              <h1 style="margin:0;font-family:Georgia,'Fraunces',serif;font-size:26px;line-height:1.25;color:#ffffff;font-weight:600">First Home Buyer Check request</h1>
              <p style="margin:10px 0 0;font-family:'Inter',Arial,sans-serif;font-size:14px;color:rgba(232,240,248,.75);line-height:1.55">Submitted ${e(submittedAt)} NZT &middot; via <b style="color:#5eead4">${e(source)}</b></p>
            </td>
          </tr>

          <tr>
            <td style="padding:34px 40px 8px">
              <p style="margin:0 0 6px;font-family:'Inter',Arial,sans-serif;font-size:12px;font-weight:600;color:#1f6bd6;text-transform:uppercase;letter-spacing:1.2px">Contact</p>
              <h2 style="margin:0 0 20px;font-family:Georgia,'Fraunces',serif;font-size:22px;color:#0b2247;font-weight:600">${e(name)}</h2>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:14px;overflow:hidden;background:#fafbfd">
                ${fieldRow('Mobile', `<a href="tel:${e(mobile.replace(/[^0-9+]/g,''))}" style="color:#0b2247;text-decoration:none;font-weight:600">${e(mobile)}</a>`)}
                ${fieldRow('Email',  `<a href="mailto:${e(email)}" style="color:#1f6bd6;text-decoration:none;font-weight:600">${e(email)}</a>`)}
                ${fieldRow('Annual income', money(income))}
                ${fieldRow('Deposit available', money(deposit))}
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:26px">
                <tr>
                  <td align="center" style="padding:4px 0 6px">
                    <a href="mailto:${e(email)}" style="display:inline-block;background:linear-gradient(135deg,#1f6bd6 0%,#16b8a6 100%);color:#ffffff;text-decoration:none;font-family:'Inter',Arial,sans-serif;font-size:15px;font-weight:600;padding:14px 30px;border-radius:100px;box-shadow:0 12px 28px -10px rgba(31,107,214,.55)">Reply to ${e(name.split(/\s+/)[0])}</a>
                  </td>
                </tr>
              </table>

              <p style="margin:18px 0 0;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#64748b;text-align:center;line-height:1.55">You can also reply directly to this email &mdash; it&rsquo;s already addressed to them.</p>
            </td>
          </tr>

          <tr>
            <td style="padding:26px 40px 30px">
              <div style="height:1px;background:#e2e8f0;margin:0 0 22px"></div>
              <p style="margin:0 0 12px;font-family:'Inter',Arial,sans-serif;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.2px">Submission details</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${metaRow('Form',    e(source))}
                ${metaRow('Page',    pageUrl ? `<a href="${e(pageUrl)}" style="color:#475569;text-decoration:underline">${e(pageUrl)}</a>` : '&mdash;')}
                ${metaRow('IP',      e(ip))}
                ${metaRow('Browser', e(userAgent))}
              </table>
            </td>
          </tr>

          <tr>
            <td style="background:#0b2247;padding:22px 40px;text-align:center">
              <p style="margin:0;font-family:'Inter',Arial,sans-serif;font-size:12px;color:rgba(232,240,248,.65);line-height:1.6">
                <a href="${e(SITE_URL)}" style="color:#5eead4;text-decoration:none;font-weight:600">FundMaster Wealth</a>
                &middot; Automated notification from the first home buyer landing page
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req) {
  /* Body size cap — form only carries a handful of short fields. */
  const contentLength = Number(req.headers.get('content-length') || 0);
  if (contentLength > 32768) return drop('oversized request');

  if (!originAllowed(req)) return drop('cross-origin post');

  let form;
  try {
    form = await req.formData();
  } catch {
    return json(false, 'Malformed request.', 400);
  }

  const name = clean(form.get('name'), 80);
  const mobile = clean(form.get('mobile'), 30);
  const email = clean(form.get('email'), 120);
  const income = moneyValue(clean(form.get('income'), 20));
  const deposit = moneyValue(clean(form.get('deposit'), 20));
  const sourceRaw = clean(form.get('source'), 40);
  const source = /^[a-z0-9_-]{1,40}$/i.test(sourceRaw) ? sourceRaw : 'unknown';
  const honey = clean(form.get('website'), 100);
  const ts = clean(form.get('ts'), 20);
  const captcha = clean(form.get('cf-turnstile-response'), 3000);
  const pageUrl = /^https?:\/\//i.test(clean(form.get('page_url'), 300))
    ? clean(form.get('page_url'), 300)
    : req.headers.get('referer') || '';

  const ip = clientIp(req);

  /* 1. Honeypot */
  if (honey) return drop('honeypot filled');

  /* 2. Minimum fill time */
  if (ts && /^\d+$/.test(ts) && ts.length >= 13) {
    const elapsed = Math.floor(Date.now() / 1000) - Math.floor(Number(ts) / 1000);
    if (elapsed >= 0 && elapsed < MIN_FILL_SECONDS) {
      return drop('submitted in ' + elapsed + 's');
    }
  }

  /* 3. Payload scan */
  const hit = payloadSpam([name, mobile, email, income, deposit]);
  if (hit) return drop('payload: ' + hit);

  /* 4. Turnstile (only if configured) */
  if (TURNSTILE_SECRET) {
    if (!captcha) return drop('missing captcha token');
    if (!(await verifyTurnstile(captcha, ip))) return drop('captcha rejected');
  }

  /* ---------- Validation (real people see these) ---------- */
  const errors = {};
  if (name.length < 2) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) {
    errors.email = 'Please enter a valid email address.';
  }
  const mobileDigits = mobile.replace(/[^0-9]/g, '');
  if (mobileDigits.length < 7 || mobileDigits.length > 15) {
    errors.mobile = 'Please enter a valid mobile number.';
  }
  if (Object.keys(errors).length) {
    return json(false, Object.values(errors).join(' '), 422, errors);
  }

  /* ---------- Send ---------- */
  if (!FROM_EMAIL || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('[fundmaster-lead] SMTP env vars missing.');
    return json(false, 'Server is not configured to send email yet.', 500);
  }

  const submittedAt = new Date().toLocaleString('en-NZ', {
    timeZone: 'Pacific/Auckland',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });

  const userAgent = (req.headers.get('user-agent') || '').slice(0, 200);

  const body = [
    'New First Home Buyer Check request',
    '='.repeat(42),
    '',
    'Name:              ' + name,
    'Mobile:            ' + mobile,
    'Email:             ' + email,
    'Annual income:     ' + (income ? '$' + income : 'not supplied'),
    'Deposit available: ' + (deposit ? '$' + deposit : 'not supplied'),
    '',
    '-'.repeat(42),
    'Submitted:  ' + submittedAt + ' NZT',
    'Form:       ' + source,
    'Page:       ' + pageUrl,
    'IP:         ' + ip,
    'Browser:    ' + userAgent,
    '',
    'Reply straight to this email to reach ' + name + '.',
  ].join('\n');

  const html = buildLeadHtml({
    name, mobile, email, income, deposit,
    submittedAt, source, pageUrl, ip, userAgent,
  });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${headerSafe(FROM_NAME)}" <${headerSafe(FROM_EMAIL)}>`,
      to: TO_EMAIL,
      replyTo: `"${headerSafe(name)}" <${headerSafe(email)}>`,
      subject: 'First Home Buyer Check — ' + name,
      text: body,
      html,
    });
  } catch (err) {
    console.error('[fundmaster-lead] SMTP send failed:', err);
    return json(false, 'We could not send that just now. Please try again shortly.', 502);
  }

  return json(true, 'ok');
}

export function GET() {
  return json(false, 'This endpoint only accepts form submissions.', 405);
}
