import React, { Component, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { useLoggedInUser } from "../util/useUserData";
import { useLocalState } from "../util/useLocalStorage";

const Nav = () => {
  const location = useLocation();
  const path = location.pathname;
  const [admin, setAdmin] = useState(false);
  const [crew, setCrew] = useState(false);
  const loggedUser = useLoggedInUser();

  // sprawdza czy jest adminem i ustawia state na true

  useEffect(() => {
    if (loggedUser.role === "ADMIN") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [loggedUser]);
  // sprawdza czy jest crew i ustawia state na true

  useEffect(() => {
    if (loggedUser.role === "CREW") {
      setCrew(true);
    } else {
      setCrew(false);
    }
  }, [loggedUser]);

  return (
    <>
      <nav className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav metismenu" id="side-menu">
            <li className="nav-header">
              <div className="dropdown profile-element left-profile">
                <img
                  className="rounded-circle"
                  src="asset/img/profile_small.jpg"
                  alt=""
                />
                <a href="/dashboard">
                  <span className="block m-t-xs font-bold profile-title">
                    Dashboard
                  </span>
                </a>
              </div>
              <div className="logo-element">CLS</div>
            </li>
            <li className={path === "/dashboard" ? "active" : ""}>
              <a href="/dashboard">
                <i className="fa fa-th-large fa-lg"></i>{" "}
                <span className="nav-label">Dashboard Admin</span>
              </a>
            </li>

            {admin ? (
              <li className={path === "/user-mngmt" ? "active" : ""}>
                <a href="/user-mngmt">
                  <i className="fa fa-users fa-lg"></i>{" "}
                  <span className="nav-label">User Management</span>
                </a>
              </li>
            ) : (
              <></>
            )}
            {admin ? (
              <li className={path === "/job-mngmt" ? "active" : ""}>
                <a href="/job-mngmt">
                  <i className="fa fa-wrench fa-lg"></i>{" "}
                  <span className="nav-label">Job Management</span>
                </a>
              </li>
            ) : (
              <></>
            )}

            <li className={path === "/profile" ? "active" : ""}>
              <a href="/profile">
                <i className="fa fa-user fa-lg"></i>{" "}
                <span className="nav-label">Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
