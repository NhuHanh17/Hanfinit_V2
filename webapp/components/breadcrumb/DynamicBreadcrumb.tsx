"use client"
import { usePathname } from "next/navigation"
import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb"
import Link from "next/link"

const ROUTE_LABELS: Record<string, string> = {
  dashboard: "Tổng quan",
  wallets: "Ví",
  transactions: "Giao dịch",
  debts: "Công nợ",
  invoices: "Hóa đơn",
  savings: "Mục tiêu tiết kiệm",
  reports: "Báo cáo & thống kê",
  settings: "Cài đặt",
  create: "Tạo mới",
  edit: "Chỉnh sửa",
}

export function DynamicBreadcrumb() {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter((segment) => segment !== "")

  return (
    <Breadcrumb className="hidden sm:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          {pathSegments.length === 0 ? (
            <BreadcrumbPage>Trang chủ</BreadcrumbPage>
          ) : (
            <BreadcrumbLink
              render={(prop) => <Link href={"/"}>Trang chủ</Link>}
            ></BreadcrumbLink>
          )}
        </BreadcrumbItem>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`
          const isLast = index === pathSegments.length - 1

          const label =
            ROUTE_LABELS[segment] ||
            decodeURIComponent(segment.replace(/-/g, ""))

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    render={(prop) => <Link href={href}>{label}</Link>}
                  />
                )}
              </BreadcrumbItem>
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
