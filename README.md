# Fundmaster Wealth — First Home Buyers landing (Next.js)

Next.js 15 port of the original PHP landing page. Same design, same
copy, same calculators, same form flow. The PHP `submit.php` handler
is replaced by a Node API route that sends leads through Gmail SMTP
using nodemailer.

## What's here

```
app/
  layout.tsx                Root HTML shell + Google Fonts
  page.tsx                  Home route
  LandingPage.tsx           Whole landing page (markup + inline JS)
  globals.css               Every style from the original <style> block
  api/submit/route.ts       Lead handler — nodemailer + spam checks
  thankyou/
    page.tsx                Post-submission confirmation page
    ThankYouGreeting.tsx    Client-side "Thanks, {firstname}" greeting
public/images/              Logo, hero photos, favicon
.env.local.example          Copy to .env.local and fill in
```

## First-time setup

```bash
cd c:\Users\devel\projects\fundmaster-landing
npm install
copy .env.local.example .env.local     # then edit .env.local
npm run dev
```

Open http://localhost:3000.

## Gmail SMTP setup (required for the form to send)

1. Turn on 2-Step Verification: https://myaccount.google.com/security
2. Create an **App Password**: https://myaccount.google.com/apppasswords
   → "Mail" + "Other" → name it something like `Fundmaster Site`.
   Google shows you a 16-character password (e.g. `abcd efgh ijkl mnop`).
3. Open `.env.local` and set:
   - `SMTP_USER` = the Gmail address
   - `SMTP_PASS` = the 16-character App Password (spaces removed)
   - `FROM_EMAIL` = the same Gmail address (Gmail refuses to send under a
     different address unless you have "Send mail as" configured)
   - `TO_EMAIL` = where the leads should arrive
4. Restart `npm run dev` so the new env vars are picked up.

**Gmail limit:** 500 emails per day. Plenty for lead volume; not for
newsletters.

## Cloudflare Turnstile (optional but strongly recommended)

Without a captcha the form still has 4 spam layers (honeypot, minimum
fill time, payload scan, same-origin check), which catch the common
cases. But once ads point at this page, scrapers will find it fast —
Turnstile is free, invisible to real users, and closes the last hole.

1. Get keys at https://dash.cloudflare.com → Turnstile.
2. Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (site key) and `TURNSTILE_SECRET`
   (secret key) in `.env.local`.
3. The current `LandingPage.tsx` does not yet inject the Turnstile widget
   into the forms — add that when you turn it on. The API route already
   validates the token if `TURNSTILE_SECRET` is set.

## Deploying to Vercel

1. Push this folder to GitHub.
2. On https://vercel.com → **Add New Project** → import the repo. Framework
   preset auto-detects as Next.js. Click **Deploy**.
3. Once deployed, go to the project's **Settings → Environment Variables**
   and add every var from your `.env.local` (they were not committed).
   Redeploy so they take effect (Deployments → latest → ⋯ → Redeploy).
4. Point your custom domain at Vercel: **Settings → Domains** → add
   `fundmasterwealth.co.nz`, follow the DNS instructions.

## Differences from the PHP version

- **No CSV backup** of leads on disk (Vercel's filesystem is ephemeral).
  If a send fails, the response is a 502 and the user is asked to retry.
  If you need durable storage, add Vercel KV, Postgres, or a Google
  Sheet webhook here.
- **No per-IP rate limit or duplicate suppression** — those needed
  persistent state. Add [Upstash Redis](https://upstash.com/) later
  if spam volume warrants it.
- **Honeypot, minimum fill time, payload scan, same-origin check, and
  Turnstile** all still run.
- **`mail()` → nodemailer + Gmail SMTP.**
- **Thank-you URL** is `/thankyou` on this deploy (no `.html` suffix).
  The old page still exists at `https://www.fundmasterwealth.co.nz/thankyou.html`
  if you'd rather redirect to that — change `THANK_YOU_URL` in
  `app/LandingPage.tsx` (line ~648).

## Testing the form locally

With `.env.local` filled in and `npm run dev` running:

1. Open http://localhost:3000, scroll to a form, submit a real-looking
   test lead.
2. On success you'll be redirected to `/thankyou`.
3. The email should arrive in `TO_EMAIL` within a minute. Check the
   terminal running `npm run dev` for `[fundmaster-lead]` logs if
   anything fails.

## Google Ads conversion tracking

The thank-you page pushes `lead_form_success` to `window.dataLayer` on
load — hook Google Tag Manager into that event, or drop the classic
gtag conversion snippet into `app/thankyou/page.tsx`.
