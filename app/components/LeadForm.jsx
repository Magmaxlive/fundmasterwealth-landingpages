'use client';

import { useEffect, useRef, useState } from 'react';
import { TickIcon } from './icons';

const DEFAULT_THANK_YOU_URL =
  process.env.NEXT_PUBLIC_THANK_YOU_URL || 'https://www.fundmasterwealth.co.nz/thankyou.html';
const DEFAULT_LEAD_EMAIL =
  process.env.NEXT_PUBLIC_LEAD_EMAIL || 'hello@fundmaster.co.nz';

function formatMoney(value) {
  const raw = value.replace(/[^0-9]/g, '');
  return raw ? Number(raw).toLocaleString('en-NZ') : '';
}

function renderField(field, value, onChange, source) {
  const inputId = `${source}-${field.name}`;
  const fieldClass = field.type === 'money' ? 'field field--money' : 'field';

  const commonProps = {
    id: inputId,
    name: field.name,
    required: field.required,
  };

  let control;
  if (field.type === 'select') {
    control = (
      <select
        {...commonProps}
        value={value ?? ''}
        onChange={(e) => onChange(field.name, e.target.value)}
      >
        <option value="">{field.placeholder || 'Select…'}</option>
        {(field.options || []).map((opt) => {
          const o = typeof opt === 'string' ? { value: opt, label: opt } : opt;
          return (
            <option key={o.value} value={o.value}>{o.label}</option>
          );
        })}
      </select>
    );
  } else if (field.type === 'textarea') {
    control = (
      <textarea
        {...commonProps}
        placeholder={field.placeholder}
        rows={field.rows || 4}
        value={value ?? ''}
        onChange={(e) => onChange(field.name, e.target.value)}
      />
    );
  } else {
    const inputType = field.type === 'money' ? 'text' : (field.type || 'text');
    control = (
      <input
        {...commonProps}
        type={inputType}
        inputMode={field.type === 'money' ? 'numeric' : field.inputMode}
        placeholder={field.placeholder}
        value={value ?? ''}
        onChange={(e) => {
          const v = field.type === 'money' ? formatMoney(e.target.value) : e.target.value;
          onChange(field.name, v);
        }}
      />
    );
  }

  return (
    <div className={fieldClass} key={field.name}>
      <label htmlFor={inputId}>{field.label}</label>
      {control}
    </div>
  );
}

function renderExtraFieldRows(fields, values, onChange, source) {
  const rows = [];
  for (let i = 0; i < fields.length; i += 2) {
    rows.push(fields.slice(i, i + 2));
  }
  return rows.map((row, i) => {
    if (row.length === 1) {
      return renderField(row[0], values[row[0].name], onChange, source);
    }
    return (
      <div className="row2" key={`row-${i}`}>
        {row.map((f) => renderField(f, values[f.name], onChange, source))}
      </div>
    );
  });
}

export default function LeadForm({
  source,
  id,
  head = 'Get your free check',
  note = 'Takes under a minute. AFundmaster Wealth adviser will be in touch.',
  variant,
  submitLabel = 'Get My Free Check',
  submittingLabel = 'Sending…',
  freeLine = 'Free. No obligation.',
  actionUrl = '/api/submit',
  thankYouUrl = DEFAULT_THANK_YOU_URL,
  contactEmail = DEFAULT_LEAD_EMAIL,
  dataLayerEvent = 'lead_form_submit',
  dataLayerFormName = 'first_home_buyer_check',
  incomeLabel = 'Annual Income',
  depositLabel = 'Deposit Available',
  showIncomeDeposit = true,
  extraFields,
}) {
  const formRef = useRef(null);
  const tsRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [income, setIncome] = useState('');
  const [deposit, setDeposit] = useState('');
  const [extraValues, setExtraValues] = useState({});

  const updateExtra = (name, value) => setExtraValues((v) => ({ ...v, [name]: value }));

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
      event: dataLayerEvent,
      form_name: dataLayerFormName,
    });

    try {
      const r = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'X-Requested-With': 'fetch', Accept: 'application/json' },
      });
      const res = await r.json().catch(() => ({ ok: false }));
      if (res && res.ok) {
        window.location.href = thankYouUrl;
        form.reset();
        return;
      }
      setSubmitting(false);
      setErrorMsg(
        (res && res.error) ||
          'Sorry, we could not send that. Please try again, or email ' + contactEmail + '.'
      );
    } catch {
      setSubmitting(false);
      setErrorMsg(
        'We could not reach the server. Please check your connection and try again, or email ' +
          contactEmail +
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
      <form ref={formRef} action={actionUrl} method="post" noValidate onSubmit={handleSubmit}>
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

        {extraFields && extraFields.length > 0 ? (
          renderExtraFieldRows(extraFields, extraValues, updateExtra, source)
        ) : showIncomeDeposit ? (
          <div className="row2">
            <div className="field field--money">
              <label htmlFor={`${source}-income`}>{incomeLabel}</label>
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
              <label htmlFor={`${source}-deposit`}>{depositLabel}</label>
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
        ) : null}

        <button className="btn btn--primary btn--block btn--lg" type="submit" disabled={submitting}>
          {submitting ? submittingLabel : submitLabel}
        </button>

        <p className={`form-msg${errorMsg ? ' is-on' : ''}`} role="alert">{errorMsg}</p>

        {freeLine ? <p className="freeline"><TickIcon />{freeLine}</p> : null}
      </form>
    </div>
  );
}
