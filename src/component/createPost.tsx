import { Dialog } from "@headlessui/react";
import Button from "./button";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import { createPost } from "../api/type/images";
import UploadButton from "./uploadButton";

const CreatePostModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { values, handleSubmit, setFieldValue } = useFormik({
    initialValues: { description: "", tag: "" },
    enableReinitialize: true,
    async onSubmit(
      data: { description: string; tag: string },
      { setSubmitting }: any
    ) {
      try {
        setSubmitting(true);
        await createPost(data);
        toast.success("با موفقیت وارد شدید");
        onClose();
      } catch (error) {
        console.log(error);
        toast.error("مشکلی پیش آمده");
      } finally {
        setSubmitting(false);
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
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <form onSubmit={handleSubmit}>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center ">
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#F3F0EE] p-6 text-left align-middle shadow-xl transition-all">
              <p className="text-center text-[20px] font-bold not-italic leading-normal my-2 ">
                افزودن پست
              </p>
              <UploadButton />
              <div className="mb-5">
                <p className="my-2 text-[#17494D] text-start">توضیحات</p>
                <textarea
                  value={values?.description}
                  onChange={(e: any) =>
                    setFieldValue("description", e?.target?.value)
                  }
                  className=" w-full p-2 h-[164px] rounded-[10px] bg-[#F3F0EE]	border border-[#17494d80] resize-none"
                />
              </div>
              <div className="my-5">
                <p className="mb-2 text-[#17494D] text-start">تگ‌ها</p>
                <input className="w-full px-2 h-[40px] rounded-[10px] bg-[#F3F0EE]	border border-[#17494d80] resize-none" />
              </div>
              <div className="flex justify-start">
                <label className="relative inline-flex items-center cursor-pointer mb-6 mt-3">
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    فقط نمایش به دوستان نزدیک
                  </span>
                  <input type="checkbox" value="" className="sr-only peer" />
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

export default CreatePostModal;
