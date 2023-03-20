import React, { useEffect } from "react";
//import "./App.css";
import { useLocalState } from "./util/useLocalStorage";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import DashboardAdmin from "./pages/Admin";
import DashboardCrew from "./pages/Crew";
import UsersMngmt from "./pages/Admin/UsersMngmt";
import { useLocation } from "react-router-dom";


import "./styles/Style.css";
import JobsMngmt from "./pages/Admin/JobsMngmt";
import Profile from "./pages/common/Profile";
import Nav from "./components/Nav";
import { useValidPahts } from "./util/useConfig";
import Jobs from "./pages/Crew/Jobs";

function App() {
  const [jwt, setJwt] = useLocalState("", "jwt");
  const location = useLocation();
  // useEffect(() => {
  //   console.log("JWT Value is: " + jwt);
  // }, [jwt]);

  // const validPaths = useValidPahts();

  function showNav() {
    if (location.pathname === "/") {
      return <></>;
    } else {
      return <Nav></Nav>;
    }
  }

  // function authorize() {
  //   if (validPaths.includes(location.pathname)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  return (
    <>
      <div className="nav_bg_color" id="wrapper">
        {showNav()}
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard-admin" element={<DashboardAdmin />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>

          <Route path="/dashboard-crew" element={<DashboardCrew />}></Route>
          <Route path="/user-mngmt" element={<UsersMngmt />}></Route>
          <Route path="/job-mngmt" element={<JobsMngmt />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
