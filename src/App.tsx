import { BrowserRouter } from "react-router-dom";

import Router from "./Router";
import ErrorPage from "./page/errorPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
        <ErrorPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
