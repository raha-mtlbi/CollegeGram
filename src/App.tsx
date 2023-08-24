import { BrowserRouter } from "react-router-dom";

// import Router from "./Router";
import "./App.css";
import EditProfile from "./page/editProfileModal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Router /> */}
        <EditProfile />
      </BrowserRouter>
    </div>
  );
}

export default App;
