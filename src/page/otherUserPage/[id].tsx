import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IUser } from "../../api/type/user";
import { get } from "../../api";

import OtherProfile from "../../component/otherUsers/otherProfile";
import UserImageList from "../../component/otherUsers/otherUserImageList";
import BlockPage from "../blockPage";

export default function OtherUsers() {
  const { id } = useParams();
  const [user, setUser] = useState<{ result: IUser }>();

  useEffect(() => {
    get(`/user/${id}/profile`)
      .then((d: any) => setUser(d))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className="flex justify-between mt-32">
      {user?.result?.block ? (
        <BlockPage />
      ) : (
        <UserImageList photoList={[]} user={user?.result as IUser} />
      )}
      <OtherProfile user={user?.result as IUser} />
    </div>
  );
}
