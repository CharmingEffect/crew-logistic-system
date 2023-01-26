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
import "./style.css";

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
      <div className="wrapper d-flex align-items-stretch">
        <nav
          id="sidebar"
          className={toggleNavbarState === true ? "navbar-on" : "navbar-off"}
        >
          <div className="custom-menu"></div>
          <h1>
            <a className="logo">CLS</a>
          </h1>
          <ul className="list-unstyled components mb-5">
            <li>
              <a
                className={
                  toggleState === 1 ? "nav-items active-nav-items" : "nav-items"
                }
                onClick={() => toggleTab(1)}
              >
                {" "}
                <PersonFill size={25}></PersonFill>
                <span className="mr-3"></span> Users Management
              </a>
            </li>
            <li>
              <a
                className={
                  toggleState === 2 ? "nav-items active-nav-items" : "nav-items"
                }
                onClick={() => toggleTab(2)}
              >
                {" "}
                <Tools size={25}></Tools>
                <span className="mr-3"></span> Jobs Management
              </a>
            </li>

            <li>
              <a href="#">
                <span className="mr-3"></span> Settings
              </a>
            </li>
            <li>
              <a className="nav-items" onClick={() => logoutUser()}>
                <DoorClosedFill size={25}></DoorClosedFill>
                <span className="mr-3"></span> Logout
              </a>
            </li>
          </ul>
        </nav>

        <div className="content-tabs">
          <ListUl
            role={"button"}
            onClick={() => toggleNavbar()}
            size={35}
            className="m-2 navbar-toggler-fixed"
          />

          <div
            id="content"
            className={
              toggleState === 1
                ? "content p-4 p-md-5 pt-5  active-content"
                : "content"
            }
          >
            <UsersMngmt></UsersMngmt>
            {/* tutaj add user */}
          </div>

          {/* TEMPLATE DO TOWRZENIA NAWIGACJI */}
          <div
            id="content"
            className={
              toggleState === 2
                ? "content p-4 p-md-5 pt-5  active-content"
                : "content"
            }
          >
            <h2 className="mb-4">Option 2</h2>
            <p>To nie jest to samo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
