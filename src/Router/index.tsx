import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import AuthenticationLayout from "../layout";
import LoadingPage from "../page/loading";
import LoginPage from "../page/login";
import ErrorPage from "../page/errorPage";

export default function Router() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route index element={<Navigate to="/" />} />
        <Route path="404" element={<ErrorPage />} />
        {/* <Route path="404" element={<NotFound />} />
        <Route path="forgetPassword" element={<ForgetPassword />} />
        <Route path="sendEmail" element={<SendEmail />} />
        <Route path="resendLink" element={<ResendLink />} /> */}

        <Route path="/login" element={<AuthenticationLayout />}>
          <Route path="" element={<LoginPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
