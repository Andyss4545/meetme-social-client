import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Register from "./Pages/register/Register";
import Login from "./Pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path={"/"} element={[<Navbar />, <Home />]} />
          <Route
            path={"/profile/:userId"}
            element={[<Navbar />, <Profile />]}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
