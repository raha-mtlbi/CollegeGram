import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useAppDispatch } from "../store"
import { registerThunk } from "../features/userSlice"

export default function Signup() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (data: {
    username: string
    email: string
    password: string
  }) => {
    try {
      await dispatch(
        registerThunk({
          username: data.username,
          email: data.email,
          password: data.password,
        })
      ).unwrap()

      toast.success("با موفقیت وارد شدید")
      navigate("/myCollegeGram")
    } catch (error) {
      console.log(error)
      toast.error("مشکلی پیش آمده")
    }
  }

  return handleSubmit
}
