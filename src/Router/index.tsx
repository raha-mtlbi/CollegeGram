import React, { useEffect } from "react";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useUserStatus } from "../features/hooks";
import { getCurrentUser } from "../features/userSlice";
import { useAppDispatch } from "../store";

import AuthenticationLayout from "../layout/auth";
import LoadingPage from "../page/loading";
import LoginPage from "../page/login";
import ErrorPage from "../page/errorPage";
import RecoveryPassword from "../page/recoveryPassword";
import SetPassword from "../page/setPassword";
import SignUp from "../page/signUp";
import MyCollegeGram from "../page/myCollegeGram";
import Collegians from "../page/collegians";
import PanelLayout from "../layout/panel";
import InnerPost from "../page/myCollegeGram/[id]";

const Home = React.lazy(() => import("../page/Home"));

export default function Router() {
  const dispatch = useAppDispatch();
  const status = useUserStatus();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  // if (status === "loading" || status === "idle") {
  //   return <LoadingPage />;
  // }

  // if (status === "unauthorized") {
  //   return (
  //     <Suspense fallback={<LoadingPage />}>
  //       <Routes>
  //         <Route index element={<Navigate to="/login" />} />
  //         <Route path="" element={<AuthenticationLayout />}>
  //           <Route path="/login" element={<LoginPage />} />
  //           <Route path="/signup" element={<SignUp />} />
  //           <Route path="/recoveryPassword" element={<RecoveryPassword />} />
  //           <Route path="/setPassword" element={<SetPassword />} />
  //           {/* <Route path="/*" element={<LoginPage />} /> */}
  //         </Route>
  //       </Routes>
  //     </Suspense>
  //   );
  // }

  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="" element={<PanelLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/myCollegeGram" element={<MyCollegeGram />} />
          <Route path="/collegians" element={<Collegians />} />
          <Route path="/myCollegeGram/:id" element={<InnerPost />} />
        </Route>

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}
