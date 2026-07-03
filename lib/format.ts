export function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

export function calculateVat(subtotal: number, rate = 0.1) {
  return subtotal * rate;
}
