export function formatCurrency(
  amount: number | string | null | undefined,
  isHidden: boolean = false
): string {
  const currency: string = "VND"
  const locale: string = "vi-VN"
  const maskString = "*** ***"

  const numericValue = typeof amount === "string" ? parseFloat(amount) : amount

  if (isHidden) {
    return currency.toUpperCase() === "VND"
      ? `${maskString} ₫`
      : `${maskString}`
  }

  if (numericValue == null || isNaN(numericValue)) {
    return "0 ₫"
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: currency.toUpperCase() === "VND" ? 0 : 2,
    minimumFractionDigits: currency.toUpperCase() === "VND" ? 0 : 2,
  }).format(numericValue)
}
