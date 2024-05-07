export function getISODate(date) {
  if (!date) return;
  const isoDate = date.toString().slice(0, 10).split('-');
  const dateFormat = isoDate[1] + '/' + isoDate[2] + '/' + isoDate[0];
  return dateFormat;
}

// use: currencyFormatter.format(price)
export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
