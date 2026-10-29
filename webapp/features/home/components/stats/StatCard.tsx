import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/utils/format-currency"
import { TrendingUp } from "lucide-react"

export default function StatCard() {
  return (
    <Card className="w-full max-w-lg gap-2 bg-accent">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Thu nhập tháng này
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{formatCurrency(120)}</div>
        <div className="mt-1 flex items-center gap-1 text-sm">description</div>
      </CardContent>
    </Card>
  )
}
