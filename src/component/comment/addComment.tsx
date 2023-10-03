import { useFormik } from "formik";

import { useUser } from "../../features/hooks";
import { AddNewComment } from "../../logic/AddNewComment";

import send from "../../assets/icons/send.svg";
import { useRef, useState } from "react";

export default function AddComment(
  { postId }: { postId: number },
  { ref }: { ref: any },
  { reply }: { reply: boolean },
  { setReply }: { setReply: React.Dispatch<React.SetStateAction<boolean>> }
) {
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

  const handleClick = () => {
    ref.current.focus();
    setReply(false);
  };

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
            imageSrc={""}
            imageAlt={""}
            value={formik.values?.content}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              formik.setFieldValue("content", e.target.value)
            }
            ref={ref}
          />
          <button
            className="mx-2 w-[150px]"
            type="submit"
            // onClick={(e: any) => setReply(false)}
            onClick={handleClick}
          >
            <img alt="send" src={send} className="w-5 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
