import Greeting from "@/components/layout/Greeting"
import TotalAssertsCard from "../components/stats/TotalAssertsCard"
import StatCard from "../components/stats/StatCard"
import UpcomingBillsCard from "../components/UpcomingBillsCard"
import MonthlyBudgetCard from "../components/MonthlyBudgetCard"
import BudgetProgress from "../components/BudgetProgress"

export default function HomeScreen() {
  return (
    <div className="flex flex-col gap-3">
      <Greeting />
      <div className="max-h-svh">
        <TotalAssertsCard />
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

      <BudgetProgress />
    </div>
  )
}
