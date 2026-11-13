import { ChartPieDonutText } from "@/components/chart/chart-pie-donut"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { formatCurrency } from "@/utils/format-currency"
import { MoveRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BudgetProgress() {
  const router = useRouter()

  function handleDetail() {
    router.push("/saving-goals")
  }

  return (
    <Card className="">
      <CardHeader className="flex justify-between">
        <CardTitle className="font-bold">Mục tiêu tiết kiệm</CardTitle>
        <Button
          onClick={handleDetail}
          variant={"ghost"}
          className="item-center flex justify-center gap-1"
        >
          Xem chi tiết
          <MoveRight />
        </Button>
      </CardHeader>
      <CardContent className="flex flex-row items-center gap-5">
        <div className="relative flex h-30 w-30 shrink-0 items-center justify-center rounded-2xl bg-accent">
          <ChartPieDonutText />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
          <span className="flex text-xl font-semibold text-primary">
            Tên mục tiêu tiết kiệm
          </span>
          <span className="text-sm font-bold">
            Đã tiết kiệm
            <span className="text-primary"> {formatCurrency(12000)}</span>
          </span>
          <Separator />
          <div className="flex justify-between">
            <span className="text-muted-foreground">Ngày đến hạn</span>
            <span className="font-bold text-destructive">13/11/2026</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
