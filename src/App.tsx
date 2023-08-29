import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "../src/store";

import Router from "./Router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <ToastContainer
            limit={1}
            theme="colored"
            position="bottom-left"
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
    </div>
  );
}

export default App;
