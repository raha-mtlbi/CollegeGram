import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "../src/store";

import Router from "./Router";
import "./App.css";
import React from "react";
// import Responsive from "./layout/auth/responsive";

function App() {
  return (
    <div className="App">
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
        {/* <Responsive /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
