export const RATE = 0.065;
export const TERM = 30;
export const MULTIPLE = 5.5;
export const DEBT_FACTOR = 4;
export const DEP_COST = 12000;

export function parseAmount(v) {
  const n = parseFloat(String(v).replace(/[^0-9.]/g, ''));
  return isNaN(n) ? 0 : n;
}

export function formatMoneyInput(value) {
  const raw = value.replace(/[^0-9]/g, '');
  return raw ? Number(raw).toLocaleString('en-NZ') : '';
}

export function money(n) {
  return '$' + Math.round(n).toLocaleString('en-NZ');
}

export function estimate(income, partner, debts, deps, commitments) {
  const household = income + partner;
  if (household <= 0) return null;
  const adjusted = household - deps * DEP_COST - (commitments || 0);
  return Math.max(0, adjusted * MULTIPLE - debts * DEBT_FACTOR);
}

export function weeklyRepay(principal) {
  const r = RATE / 12;
  const n = TERM * 12;
  if (principal <= 0) return 0;
  const monthly = (principal * r) / (1 - Math.pow(1 + r, -n));
  return (monthly * 12) / 52;
}

export function depositPosition(deposit, price) {
  if (price <= 0) return '—';
  return ((deposit / price) * 100).toFixed(0) + '% deposit';
}
