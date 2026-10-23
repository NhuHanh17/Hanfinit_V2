import {
  ArrowLeftRight,
  ChartColumn,
  HandCoinsIcon,
  Home,
  LucideGoal,
  Receipt,
  TargetIcon,
  WalletCards,
} from "lucide-react"

export const SIDEBAR_MENU = [
  {
    label: "Trang chủ",
    icon: Home,
    path: "/",
  },
  {
    label: "Ví",
    icon: WalletCards,
    path: "/wallets",
  },
  {
    label: "Giao dịch",
    icon: ArrowLeftRight,
    path: "/transactions",
  },
  {
    label: "Công nợ",
    icon: HandCoinsIcon,
    path: "/debts",
  },

  {
    label: "Hóa đơn",
    icon: Receipt,
    path: "/bills",
  },
  {
    label: "Mục tiêu tiết kiệm",
    icon: TargetIcon,
    path: "/saving-goals",
  },
  {
    label: "Báo cáo & thống kê",
    icon: ChartColumn,
    path: "/report",
  },
]
