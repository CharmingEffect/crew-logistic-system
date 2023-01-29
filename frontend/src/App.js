import React, { useEffect } from "react";
//import "./App.css";
import { useLocalState } from "./util/useLocalStorage";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./pages/Admin";
import UsersMngmt from "./pages/Admin/UsersMngmt";

import "./styles/Style.css";
import JobsMngmt from "./pages/Admin/JobsMngmt";

function App() {
  const [jwt, setJwt] = useLocalState("", "jwt");

  // useEffect(() => {
  //   console.log("JWT Value is: " + jwt);
  // }, [jwt]);

  return (
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
    </Routes>
  );
}

export default App;
