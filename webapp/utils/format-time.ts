export function formatGreetingDate() {
  const date = new Date()
  if (isNaN(date.getTime())) return ""

  const rawWeekday = date.toLocaleDateString("vi-VN", { weekday: "long" })
  const weekday = rawWeekday.charAt(0).toUpperCase() + rawWeekday.slice(1)

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${weekday}, ngày ${day} tháng ${month} năm ${year}`
}
