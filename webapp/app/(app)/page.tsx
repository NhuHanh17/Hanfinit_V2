import StatCard from "@/features/home/components/stats/stat-card"

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <StatCard key={index} />
      ))}
    </div>
  )
}
