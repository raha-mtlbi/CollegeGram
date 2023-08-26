import { useNavigate } from "react-router-dom";

import Button from "../component/button";
import Input from "../component/input";

import gmail from "../assets/icons/gmail.svg";

export default function RecoveryPassword() {
  const navigate = useNavigate();

  return (
    <div className="flex column mt-6 justify-center text-center">
      <form>
        <p className={"mx-2 text-gray-700"}>بازیابی رمز عبور </p>

        <div className="mt-12 mb-8">
          <Input
            placeholder="ایمیل"
            imageSrc={gmail}
            imageAlt="gmail"
            className=""
          />
        </div>

        <div className="flex items-center justify-end my-3">
          <button className="ml-10" onClick={() => navigate("/login")}>
            انصراف
          </button>
          <Button
            title={"ارسال لینک بازیابی رمز عبور"}
            width="200px"
            onClick={() => navigate("/setPassword")}
          />
        </div>
      </form>
    </div>
  );
}
