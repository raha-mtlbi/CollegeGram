import React, { useState } from "react";
import { imageUrl } from "../api/config";
import { useUser } from "../features/hooks";
import { EditProfile } from "../api/user";
import { getCurrentUser } from "../features/userSlice";
import { useAppDispatch } from "../store";

import camera from "../assets/icons/camera.svg";
import close from "../assets/icons/close.svg";
import refresh from "../assets/icons/refresh.svg";

export default function Avatar() {
  const [fileUrl, setFileUrl] = useState();
  const user = useUser();
  const dispatch = useAppDispatch();

  const processImage = (event: any) => {
    const imageFile = event?.target?.files && event.target.files[0];
    const imageUrl = imageFile && URL.createObjectURL(imageFile);
    setFileUrl(imageUrl ? imageUrl : fileUrl);
    const formData = new FormData();
    imageFile && formData.append("photo", imageFile, imageFile.name);
    EditProfile(formData).then(() => {
      dispatch(getCurrentUser());
    });
  };

  const handleDelete = () => {
    EditProfile({ photo: undefined }).then(() => {
      dispatch(getCurrentUser());
    });
  };

  return (
    <div>
      <label htmlFor={"x"} className="flex justify-center p-2">
        <input
          type="file"
          id={"x"}
          className="hidden"
          // value={formik.values.photo}
          onChange={processImage}
        />
        <div className="w-[90px] h-[90px] rounded-[50%] border-2 border-[#C19008] flex justify-center items-center ">
          <img
            alt="camera"
            src={
              fileUrl !== undefined
                ? fileUrl
                : user
                ? imageUrl + user?.photo
                : camera
            }
            className={
              user
                ? "w-[90px] h-[90px] rounded-[50%] object-fill"
                : "w-[36px] h-[36px] cursor-pointer"
            }
          />
          {(fileUrl || user?.photo) && (
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
          className="flex justify-center mx-auto mb-7 mt-2  items-center"
          onClick={() => handleDelete()}
        >
          <img alt="close" src={close} className="w-[12px] h-[12px] mt-1" />
          <p className="text-[#C19008] mr-2 font-bold">حذف تصویر</p>
        </button>
      )}
    </div>
  );
}
