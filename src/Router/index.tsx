import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

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
import InnerPost from "../page/innerPost";

const Home = React.lazy(() => import("../page/Home"));

export default function Router() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="" element={<PanelLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/myCollegeGram" element={<MyCollegeGram />} />
          <Route path="/collegians" element={<Collegians />} />
          <Route path="/innerPost" element={<InnerPost />} />
        </Route>

        <Route path="" element={<AuthenticationLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/recoveryPassword" element={<RecoveryPassword />} />
          <Route path="/setPassword" element={<SetPassword />} />
        </Route>

        <Route path="404" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}
