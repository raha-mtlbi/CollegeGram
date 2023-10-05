import React, { useState } from "react";
import { useFormik } from "formik";

import { AddPostValidation } from "../utils/validations";
import Button from "./button";
import MyModal from "./Modal";
import LoadingPage from "../page/loading";
import { EditPost } from "../logic/EditPost";

const EditPostModal = ({
  open,
  onClose,
  id,
  caption,
  tag,
  closeFriend,
}: {
  open: boolean;
  onClose: any;
  id: number;
  caption: string;
  tag: any;
  closeFriend: boolean;
}) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      caption: caption || "",
      closeFriend: closeFriend,
      tags: tag?.join(" ") || [""],
    },
    enableReinitialize: true,
    validationSchema: AddPostValidation,
    onSubmit: EditPost({ id, onClose, setLoading }),
  });

  return (
    <MyModal open={open} onClose={onClose}>
      <form onSubmit={formik.handleSubmit} style={{ width: 350 }}>
        <p className="text-center text-[20px] font-bold not-italic leading-normal my-2 ">
          ویرایش پست
        </p>
        <div className="mb-5">
          <p className="my-2 text-[#17494D] text-start">توضیحات</p>
          <textarea
            placeholder={caption}
            {...formik.getFieldProps("caption")}
            className=" w-full p-2 h-[164px] rounded-[10px] bg-[#F3F0EE]	border border-[#17494d80] resize-none"
          />
        </div>
        <div className="my-5">
          <p className="mb-2 text-[#17494D] text-start">تگ‌ها</p>
          <input
            className="w-full px-2 h-[40px] rounded-[10px] bg-[#F3F0EE]	border border-[#17494d80] resize-none"
            type="text"
            {...formik.getFieldProps("tags")}
          />
        </div>
        <div className="flex justify-start">
          <label className="relative inline-flex items-center cursor-pointer mb-6 mt-3">
            <span className="ml-3 text-sm font-medium text-[#17494D] ">
              فقط نمایش به دوستان نزدیک
            </span>
            <input
              type="checkbox"
              checked={formik.values.closeFriend}
              {...formik.getFieldProps("closeFriend")}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus: rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-gray-800"></div>
          </label>
        </div>
        <div className="flex justify-end">
          <button className="mx-6" onClick={onClose}>
            پشیمون شدم
          </button>
          {loading ? (
            <LoadingPage />
          ) : (
            <Button title={"ثبت تغییرات"} type="submit" />
          )}
        </div>
      </form>
    </MyModal>
  );
};

export default EditPostModal;
