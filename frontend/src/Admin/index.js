import React from "react";
import "./style.css";
import { useState } from "react";
import AddUser from "./AddUser";
import { FileLock2Fill } from "react-bootstrap-icons";
import { PersonPlusFill } from "react-bootstrap-icons";

const Admin = () => {
  const [toggleState, setToggleState] = useState(1);
  const [toggleNavbarState, setToggleNavbarState] = useState(true);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const toggleNavbar = (e) => {
    console.log("toggleNavbar: " + e);
    toggleNavbarState === true
      ? setToggleNavbarState(false)
      : setToggleNavbarState(true);
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
            <a href="index.html" className="logo">
              CLS
            </a>
          </h1>
          <ul className="list-unstyled components mb-5">
            <li>
              <a
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                {" "}
                <PersonPlusFill></PersonPlusFill>
                <span className="fa fa-home mr-3"></span> Users Management
              </a>
            </li>
            <li>
              <a
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                <span className="mr-3"></span> Jobs Management
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-sticky-note mr-3"></span> Friends
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-sticky-note mr-3"></span> Subcription
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-paper-plane mr-3"></span> Settings
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-paper-plane mr-3"></span> Information
              </a>
            </li>
          </ul>
        </nav>

        <div className="content-tabs">
          <button onClick={() => toggleNavbar()}>Toggle Navbar</button>
          <div
            id="content"
            className={
              toggleState === 1
                ? "content p-4 p-md-5 pt-5  active-content"
                : "content"
            }
          >
            <AddUser></AddUser>
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
