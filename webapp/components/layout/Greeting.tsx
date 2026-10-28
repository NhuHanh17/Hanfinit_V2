import { formatGreetingDate } from "@/utils/format-time"
import { getGreeting } from "@/utils/get-greetting"
import { Calendar } from "lucide-react"
import { Card } from "../ui/card"

export default function Greeting() {
  return (
    <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">
          {getGreeting()}, Bro
        </h1>
        <p className="text:sm text-muted-foreground">
          Quản lý tài chính của bạn
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-1">
        <Calendar className="size-5 text-primary" />
        <span>{formatGreetingDate()}</span>
      </div>
    </div>
  )
}
