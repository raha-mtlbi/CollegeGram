import Input from "../input";
import { useFormik } from "formik";
import { AddNewComment } from "../../logic/AddNewComment";
<<<<<<< HEAD
import { useUser } from "../../features/hooks";
import { imageUrl } from "../../api/config";

import send from "../../assets/icons/send.svg";

export default function AddComment({ postId }: { postId: number }) {
  const user = useUser();

  const formik = useFormik({
    initialValues: { content: "", postId: postId as number },
=======

import send from "../../assets/icons/send.svg";
import profile from "../../assets/images/picture frame.svg";

export default function AddComment({ postId }: { postId: string }) {
  const formik = useFormik({
    initialValues: { content: "", postId: "" },
>>>>>>> 1670c02db9279f5b4ccd1a8fabcf1d3b1b1a7dcc
    enableReinitialize: true,
    onSubmit: AddNewComment(),
  });

  return (
    <div className="flex w-full ">
      <div className="flex rounded-full h-[40px] ml-2">
<<<<<<< HEAD
        <img src={imageUrl + user?.photo} alt="profile" />
=======
        <img src={profile} alt="profile" />
>>>>>>> 1670c02db9279f5b4ccd1a8fabcf1d3b1b1a7dcc
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
<<<<<<< HEAD
            <img alt="send" src={send} />
=======
            <img alt="send" src={send} width={20} height={20} />
>>>>>>> 1670c02db9279f5b4ccd1a8fabcf1d3b1b1a7dcc
          </button>
        </div>
      </form>
    </div>
  );
}
