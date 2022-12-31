import React, { useEffect } from "react";
import "./App.css";
import { useLocalState } from "./util/useLocalStorage";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Admin from "./Admin";
import Crew from "./Crew";
import UsersMngmt from "./Admin/UsersMngmt";

function App() {
  const [jwt, setJwt] = useLocalState("", "jwt");

  // useEffect(() => {
  //   console.log("JWT Value is: " + jwt);
  // }, [jwt]);

  return (
    <Routes>
      <Route
        path="/crew"
        element={
          <PrivateRoute>
            <Crew />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/userMngmt" element={<UsersMngmt />}></Route>
    </Routes>
  );
}

export default App;
