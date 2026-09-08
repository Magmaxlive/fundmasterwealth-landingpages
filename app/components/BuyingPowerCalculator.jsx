'use client';

import { useRef, useState } from 'react';
import { depositPosition, estimate, formatMoneyInput, money, parseAmount } from './calcModel';

export default function BuyingPowerCalculator() {
  const [income, setIncome] = useState('');
  const [partner, setPartner] = useState('');
  const [deposit, setDeposit] = useState('');
  const [debts, setDebts] = useState('');
  const [deps, setDeps] = useState('0');

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
      0
    );

    if (borrow === null) {
      setError(true);
      setErrFields(['q-inc', 'q-pinc']);
      document.getElementById('q-inc')?.focus();
      return;
    }
    setError(false);
    setErrFields([]);

    const price = borrow + dep;
    setResult({
      price: money(price),
      borrow: money(borrow),
      lvr: depositPosition(dep, price),
    });

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 320);
  };

  const errClass = (id) => (errFields.includes(id) ? ' has-err' : '');

  return (
    <section className="section section--dark" id="buying-power">
      <div className="wrap calc">
        <div className="rv">
          <p className="eyebrow">Quick check</p>
          <h2>What's your buying power?</h2>
          <p className="sub">Get an initial estimate before you start house hunting.</p>
          <p className="lede">Use our quick calculator to get an indication of your potential borrowing position.</p>

          <div style={{ marginTop: '34px', padding: '26px 28px', borderRadius: '18px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Want a more accurate assessment?</h3>
            <p style={{ margin: '0 0 20px', fontSize: '15px', color: 'rgba(232,240,248,.75)' }}>A calculator gives you an estimate. Your actual borrowing position depends on your complete financial circumstances.</p>
            <a className="btn btn--ghost" href="#check">Get My Free Assessment</a>
          </div>
        </div>

        <div className="calc__panel calc__panel--dark rv">
          <p className="formcard__head">Quick check</p>
          <form noValidate onSubmit={handleSubmit}>
            <div className="row2">
              <div className={`field field--money${errClass('q-inc')}`}>
                <label htmlFor="q-inc">Your income</label>
                <input id="q-inc" type="text" inputMode="numeric" placeholder="Enter amount"
                  value={income} onChange={(e) => setIncome(formatMoneyInput(e.target.value))} />
              </div>
              <div className={`field field--money${errClass('q-pinc')}`}>
                <label htmlFor="q-pinc">Partner's income</label>
                <input id="q-pinc" type="text" inputMode="numeric" placeholder="Enter amount"
                  value={partner} onChange={(e) => setPartner(formatMoneyInput(e.target.value))} />
              </div>
            </div>
            <div className="row2">
              <div className="field field--money">
                <label htmlFor="q-dep">Your deposit</label>
                <input id="q-dep" type="text" inputMode="numeric" placeholder="Enter amount"
                  value={deposit} onChange={(e) => setDeposit(formatMoneyInput(e.target.value))} />
              </div>
              <div className="field field--money">
                <label htmlFor="q-debt">Existing debts</label>
                <input id="q-debt" type="text" inputMode="numeric" placeholder="Enter amount"
                  value={debts} onChange={(e) => setDebts(formatMoneyInput(e.target.value))} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="q-dep-n">Dependants</label>
              <select id="q-dep-n" value={deps} onChange={(e) => setDeps(e.target.value)}>
                <option value="0">Select number</option>
                <option>1</option><option>2</option><option>3</option><option>4</option>
                <option value="5">5+</option>
              </select>
            </div>
            <button className="btn btn--primary btn--block btn--lg" type="submit">Calculate My Buying Power</button>
            <p className={`calc-err${error ? ' is-on' : ''}`} id="q-err">Please enter your income to see an estimate.</p>
          </form>

          <div ref={resultRef} className={`result${result ? ' is-open' : ''}`} id="q-res">
            <p className="result__label">Indicative purchase price</p>
            <p className="result__big" id="q-price">{result ? result.price : '$0'}</p>
            <p className="result__sub">Based on the figures you entered. Indicative only.</p>
            <div className="result__split">
              <div className="result__cell"><b id="q-borrow">{result ? result.borrow : '$0'}</b><span>Estimated lending</span></div>
              <div className="result__cell"><b id="q-lvr">{result ? result.lvr : '—'}</b><span>Deposit position</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
