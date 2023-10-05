import React, { useState } from "react";
import Button from "./button";
import { useFormik } from "formik";

import UploadButton from "./uploadButton";
import { AddPostValidation } from "../utils/validations";
import { AddNewPost } from "../logic/addNewPost";
import MyModal from "./Modal";
import LoadingPage from "../page/loading";

const CreatePostModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: any;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      caption: "",
      closeFriend: Boolean(false),
      tags: [""],
      photos: undefined,
    },
    enableReinitialize: true,
    validationSchema: AddPostValidation,
    onSubmit: AddNewPost({ onClose, setLoading }),
  });

  return (
    <MyModal open={open} onClose={onClose}>
      <p className="text-center text-[20px] font-bold not-italic leading-normal my-2 ">
        افزودن پست
      </p>
      <form onSubmit={formik.handleSubmit}>
        <UploadButton
          imagesUpload={(f: any) => formik.setFieldValue("photos", f)}
        />
        <div className="mb-5">
          <p className="my-2 text-[#17494D] text-start">توضیحات</p>
          <textarea
            value={formik.values?.caption}
            onChange={(e: any) =>
              formik.setFieldValue("caption", e.target.value)
            }
            className=" w-80 p-2 h-[164px] rounded-[10px] bg-[#F3F0EE]	border border-[#17494d80] resize-none"
          />
        </div>
        <div className="my-5">
          <p className="mb-2 text-[#17494D] text-start">تگ‌ها</p>
          <input
            className="w-full px-2 h-[40px] rounded-[10px] bg-[#F3F0EE]	border border-[#17494d80] resize-none"
            value={formik.values?.tags}
            type="text"
            onChange={(e: any) => formik.setFieldValue("tags", e.target.value)}
          />
        </div>
        <div className="flex ">
          <label className="relative inline-flex items-center cursor-pointer mb-6 mt-3">
            <span className="ml-3 text-sm font-medium text-[#17494D] ">
              فقط نمایش به دوستان نزدیک
            </span>
            <input
              type="checkbox"
              className="sr-only peer"
              {...formik.getFieldProps("closeFriend")}
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
            <Button
              disabled={!formik.values?.photos}
              title={"ثبت عکس"}
              type="submit"
            />
          )}
        </div>
      </form>
    </MyModal>
  );
};

export default CreatePostModal;
