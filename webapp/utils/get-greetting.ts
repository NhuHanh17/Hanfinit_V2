export function getGreeting() {
  const date = new Date()
  const hour = date.getHours()

  if (hour >= 5 && hour < 12) return "Chào buổi sáng"
  if (hour >= 12 && hour < 18) return "Chào buổi chiều"

  return "Chào buổi tối"
}
