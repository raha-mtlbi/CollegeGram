import { useNavigate } from "react-router-dom";
import Button from "../component/button";

import tree from "../assets/images/tree.svg";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center justify-center flex-col flex ">
      <p className="text-[40px] not-italic font-bold text-center text-[#17494D] mt-20">
        وای اینجا چخبره؟!
      </p>
      <p className="text-[#17494D] font-bold text-[25px] text-center not-italic mt-[20px] ">
        ظاهرا یک مشکلی وجود داره!
      </p>
      <p className="text-[#17494D] text-[16px] not-italic font-normal mt-[25px] leading-8">
        .ما داریم تلاش میکنیم که برطرفش کنیم<br></br>.لطفا چنددقیقه دیگه دوباره
        تلاش کن
      </p>
      <div className="mt-[20px]">
        <Button
          title="بازگشت به صفحه قبلی"
          onClick={() => navigate("/home")}
          width={200}
        />
      </div>

      <div className="flex items-center justify-center">
        <img src={tree} alt="tree" className="w-[250px] h-[240px]  mt-[80px]" />
      </div>
    </div>
  );
};

export default ErrorPage;
