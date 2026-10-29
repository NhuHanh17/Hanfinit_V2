import Greeting from "@/components/layout/Greeting"
import { Card } from "@/components/ui/card"
import StatCard from "@/features/home/components/stats/StatCard"
import TotalAssertsCard from "@/features/home/components/stats/TotalAssertsCard"

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <Greeting />
      <div className="grid max-h-svh grid-cols-1 gap-5 py-2 sm:grid-cols-1 lg:grid-cols-2">
        <div className="max-h-svh">
          <TotalAssertsCard />
        </div>
      </div>
      <div className="grid-rows grid gap-3 sm:grid-cols-1 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <StatCard key={index} />
        ))}
      </div>
    </div>
  )
}
