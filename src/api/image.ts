import { post } from "."

export const createPost = (data: {
  caption: string
  closeFriend: boolean
  tags: string[]
  photos: FileList[]
}) => {
  return post("/post", data)
}
