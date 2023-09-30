import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../../api";
import { IImage } from "../../api/type/images";
import { IOtherUser } from "../../api/type/otherUser";

import OtherProfile from "../../component/otherUsers/otherProfile";
import UserImageList from "../../component/otherUsers/otherUserImageList";
import BlockPage from "../blockPage";

export default function OtherUsers() {
  const { id } = useParams();
  const [user, setUser] = useState<IOtherUser>();
  const [imageList, setImageList] = useState<{ result: IImage[] }>();

  useEffect(() => {
    get(`/user/${id}/profile`)
      .then((d: any) => setUser(d))
      .catch((e) => console.log(e));
  }, [id]);

  useEffect(() => {
    get(`/post/user/${id}`)
      .then((d: any) => setImageList(d))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className="flex justify-between mt-32">
      {user?.reverseStatus === "Block" ? (
        <BlockPage />
      ) : (
        <UserImageList
          list={imageList?.result as IImage[]}
          user={user as IOtherUser}
        />
      )}
      <OtherProfile user={user} id={id} />
    </div>
  );
}
