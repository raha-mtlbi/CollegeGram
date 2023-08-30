import { useRef } from "react";
import { FieldArray } from "formik";

import plus from "../assets/icons/plus.svg";
import close from "../assets/icons/close.svg";

export default function UploadButton({ values }: { values?: any }) {
  const fileUploader = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <FieldArray
        name="photos"
        render={(arrayHelpers) => (
          <div>
            <input
              type="file"
              name="custom-file-input"
              id="custom-file-input"
              className="hidden"
              ref={(e) => (fileUploader.current = e)}
              onChange={(e) => {
                if (e.target?.files?.[0]) {
                  arrayHelpers.insert(values.photos?.length, e.target.files[0]);
                }
              }}
              accept="/image*"
              multiple
            />
            <label htmlFor={"custom-file-input"} className=" p-2">
              <button
                className=" flex items-center cursor-pointer"
                onClick={() => fileUploader.current?.click()}
                type="button"
              >
                <img alt="camera" src={plus} className="w-[16px] h-[16px] " />
                <p className="text-[#C19008] mr-3 font-bold">بارگذاری عکس‌ها</p>
              </button>
            </label>

            <div className=" grid grid-cols-4 gap-4  ">
              {values?.photos?.map((photo: any, index: any) => (
                <div>
                  <button className=" absolute">
                    <img
                      alt="close"
                      src={close}
                      className=" bg-white rounded-[50%] p-2"
                      onClick={() => arrayHelpers.remove(index)}
                    />
                  </button>
                  <img
                    src={photo?.image}
                    alt=""
                    className="w-[110px] h-[110px] rounded-[24px]"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      />
    </div>
  );
}
