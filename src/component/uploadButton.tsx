import React, { useState } from "react";

import plus from "../assets/icons/plus.svg";
import close from "../assets/icons/close.svg";

export default function UploadButton({
  imagesUpload,
}: {
  imagesUpload: (images: File[]) => void;
}) {
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImages = e.target.files;

    if (selectedImages && images.length < 5) {
      const newImages = Array.from(selectedImages);
      setImages((prevImage) => [...prevImage, ...newImages]);
      imagesUpload([...images, ...newImages]);
    }
  };

  const handleImageDelete = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    imagesUpload(newImages);
  };

  return (
    <div className="text-right w-[320px]">
      <label
        htmlFor="fileInput"
        className="flex flex-row gap-8 cursor-pointer text-base	font-bold text-[#C19008] px-4 py-2 leading-4 "
      >
        <img src={plus} alt="icon" />
        بارگذاری عکس‌ها
      </label>
      <input
        id="fileInput"
        type="file"
        className="sr-only"
        multiple
        onChange={handleImageChange}
      />
      <div className="grid grid-cols-4 gap-4 mt-6">
        {images.map((image, index) => (
          <div key={index} className="aspect-square object-cover w-full">
            <button
              className="translate-y-2/3 bg-white rounded-full p-2"
              onClick={() => handleImageDelete(index)}
            >
              <img src={close} alt="Delete" />
            </button>
            <img
              className="aspect-square object-cover inline rounded-2xl"
              src={URL.createObjectURL(image)}
              alt={`Uploaded ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
