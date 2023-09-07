import { post } from "."

export const createPost = (data: {
<<<<<<< HEAD
  caption: string;
  closeFriend: boolean;
  tags: string[];
  photos?: File;
}) => {
  const formData = new FormData();
  data.photos && formData.append("photo", data.photos);

  return post("/post", data);
};
=======
  caption: string
  tags: string[]
  photos?: File
}) => {
  return post("/createPost", data)
}
>>>>>>> 1670c02db9279f5b4ccd1a8fabcf1d3b1b1a7dcc
