import Greeting from "@/components/layout/Greeting"
import StatCard from "@/features/home/components/stats/StatCard"
import TotalAssertsCard from "@/features/home/components/stats/TotalAssertsCard"

export default function Page() {
  return (
    <>
      <div className="">
        <Greeting />
        <div className="grid grid-cols-1 gap-5 py-2 sm:grid-cols-1 lg:grid-cols-2">
          <div>
            <TotalAssertsCard />
          </div>
          <div className="flex flex-1 gap-5">
            {Array.from({ length: 2 }).map((_, index) => (
              <StatCard key={index} />
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </>
  )
}
