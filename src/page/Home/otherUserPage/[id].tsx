import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IUser } from "../../../api/type/user";
import { get } from "../../../api";

import OtherProfile from "../../../component/otherUsers/otherProfile";
import UserImageList from "../../../component/otherUsers/otherUserImageList";

export default function OtherUsers() {
  const { id } = useParams();
  const [user, setUser] = useState<{ result: IUser }>();

  useEffect(() => {
    get(`/user/${id}`)
      .then((d: any) => setUser(d))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className="flex  mt-32">
      {user?.result?.private ? <img /> : <UserImageList photoList={[]} />}
      <OtherProfile user={user as unknown as IUser} />
    </div>
  );
}
