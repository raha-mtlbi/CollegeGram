import { useUser } from "../../features/hooks";
import { imageUrl } from "../../api/config";

import person from "../../assets/icons/person.svg";

const ResponsiveCollege = () => {
  const user = useUser();
  return (
    <div>
      <div className="rounded-full w-14 h-14 bg-[#F3F0EE] border border-[#CDCDCD] mr-7">
        {user?.photo ? (
          <img alt="profile" src={imageUrl + user?.photo} />
        ) : (
          <img src={person} className="w-10 mx-auto mt-3" />
        )}
      </div>
    </div>
  );
};

export default ResponsiveCollege;
