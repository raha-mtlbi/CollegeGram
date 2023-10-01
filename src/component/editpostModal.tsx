import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import Button from "./button";
import { useFormik } from "formik";

import { AddPostValidation } from "../utils/validations";
import { EditPost } from "../logic/EditPost";
import { IImage } from "../api/type/images";
import { get } from "../api";
import { UpdatePost } from "../api/post";
import { toast } from "react-toastify";

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
  const [photoDetail, setPhotoDetail] = useState<IImage[] | any>();

  useEffect(() => {
    get(`/post/${id}`)
      .then((d: any) => setPhotoDetail(d))
      .catch((e) => console.log(e));
  }, [id]);

  const formik = useFormik({
    initialValues: {
      caption: caption || "",
      closeFriend: closeFriend,
      tags: tag?.join(" ") || [""],
    },
    enableReinitialize: true,
    validationSchema: AddPostValidation,
    // onSubmit: EditPost({ id, onClose }),
    async onSubmit(data: {
      caption: string;
      closeFriend: boolean;
      tags: string[];
    }) {
      try {
        await UpdatePost(
          {
            caption: data.caption,
            closeFriend: data.closeFriend,
            tags: data.tags,
          },
          id
        );
        const newData = await get(`/post/${id}`);
        setPhotoDetail(newData);
        toast.success("پست با موفقیت به روزرسانی شد");
        onClose();
      } catch (error) {
        console.log(error);
        onClose();
      }
    },
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="flex justify-center items-center "
      style={{ direction: "rtl" }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center ">
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#F3F0EE] p-6 text-left align-middle shadow-xl">
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
                <Button title={"ثبت تغییرات"} width={"110px"} type="submit" />
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </form>
    </Dialog>
  );
};

export default EditPostModal;
