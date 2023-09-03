import { post } from "."

export const createPost = (data: {
  caption: string
  tags: string[]
  photos?: File
}) => {
  return post("/createPost", data)
}
