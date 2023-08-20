import logo from "../assets/images/logo.svg";
import loginTree from "../assets/images/loginTree.svg";
import { Outlet } from "react-router-dom";

export default function AuthenticationLayout() {
  return (
    <div>
      <div className="flex flex-col w-screen mx-auto justify-center items-center text-center mt-10">
        <img src={logo} alt="logo" className="w-20" />

        <div className="flex justify-center items-center w-screen p-7 absolute bottom-0 bg-yellow-100">
          <img src={loginTree} alt="login" width={200} height={285} />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
