import { useFormik } from "formik";

import { useUser } from "../../features/hooks";
import { AddNewComment } from "../../logic/AddNewComment";

import send from "../../assets/icons/send.svg";
import person from "../../assets/icons/person.svg";

export default function AddComment({
  postId,
  InputRef,
  parentId,
  setParentId,
  setComment,
}: {
  postId: number;
  InputRef: any;
  parentId: number | null;
  setParentId: React.Dispatch<React.SetStateAction<number | null>>;
  setComment: any;
}) {
  const user = useUser();

  const formik = useFormik({
    initialValues: {
      content: "",
      postId: postId,
      parentId: parentId,
    },
    enableReinitialize: true,
    onSubmit: AddNewComment({ setComment, postId, parentId }),
  });

  const handleClick = () => {
    formik.setFieldValue("content", "");
    setParentId(null);
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
            // imageSrc={""}
            // imageAlt={""}
            value={formik.values?.content}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              formik.setFieldValue("content", e.target.value)
            }
            ref={InputRef}
          />
          <button
            className="mx-2 w-[150px]"
            type="submit"
            // onClick={handleClick}
          >
            <img alt="send" src={send} className="w-5 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
