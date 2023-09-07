import { useRef, useState } from "react";

import plus from "../assets/icons/plus.svg";
import close from "../assets/icons/close.svg";
import { FieldArray } from "formik";
import { imageUrl } from "../api/config";

export default function UploadButton({
  values,
  onChange,
}: {
  values: any;
  onChange?: () => void;
}) {
  const fileUploader = useRef<HTMLInputElement | null>(null);

  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (images.length < 5) {
      const newImages: File[] = Array.from(images);
      setImages((prevImage) => [...prevImage, ...newImages]);
    }
  };

  const handleImageDelete = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    // <div>
    //   <div className="text-right">
    //     <label
    //       htmlFor="fileInput"
    //       className="flex flex-row gap-8 cursor-pointer text-base	font-bold text-[#C19008] px-4 py-2 leading-4 "
    //     >
    //       <img src={plus} alt="icon" />
    //       بارگذاری عکس‌ها
    //     </label>
    //     <input
    //       id="fileInput"
    //       type="file"
    //       className="sr-only"
    //       multiple
    //       onChange={handleImageChange}
    //     />
    //     <div className="grid grid-cols-4 gap-4 mt-6">
    //       {images.map((image, index) => (
    //         <div key={index} className="aspect-square object-cover w-full">
    //           <button
    //             className="translate-y-2/3 bg-white rounded-full p-2"
    //             onClick={() => handleImageDelete(index)}
    //           >
    //             <img src={close} alt="Delete" />
    //           </button>
    //           <img
    //             className="aspect-square object-cover inline rounded-2xl"
    //             src={URL.createObjectURL(image)}
    //             alt={`Uploaded ${index + 1}`}
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <FieldArray
      name="photos"
      render={(arrayHelpers) => (
        <div>
          <div className="flex flex-wrap" style={{ gap: 8, marginBottom: 8 }}>
            {values?.photos?.map((photo: any, index: any) => (
              <div key={index}>
                <button
                  type="button"
                  onClick={() => arrayHelpers.remove(index)}
                >
                  <img
                    src={imageUrl + URL.createObjectURL(photo)}
                    alt=""
                    style={{
                      width: 200,
                      height: 100,
                      objectFit: "contain",
                      aspectRatio: "4/4",
                    }}
                  />
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
                  arrayHelpers?.insert(values?.photos?.length, e.target.files[0]);
                }
              }}
              multiple
            />
            <label htmlFor="custom-file-input">
              <button
                type="button"
                color="primary"
                onClick={() => fileUploader.current?.click()}
              >
                Upload
              </button>
            </label>
          </div>
        </div>
      )}
    />
  );
}
