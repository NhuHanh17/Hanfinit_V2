import { axiosClient } from "@/lib/axiosClient"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const useRegister = () => {
  const router = useRouter()

  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axiosClient.post("/auth/register", data)
      return response.data
    },

    onSuccess: () => {
      toast.success("Đăng ký thành công! Đến đăng nhập ")
      router.push("/auth/login")
    },
    onError: (error: any) => {
      const message = error.response?.data?.message || "Đăng ký thật bại"
      toast.error(message)
    },
  })
}

export const useLogin = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axiosClient.post("/auth/login", data)
      return response.data
    },

    onSuccess: (data) => {
      toast.success("Đăng nhập thành công!")
      queryClient.invalidateQueries()
      router.push("/")
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.message || "Tài khoản hoặc mật khẩu không đúng!"

      toast.error(message)
    },
  })
}

export const uselogout = () => {
  const router = useRouter()

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      await axiosClient.post("/auth/logout")
    },
    onSuccess: () => {
      queryClient.clear()

      router.push("/auth/login")
    },

    onError: () => {
      toast.error("Có lỗi xảy ra khi đăng nhập")
    },
  })
}
