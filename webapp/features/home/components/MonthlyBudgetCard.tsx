"use client"

import ResourceUsage from "@/components/common/ResourceUsage"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MoveRight } from "lucide-react"
import { redirect } from "next/navigation"

export default function MonthlyBudgetCard() {
  return (
    <Card>
      <CardHeader className="flex justify-between">
        <div>
          <CardTitle className="text-sm font-semibold">
            Ngân sách tháng này
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Đã dùng..%{" "}
          </CardDescription>
        </div>
        <CardAction onClick={() => redirect("/budgets")}>
          <Button variant={"ghost"} className={"hover:cursor-pointer"}>
            Chi tiết <MoveRight />
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <ResourceUsage label="Mua sắm" used={10} />
        <ResourceUsage label="cá nhân" used={40} />
        <ResourceUsage label="Khác" used={5} />
        <ResourceUsage label="Di chuyển" used={80} />
      </CardContent>
    </Card>
  )
}
