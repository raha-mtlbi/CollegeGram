import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { get } from "../../api";
import { IImage } from "../../api/type/images";
import { useUser } from "../../features/hooks";

export default function ImageList() {
  const navigate = useNavigate();
  const [photoList, setPhotoList] = useState<{ result: IImage[] }>();
  const user = useUser();

  useEffect(() => {
    get(`/post/user/${user?.id}`)
      .then((d: any) => setPhotoList(d))
      .catch((e) => console.log(e));
  }, [user?.id]);

  console.log("photo", photoList?.result?.[0]?.photos.toLocaleString());

  return (
    <div className="w-full grid grid-cols-4 gap-4 mr-12 ml-5">
      {photoList?.result.map((photo) => (
        <div key={photo.id} className="w-[230px] h-[230px] cursor-pointer">
          <img
            className=" max-w-full"
            src={photo.photos.toLocaleString()}
            alt="postImage"
            onClick={() => navigate(`/myCollegeGram/${photo.id}`)}
          />
        </div>
      ))}
    </div>
  );
}
