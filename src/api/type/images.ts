import { post } from "..";

export interface IImage {
  id: string;
  src: string;
}

export const createPost = (data: {
  description: string;
  tag: string;
  photo?: File;
}) => {
  return post("/", data);
};
