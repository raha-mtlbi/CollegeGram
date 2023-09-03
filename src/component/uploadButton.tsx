import { useRef, useState } from "react"
import { FieldArray } from "formik"

import plus from "../assets/icons/plus.svg"
import close from "../assets/icons/close.svg"

export default function UploadButton({
  imagesUpload,
}: {
  imagesUpload: (images: File[]) => void
}) {
  // const fileUploader = useRef<HTMLInputElement | null>(null)

  const [images, setImages] = useState<File[]>([])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImages = e.target.files

    if (selectedImages && images.length < 5) {
      const newImages = Array.from(selectedImages)
      setImages((prevImage) => [...prevImage, ...newImages])
      imagesUpload([...images, ...newImages])
    }
  }

  const handleImageDelete = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
    imagesUpload(newImages)
  }

  return (
    <div>
      <div className="text-right">
        <label
          htmlFor="fileInput"
          className="flex flex-row gap-8 cursor-pointer text-base	font-bold text-[#C19008] px-4 py-2 leading-4 ">
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
                onClick={() => handleImageDelete(index)}>
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
      {/* <FieldArray
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
                  arrayHelpers.insert(values.photos?.length, e.target.files[0])
                }
              }}
              accept="/image*"
              multiple
            />
            <label htmlFor={"custom-file-input"} className=" p-2">
              <button
                className=" flex items-center cursor-pointer"
                onClick={() => fileUploader.current?.click()}
                type="button">
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
      /> */}
    </div>
  )
}
