import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/utils/format-currency"
import { TrendingUp } from "lucide-react"

export default function StatCard() {
  return (
    <Card className="w-full max-w-xs gap-2 bg-accent">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Thu
        </CardTitle>
      </CardHeader>
      <CardContent className="flex gap-4">
        <div className="overflow-auto text-2xl font-bold sm:text-sm lg:text-2xl">
          {formatCurrency(1500000)}
        </div>
        <div className="mt-1 flex items-center gap-1 text-sm text-primary">
          <TrendingUp />
          <span className="">+20%</span>
          <span className="text-muted-foreground">So với tháng trước</span>
        </div>
      </CardContent>
    </Card>
  )
}
