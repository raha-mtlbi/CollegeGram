import Input from "../input";
import { useFormik } from "formik";
import { AddNewComment } from "../../logic/AddNewComment";

import send from "../../assets/icons/send.svg";
import profile from "../../assets/images/picture frame.svg";

export default function AddComment({ postId }: { postId: number }) {
  const formik = useFormik({
    initialValues: { content: "", postId: postId as number },
    enableReinitialize: true,
    onSubmit: AddNewComment(),
  });

  return (
    <div className="flex w-full ">
      <div className="flex rounded-full h-[40px] ml-2">
        <img src={profile} alt="profile" />
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="flex">
          <Input
            placeholder={"نظر خود را بنویسید..."}
            imageSrc={""}
            imageAlt={""}
            value={formik.values?.content}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              formik.setFieldValue("content", e.target.value)
            }
          />
          <button className="mx-2" type="submit">
            <img alt="send" src={send} width={20} height={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
