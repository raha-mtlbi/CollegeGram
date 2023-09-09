import Input from "../input";
import { useFormik } from "formik";

import { imageUrl } from "../../api/config";
import { useUser } from "../../features/hooks";
import { AddNewComment } from "../../logic/AddNewComment";

import send from "../../assets/icons/send.svg";

export default function AddComment({ postId }: { postId: number }) {
  const user = useUser();

  const formik = useFormik({
    initialValues: { content: "", postId: "" },
    enableReinitialize: true,
    onSubmit: AddNewComment(),
  });

  return (
    <div className="flex w-full ">
      <div className="flex rounded-full h-[40px] ml-2">
        <img src={imageUrl + user?.photo} alt="profile" />
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
            <img alt="send" src={send} />
          </button>
        </div>
      </form>
    </div>
  );
}
