import React from "react";
import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import AuthenticationLayout from "../layout";
import LoadingPage from "../page/loading";
import LoginPage from "../page/login";
import NotFound from "../page/errorPage";
import ErrorPage from "../page/errorPage";
import RecoveryPassword from "../page/recoveryPassword";
import SetPassword from "../page/setPassword";
import SignUp from "../page/signup";
import MyCollegeGram from "../page/myCollegeGram";
import Collegians from "../page/collegians";

const Home = React.lazy(() => import("../page/Home"));

export default function Router() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route index element={<Navigate to="/" />} />

        <Route path="404" element={<NotFound />} />
        {/* <Route path="forgetPassword" element={<ForgetPassword />} />
        <Route path="sendEmail" element={<SendEmail />} />
        <Route path="resendLink" element={<ResendLink />} /> */}

        <Route path="/login" element={<AuthenticationLayout />} />
        <Route path="" element={<LoginPage />} />
        <Route path="404" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/myCollegeGram" element={<MyCollegeGram />} />
        <Route path="/collegians" element={<Collegians />} />

        <Route path="" element={<AuthenticationLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/recoveryPassword" element={<RecoveryPassword />} />
          <Route path="/setPassword" element={<SetPassword />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
