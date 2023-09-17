import { useRef, useState } from "react";

import { FieldArray } from "formik";
import { imageUrl } from "../api/config";
import plus from "../assets/icons/plus.svg";
import close from "../assets/icons/close.svg";

export default function UploadButton({ values }: { values: any }) {
  const fileUploader = useRef<HTMLInputElement | null>(null);

  return (
    <FieldArray
      name="photos"
      render={(arrayHelpers) => (
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 8,
            }}
          >
            {values?.photos?.map((photo: any, index: any) => (
              <div key={index}>
                <img
                  src={
                    URL.createObjectURL(photo)
                  }
                  alt=""
                  style={{
                    width: 200,
                    height: 100,
                    objectFit: "contain",
                    aspectRatio: "4/4",
                  }}
                />
                <button
                  className="translate-y-2/3 bg-white rounded-full p-2"
                  onClick={() => arrayHelpers.remove(index)}
                  type="button"
                >
                  <img src={close} alt="Delete" />
                </button>
              </div>
            ))}
          </div>
          <div>
            <input
              style={{ display: "hidden" }}
              name="custom-file-input"
              id="custom-file-input"
              hidden
              type="file"
              ref={(e) => (fileUploader.current = e)}
              onChange={(e) => {
                if (e.target?.files?.[0]) {
                  arrayHelpers.insert(values.photos?.length, e.target.files[0]);
                }
              }}
              multiple
            />
            <label htmlFor="custom-file-input">
              <button
                className="flex text-right items-center text-[#C38F00] mt-2 mb-4"
                type="button"
                onClick={() => fileUploader.current?.click()}
              >
                <img src={plus} alt="icon" className="ml-2" />
                بارگذاری عکس‌ها
              </button>
            </label>
          </div>
        </div>
      )}
    />
  );
}
