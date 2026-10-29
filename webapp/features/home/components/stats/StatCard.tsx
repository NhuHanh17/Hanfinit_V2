import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/utils/format-currency"
import { TrendingUp } from "lucide-react"

export default function StatCard() {
  return (
    <Card className="w-full max-w-lg gap-2 bg-accent">
      <CardHeader className="pb-2">
        <CardTitle className="text-xs font-medium text-muted-foreground sm:text-xs lg:text-sm">
          Thu nhập tháng này
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-lg font-bold sm:text-lg lg:text-3xl">
          {formatCurrency(120)}
        </div>
        <div className="mt-1 flex items-center text-sm">description</div>
      </CardContent>
    </Card>
  )
}
