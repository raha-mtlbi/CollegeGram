import Input from "../input";
import { useFormik } from "formik";

import { imageUrl } from "../../api/config";
import { useUser } from "../../features/hooks";
import { AddNewComment } from "../../logic/AddNewComment";

import send from "../../assets/icons/send.svg";

export default function AddComment({ postId }: { postId: string }) {
  const user = useUser();

  const formik = useFormik({
    initialValues: { content: "", postId: "" },
    enableReinitialize: true,
    onSubmit: AddNewComment(),
  });

  return (
    <div className="flex w-full items-center ">
      <img
        src={imageUrl + user?.photo}
        alt="profile"
        className="rounded-full w-[40px] h-[40px] ml-2"
      />

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
          <button className="mx-2 w-[150px]" type="submit" >
            <img alt="send" src={send} className="w-5 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
