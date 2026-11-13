"use client"

import { Spinner } from "@/components/ui/spinner"
import HomeScreen from "@/features/home/screen/HomeScreen"
import { Suspense } from "react"

export default function Page() {
  return (
    <Suspense fallback={<Spinner />}>
      <HomeScreen />
    </Suspense>
  )
}
