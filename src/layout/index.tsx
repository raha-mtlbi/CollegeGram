import logo from "../assets/images/logo.svg";
import loginTree from "../assets/images/loginTree.svg";
import { Outlet } from "react-router-dom";

export default function AuthenticationLayout() {
  return (
    <div className="bg-gray-50 h-screen">
      <div className="flex flex-col w-screen mx-auto justify-center items-center pt-10">
        <img src={logo} alt="logo" className="w-20" />
        <Outlet />

        <div className="flex justify-center items-center w-screen p-7 relative bottom-0 bg-[#F1EBE3] mt-10">
          <img src={loginTree} alt="login" width={200} height={285} />
        </div>
      </div>
    </div>
  );
}
