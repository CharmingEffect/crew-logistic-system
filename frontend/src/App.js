import React, { useEffect } from "react";
import "./App.css";
import { useLocalState } from "./util/useLocalStorage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Admin from "./Admin";


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
      <Route path="/admin" element={<Admin />}></Route>
    </Routes>
  );
}

export default App;
