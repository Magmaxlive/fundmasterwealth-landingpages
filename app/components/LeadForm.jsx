'use client';

import { useEffect, useRef, useState } from 'react';
import { TickIcon } from './icons';

const THANK_YOU_URL = 'https://www.fundmasterwealth.co.nz/thankyou.html';
const LEAD_EMAIL = 'hello@fundmaster.co.nz';

function formatMoney(value) {
  const raw = value.replace(/[^0-9]/g, '');
  return raw ? Number(raw).toLocaleString('en-NZ') : '';
}

export default function LeadForm({
  source,
  id,
  head = 'Get your free check',
  note = 'Takes under a minute. A FundMaster Wealth adviser will be in touch.',
  variant,
}) {
  const formRef = useRef(null);
  const tsRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [income, setIncome] = useState('');
  const [deposit, setDeposit] = useState('');

  useEffect(() => {
    if (tsRef.current) tsRef.current.value = String(Date.now());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.querySelector('[name=name]');
    const email = form.querySelector('[name=email]');
    const mobile = form.querySelector('[name=mobile]');

    if (!name.value.trim() || !email.value.trim() || !mobile.value.trim()) {
      [name, email, mobile].forEach((f) => {
        f.style.borderColor = f.value.trim() ? '' : '#e05252';
      });
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    const pageUrl = form.querySelector('[name=page_url]');
    if (pageUrl) pageUrl.value = location.href;

    try {
      sessionStorage.setItem('fm_lead_name', name.value.trim());
    } catch {}

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'lead_form_submit',
      form_name: 'first_home_buyer_check',
    });

    try {
      const r = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'X-Requested-With': 'fetch', Accept: 'application/json' },
      });
      const res = await r.json().catch(() => ({ ok: false }));
      if (res && res.ok) {
        window.location.href = THANK_YOU_URL;
        return;
      }
      setSubmitting(false);
      setErrorMsg(
        (res && res.error) ||
          'Sorry, we could not send that. Please try again, or email ' + LEAD_EMAIL + '.'
      );
    } catch {
      setSubmitting(false);
      setErrorMsg(
        'We could not reach the server. Please check your connection and try again, or email ' +
          LEAD_EMAIL +
          '.'
      );
    }
  };

  const cls = ['formcard', 'rv'];
  if (variant === 'light') cls.push('formcard--light');

  return (
    <div className={cls.join(' ')} id={id}>
      <p className="formcard__head">{head}</p>
      <p className="formcard__note">{note}</p>
      <form ref={formRef} action="/api/submit" method="post" noValidate onSubmit={handleSubmit}>
        <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <input ref={tsRef} type="hidden" name="ts" defaultValue="" />
        <input type="hidden" name="page_url" defaultValue="" />
        <input type="hidden" name="source" defaultValue={source} />

        <div className="field">
          <label htmlFor={`${source}-name`}>Name</label>
          <input id={`${source}-name`} name="name" type="text" placeholder="Enter your name" required />
        </div>

        <div className="row2">
          <div className="field">
            <label htmlFor={`${source}-mobile`}>Mobile</label>
            <input id={`${source}-mobile`} name="mobile" type="tel" placeholder="Enter mobile number" required />
          </div>
          <div className="field">
            <label htmlFor={`${source}-email`}>Email</label>
            <input id={`${source}-email`} name="email" type="email" placeholder="Enter email address" required />
          </div>
        </div>

        <div className="row2">
          <div className="field field--money">
            <label htmlFor={`${source}-income`}>Annual Income</label>
            <input
              id={`${source}-income`}
              name="income"
              type="text"
              inputMode="numeric"
              placeholder="Enter amount"
              value={income}
              onChange={(e) => setIncome(formatMoney(e.target.value))}
            />
          </div>
          <div className="field field--money">
            <label htmlFor={`${source}-deposit`}>Deposit Available</label>
            <input
              id={`${source}-deposit`}
              name="deposit"
              type="text"
              inputMode="numeric"
              placeholder="Enter amount"
              value={deposit}
              onChange={(e) => setDeposit(formatMoney(e.target.value))}
            />
          </div>
        </div>

        <button className="btn btn--primary btn--block btn--lg" type="submit" disabled={submitting}>
          {submitting ? 'Sending…' : 'Get My Free Check'}
        </button>

        <p className={`form-msg${errorMsg ? ' is-on' : ''}`} role="alert">{errorMsg}</p>

        <p className="freeline"><TickIcon />Free. No obligation.</p>
      </form>
    </div>
  );
}
