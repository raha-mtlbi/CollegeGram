import Input from "../input";
import { useFormik } from "formik";

import { useUser } from "../../features/hooks";
import { AddNewComment } from "../../logic/AddNewComment";

import send from "../../assets/icons/send.svg";

export default function AddComment({ postId }: { postId: number }) {
  const user = useUser();

  const formik = useFormik({
    initialValues: {
      content: "",
      postId: postId,
      parentId: 0,
    },
    enableReinitialize: true,
    onSubmit: AddNewComment(),
  });

  return (
    <div className="flex w-full items-center ">
      <div className="relative w-[40px] h-[40px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        {user?.photo ? (
          <img alt="profile" src={user?.photo} className=" w-full h-[85%]" />
        ) : (
          <svg
            className="absolute w-[30px] h-[30px] text-center text-gray-400 -left-[-5px]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        )}
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex w-[90%]">
          {/* <input /> */}
          <Input
            placeholder={"نظر خود را بنویسید..."}
            imageSrc={""}
            imageAlt={""}
            value={formik.values?.content}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              formik.setFieldValue("content", e.target.value)
            }
          />
          <button className="mx-2 w-[150px]" type="submit">
            <img alt="send" src={send} className="w-5 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
