import React from "react";
import { Navigate } from "react-router-dom";
import { useLocalState } from "../util/useLocalStorage";

const PrivateRoute = ({ children }) => {
  const [jwt, setJwt] = useLocalState("", "jwt");

  return jwt ? children : <Navigate to="/" />;
};

// tutaj jesli juz jest jwt to przedz na dashboard jesli nie to na login

export default PrivateRoute;
