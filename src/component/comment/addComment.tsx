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
    onSubmit: async (data) => {
      const submitHandler = await AddNewComment({
        setComment,
        postId,
        parentId,
      });
      submitHandler(data);
      formik.setValues((prevState) => ({
        ...prevState,
        content: "",
      }));
    },
  });

  return (
    <div className="flex mt-7 items-center">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex  items-center">
          <div className="relative w-[40px] h-[40px] mx-2 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <img
              alt="profile"
              src={user?.photo ? user?.photo : person}
              className=" w-full h-full rounded-full object-fill"
            />
          </div>
          <input
            className="shadow appearance-none md:w-full w-[350px] border rounded-3xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8 "
            placeholder={"نظر خود را بنویسید..."}
            value={formik.values?.content}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              formik.setFieldValue("content", e.target.value)
            }
            ref={InputRef}
          />
          <button
            disabled={!formik.values?.content}
            className="mx-2"
            type="submit"
          >
            <img alt="send" src={send} className="w-5 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
