export const SITE_NAME = "Smoke In"
export const CURRENCY = "INR"
export const CURRENCY_SYMBOL = "₹"

const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  });

export const formattedPrice = (val) => {
    return formatter.format(val);
}