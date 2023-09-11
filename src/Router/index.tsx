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
import SetPassword from "../page/reset-password";
import SignUp from "../page/signUp";
import MyCollegeGram from "../page/myCollegeGram";
import Collegians from "../page/collegians";
import PanelLayout from "../layout/panel";
import InnerPost from "../page/myCollegeGram/[id]";
import MySavePage from "../page/mySave";
import NotificationPage from "../page/myNotification";
import OtherNotification from "../page/otherNotification";
import Message from "../page/messages";
import OtherUsers from "../page/otherUserPage/[id]";

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

  if (status === "unauthorized") {
    return (
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route index element={<Navigate to="/login" />} />
          <Route path="" element={<AuthenticationLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/recoveryPassword" element={<RecoveryPassword />} />
            <Route path="/reset-password" element={<SetPassword />} />
            <Route path="/*" element={<LoginPage />} />
          </Route>
        </Routes>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="" element={<PanelLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/myCollegeGram" element={<MyCollegeGram />} />
          <Route path="/collegians" element={<Collegians />} />
          <Route path="/myCollegeGram/:id" element={<InnerPost />} />
          <Route path="/saves" element={<MySavePage />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/otherNotification" element={<OtherNotification />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/usersProfile/:id" element={<OtherUsers />} />
        </Route>

        <Route path="404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Suspense>
  );
}
