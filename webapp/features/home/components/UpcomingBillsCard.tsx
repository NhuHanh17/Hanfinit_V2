"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { formatCurrency } from "@/utils/format-currency"
import { MoveRightIcon } from "lucide-react"
import { redirect } from "next/navigation"

export default function () {
  function handleViewDetail() {
    redirect("/bills")
  }

  return (
    <Card>
      <CardHeader className="flex flex-1 justify-between">
        <div>
          <CardTitle>Hóa đơn sắp đến hạn</CardTitle>
          <CardDescription>
            2 Hóa đơn - {formatCurrency(255000)}
          </CardDescription>
        </div>
        <CardAction onClick={handleViewDetail}>
          <Button variant={"ghost"} className={"cursor-pointer"}>
            Xem chi tiết <MoveRightIcon />
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>02 Tháng 11</TableCell>
              <TableCell className="flex flex-col">
                <span className="font-semibold">Internet - FPT</span>
                <span className="text-xs text-muted-foreground">Còn..ngày</span>
              </TableCell>
              <TableCell className="text-right font-bold text-destructive">
                {formatCurrency(255000)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
