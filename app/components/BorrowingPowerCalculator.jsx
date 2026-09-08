'use client';

import { useRef, useState } from 'react';
import { estimate, formatMoneyInput, money, parseAmount, weeklyRepay } from './calcModel';

export default function BorrowingPowerCalculator() {
  const [income, setIncome] = useState('');
  const [partner, setPartner] = useState('');
  const [debts, setDebts] = useState('');
  const [deps, setDeps] = useState('0');
  const [deposit, setDeposit] = useState('');
  const [comm, setComm] = useState('');

  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [errFields, setErrFields] = useState([]);
  const resultRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dep = parseAmount(deposit);
    const borrow = estimate(
      parseAmount(income),
      parseAmount(partner),
      parseAmount(debts),
      parseAmount(deps),
      parseAmount(comm)
    );

    if (borrow === null) {
      setError(true);
      setErrFields(['f-inc', 'f-pinc']);
      document.getElementById('f-inc')?.focus();
      return;
    }
    setError(false);
    setErrFields([]);

    const price = borrow + dep;
    setResult({
      borrow: money(borrow),
      price: money(price),
      repay: money(weeklyRepay(borrow)),
    });

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 320);
  };

  const errClass = (id) => (errFields.includes(id) ? ' has-err' : '');

  return (
    <section className="section section--dark" id="borrowing-power">
      <div className="wrap calc">
        <div className="rv">
          <p className="eyebrow">Borrowing power calculator</p>
          <h2>How much could you borrow?</h2>
          <p className="sub">Check your estimated borrowing power.</p>
          <p className="lede">Thinking about buying your first home? Use our borrowing power calculator to get an initial estimate based on your income, deposit and financial commitments.</p>

          <div style={{ marginTop: '34px', padding: '26px 28px', borderRadius: '18px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Want to know what you could realistically buy?</h3>
            <p style={{ margin: '0 0 8px', fontSize: '15px', color: 'rgba(232,240,248,.75)' }}>A borrowing calculator can give you a starting point. A personalised assessment can give you a clearer picture of what may actually be possible.</p>
            <p style={{ margin: '0 0 20px', fontSize: '15px', color: 'rgba(232,240,248,.75)' }}>Speak with aFundmaster Wealth adviser about your circumstances.</p>
            <a className="btn btn--ghost" href="#check">Speak to aFundmaster Wealth Adviser</a>
          </div>
        </div>

        <div className="calc__panel calc__panel--dark rv">
          <p className="formcard__head">Calculator</p>
          <form noValidate onSubmit={handleSubmit}>
            <div className="row2">
              <div className={`field field--money${errClass('f-inc')}`}>
                <label htmlFor="f-inc">Your income</label>
                <input id="f-inc" type="text" inputMode="numeric" placeholder="Enter amount"
                  value={income} onChange={(e) => setIncome(formatMoneyInput(e.target.value))} />
              </div>
              <div className={`field field--money${errClass('f-pinc')}`}>
                <label htmlFor="f-pinc">Partner's income</label>
                <input id="f-pinc" type="text" inputMode="numeric" placeholder="Enter amount"
                  value={partner} onChange={(e) => setPartner(formatMoneyInput(e.target.value))} />
              </div>
            </div>
            <div className="row2">
              <div className="field field--money">
                <label htmlFor="f-debt">Existing debts</label>
                <input id="f-debt" type="text" inputMode="numeric" placeholder="Enter amount"
                  value={debts} onChange={(e) => setDebts(formatMoneyInput(e.target.value))} />
              </div>
              <div className="field">
                <label htmlFor="f-deps">Dependants</label>
                <select id="f-deps" value={deps} onChange={(e) => setDeps(e.target.value)}>
                  <option value="0">Select number</option>
                  <option>1</option><option>2</option><option>3</option><option>4</option>
                  <option value="5">5+</option>
                </select>
              </div>
            </div>
            <div className="row2">
              <div className="field field--money">
                <label htmlFor="f-dep">Deposit</label>
                <input id="f-dep" type="text" inputMode="numeric" placeholder="Enter amount"
                  value={deposit} onChange={(e) => setDeposit(formatMoneyInput(e.target.value))} />
              </div>
              <div className="field field--money">
                <label htmlFor="f-comm">Other commitments</label>
                <input id="f-comm" type="text" inputMode="numeric" placeholder="Enter amount"
                  value={comm} onChange={(e) => setComm(formatMoneyInput(e.target.value))} />
              </div>
            </div>
            <button className="btn btn--primary btn--block btn--lg" type="submit">Calculate My Borrowing Power</button>
            <p className={`calc-err${error ? ' is-on' : ''}`} id="f-err">Please enter your income to see an estimate.</p>
          </form>

          <div ref={resultRef} className={`result${result ? ' is-open' : ''}`} id="f-res">
            <p className="result__label">Estimated borrowing power</p>
            <p className="result__big" id="f-borrow">{result ? result.borrow : '$0'}</p>
            <p className="result__sub">Indicative only — not an offer of lending.</p>
            <div className="result__split">
              <div className="result__cell"><b id="f-price">{result ? result.price : '$0'}</b><span>Indicative purchase price</span></div>
              <div className="result__cell"><b id="f-repay">{result ? result.repay : '$0'}</b><span>Est. weekly repayment</span></div>
            </div>
          </div>
          <p style={{ fontSize: '12.5px', color: 'rgba(232,240,248,.5)', margin: '18px 0 0', lineHeight: 1.6 }}>
            Calculator results are indicative only and do not constitute financial advice or lending approval.
          </p>
        </div>
      </div>
    </section>
  );
}
