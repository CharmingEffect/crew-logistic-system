import React, { useEffect } from "react";
//import "./App.css";
import { useLocalState } from "./util/useLocalStorage";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./pages/Admin";
import UsersMngmt from "./pages/Admin/UsersMngmt";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";

import "./styles/Style.css";
import JobsMngmt from "./pages/Admin/JobsMngmt";
import Profile from "./pages/common/Profile";
import Nav from "./components/Nav";

function App() {
  const [jwt, setJwt] = useLocalState("", "jwt");
  const location = useLocation();
  // useEffect(() => {
  //   console.log("JWT Value is: " + jwt);
  // }, [jwt]);
  function showNav() {
    if (location.pathname === "/") {
      return <></>;
    } else {
      return <Nav></Nav>;
    }
  }

  return (
    <>
      <div className="nav_bg_color" id="wrapper">
        {showNav()}
        <Routes>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/user-mngmt" element={<UsersMngmt />}></Route>
          <Route path="/job-mngmt" element={<JobsMngmt />}></Route>
          <Route path="/settings" element={<Dashboard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
