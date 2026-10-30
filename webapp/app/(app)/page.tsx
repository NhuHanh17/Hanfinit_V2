import Greeting from "@/components/layout/Greeting"
import { Card } from "@/components/ui/card"
import MonthlyBudgetCard from "@/features/home/components/MonthlyBudgetCard"
import StatCard from "@/features/home/components/stats/StatCard"
import TotalAssertsCard from "@/features/home/components/stats/TotalAssertsCard"
import UpcomingBillsCard from "@/features/home/components/UpcomingBillsCard"

export default function Page() {
  return (
    <div className="flex flex-col gap-3">
      <Greeting />
      <div className="grid max-h-svh grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="max-h-svh">
          <TotalAssertsCard />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <StatCard key={index} />
        ))}
      </div>
      <UpcomingBillsCard />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <MonthlyBudgetCard />
        <MonthlyBudgetCard />
        <MonthlyBudgetCard />
        <MonthlyBudgetCard />
      </div>
    </div>
  )
}
