"use client"

import { useState } from "react"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card"
import {
  Eye,
  EyeClosed,
  Plus,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react"
import { formatCurrency } from "@/utils/format-currency"
import { Button } from "../../../../components/ui/button"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

export default function TotalAssertsCard() {
  const [open, setOpen] = useState(true)

  function handleAddTransaction() {
    toast.info("Coming soon...")
  }

  return (
    <Card className="max-w-s flex w-full flex-1 gap-2 bg-[url('/background-total-money.png')] bg-cover bg-top-right bg-no-repeat">
      <CardHeader className="flex flex-row items-center">
        <CardTitle className="flex gap-1 font-bold text-green-700">
          <Wallet /> Tổng tài sản
        </CardTitle>
        {open ? (
          <Button
            className="hover:bg-transparent focus:cursor-pointer focus-visible:bg-transparent"
            variant={"ghost"}
            onClick={() => setOpen(!open)}
          >
            <EyeClosed className="h-7 w-7 text-green-600" />
          </Button>
        ) : (
          <Button
            className={
              "hover:bg-transparent focus:cursor-pointer focus-visible:bg-transparent"
            }
            variant={"ghost"}
            onClick={() => setOpen(!open)}
          >
            <Eye className="text-green-600" />
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-primary">
          {formatCurrency(12000000000, open)}
        </div>
        <div className="text-muted-foreground">3 ví đang hoạt động</div>
        <CardAction>
          <Button
            className={"p-5 font-semibold text-background"}
            onClick={() => handleAddTransaction()}
          >
            <Plus /> Thêm giao dịch
          </Button>
        </CardAction>
      </CardContent>
      <Separator />
      <CardFooter className="gap-6">
        <div className="flex flex-col items-center justify-center font-bold text-primary">
          <span className="flex flex-1">
            Thu <TrendingUp />
          </span>
          <span className="font-semibold">{formatCurrency(100000)}</span>
        </div>
        <div className="flex flex-col items-center justify-center font-bold text-destructive">
          <span className="flex flex-1">
            Chi <TrendingDown />
          </span>
          <span className="font-semibold">{formatCurrency(1324234)}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
