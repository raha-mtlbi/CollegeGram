import { useFormik } from "formik";

import { useUser } from "../../features/hooks";
import { AddNewComment } from "../../logic/AddNewComment";

import send from "../../assets/icons/send.svg";
import person from "../../assets/icons/person.svg";

export default function AddComment({
  postId,
  setComment,
}: {
  postId: number;
  setComment: any;
}) {
  const user = useUser();

  const formik = useFormik({
    initialValues: {
      content: "",
      postId: postId,
      parentId: 0,
    },
    enableReinitialize: true,
    onSubmit: AddNewComment({ setComment, postId }),
  });

  return (
    <div className="flex w-full items-center ">
      <div className="relative w-[40px] h-[40px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <img
          alt="profile"
          src={user?.photo ? user?.photo : person}
          className=" w-full h-[85%]"
        />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex w-[90%]">
          <input
            placeholder={"نظر خود را بنویسید..."}
            className="shadow appearance-none border w-80 rounded-3xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8 "
            {...formik.getFieldProps("content")}
          />
          <button className="mx-2 w-[150px]" type="submit">
            <img alt="send" src={send} className="w-5 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
