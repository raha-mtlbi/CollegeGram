import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { get } from "../../api";
import { IImage } from "../../api/type/images";

export default function ImageList() {
  const navigate = useNavigate();
  const [photoList, setPhotoList] = useState<IImage[]>([]);

  useEffect(() => {
    get("/")
      .then((d: any) => setPhotoList(d))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="w-full grid grid-cols-4 gap-4 mr-12 ml-5">
      {photoList.map((i) => (
        <div key={i.id} className="w-[230px] h-[230px] cursor-pointer">
          <img
            className=" max-w-full "
            src={i?.src}
            alt=""
            onClick={() => navigate(`/myCollegeGram/${i?.id}`)}
          />
        </div>
      ))}
    </div>
  );
}
