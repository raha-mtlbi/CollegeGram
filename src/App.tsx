import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "../src/store";

import Router from "./router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <BrowserRouter>
          <Provider store={store}>
            <ToastContainer
              limit={1}
              theme="colored"
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Router />
          </Provider>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
