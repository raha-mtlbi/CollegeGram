import { post } from "..";

export interface IImage {
  id: string;
  src: string;
}

export const createPost = (data: { description: string; tag: string }) => {
  return post("/", data);
};
