import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import AddUser from "./AddUser";
import { FileLock2Fill } from "react-bootstrap-icons";
import {
  Tools,
  DoorClosedFill,
  ListUl,
  PersonFill,
} from "react-bootstrap-icons";
import UsersMngmt from "./UsersMngmt";
import Sidebar from "../common/Sidebar";

const Admin = () => {
  const [toggleState, setToggleState] = useState(1);
  const [toggleNavbarState, setToggleNavbarState] = useState(true);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const toggleNavbar = (e) => {
    toggleNavbarState === true
      ? setToggleNavbarState(false)
      : setToggleNavbarState(true);
  };

  const logoutUser = () => {
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div>
      <Sidebar></Sidebar>
    </div>
  );
};

export default Admin;
