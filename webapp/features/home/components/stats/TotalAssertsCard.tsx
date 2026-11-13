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
  ArrowDown,
  ArrowUp,
  Eye,
  EyeClosed,
  Plus,
  TrendingDown,
  Wallet,
} from "lucide-react"
import { formatCurrency } from "@/utils/format-currency"
import { Button } from "../../../../components/ui/button"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { useTheme } from "next-themes"

export default function TotalAssertsCard() {
  const [open, setOpen] = useState(true)
  const { theme } = useTheme()

  function handleAddTransaction() {
    toast.info("Coming soon...")
  }

  return (
    <Card
      className={`max-w-s flex w-full flex-1 gap-2 bg-cover bg-top-right bg-no-repeat ${theme === "light" ? "bg-[url('/bg-total-assert-light.png')]" : "bg-[url('/bg-total-assert-dark.png')]"} `}
    >
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center">
          <CardTitle className="flex gap-1 font-bold text-green-700">
            <Wallet /> Tổng tài sản
          </CardTitle>
          {open ? (
            <Button
              className="hover-visible:bg-transparent hover:cursor-pointer hover:bg-transparent"
              variant={"ghost"}
              onClick={() => setOpen(!open)}
            >
              <EyeClosed className="h-7 w-7 text-green-600" />
            </Button>
          ) : (
            <Button
              className={
                "hover-visible:bg-transparent hover:cursor-pointer hover:bg-transparent"
              }
              variant={"ghost"}
              onClick={() => setOpen(!open)}
            >
              <Eye className="text-green-600" />
            </Button>
          )}
        </div>

        <CardAction>
          <Button
            className={"p-5 font-semibold text-white hover:cursor-pointer"}
            onClick={() => handleAddTransaction()}
          >
            <Plus /> Thêm giao dịch
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="text-gray-600">3 ví đang hoạt động</div>
        <div className="text-3xl font-bold text-primary">
          {formatCurrency(12000000000, open)}
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="mt-2 flex items-center justify-around">
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="rounded-sm bg-green-300 p-1 text-green-500">
            <ArrowUp />
          </div>
          <div className="font-bold text-primary">
            <span className="flex flex-1">Thu</span>
            <span className="font-semibold">{formatCurrency(100000)}</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 font-bold">
          <div className="rounded-sm bg-red-300 p-1 text-red-500">
            <ArrowDown />
          </div>
          <div className="font-bold text-destructive">
            <span className="flex flex-1">Chi</span>
            <span className="font-semibold">{formatCurrency(1324234)}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
