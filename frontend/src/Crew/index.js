import React from "react";
import { useLocalState } from "../util/useLocalStorage";

const Dashboard = () => {
  const [jwt, setJwt] = useLocalState("", "jwt");
  return (
    <div>
      <h1>Hello Word</h1>
      <div className="container">
        <div className="row"></div>
        <p>JWT Value is: {jwt}</p>
        <h1>This is going to be awesome dashboard! </h1>
      </div>
    </div>
  );
};

export default Dashboard;
