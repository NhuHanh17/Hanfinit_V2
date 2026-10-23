import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Receipt } from "lucide-react"

export default function StatCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">title</CardTitle>
        <Receipt className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">value</div>
      </CardContent>
    </Card>
  )
}
