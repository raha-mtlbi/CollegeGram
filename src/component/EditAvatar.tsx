import React, { useRef, useState } from "react";
import { imageUrl } from "../api/config";
import { useUser } from "../features/hooks";

import camera from "../assets/icons/camera.svg";
import close from "../assets/icons/close.svg";
import refresh from "../assets/icons/refresh.svg";
import { EditProfile } from "../api/user";
import { useAppDispatch } from "../store";
import { getCurrentUser } from "../features/userSlice";

export default function Avatar({ onChange }: { onChange: any }) {
  const user = useUser();
  const fileUploader = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<any>();
  const dispatch = useAppDispatch();

  const deleteImage = () => {
    EditProfile({ photo: "null" }).then(() => dispatch(getCurrentUser()));
  };

  return (
    <div>
      <label htmlFor={"x"} className="flex justify-center p-2">
        <input
          type="file"
          id={"x"}
          className="hidden"
          ref={(e) => (fileUploader.current = e)}
          onChange={(e) => {
            if (e.target.files && e.target.files?.length > 0) {
              const file = e.target.files[0];
              onChange && onChange(file);
              setPreview(URL.createObjectURL(file));
            }
          }}
        />
        <div className="w-[90px] h-[90px] rounded-[50%] border-2 border-[#C19008] flex justify-center items-center ">
          <img
            alt="camera"
            src={preview ? preview : user ? imageUrl + user?.photo : camera}
            className={
              user
                ? "w-[90px] h-[90px] rounded-[50%] object-fill"
                : "w-[36px] h-[36px] cursor-pointer"
            }
          />
          {user?.photo && (
            <img
              alt="refresh"
              src={refresh}
              className=" absolute p-1 bg-white rounded-[50%] cursor-pointer"
            />
          )}
        </div>
      </label>
      <p className="text-center">عکس پروفایل</p>
      {user?.photo && (
        <button
          type="button"
          className="flex justify-center mx-auto mb-7 mt-2  items-center"
          onClick={() => {
            if (preview) {
              setPreview(null);
            } else {
              deleteImage();
            }
          }}
        >
          <img alt="close" src={close} className="w-[12px] h-[12px] mt-1" />
          <p className="text-[#C19008] mr-2 font-bold">حذف تصویر</p>
        </button>
      )}
    </div>
  );
}
