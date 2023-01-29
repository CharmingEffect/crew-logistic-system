import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
// import { Link } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const path = location.pathname;
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

            <li className={path === "/user-mngmt" ? "active" : ""}>
              <a href="/user-mngmt">
                <i className="fa fa-users fa-lg"></i>{" "}
                <span className="nav-label">User Management</span>
              </a>
            </li>
            <li className={path === "/job-mngmt" ? "active" : ""}>
              <a href="/job-mngmt">
                <i className="fa fa-wrench fa-lg"></i>{" "}
                <span className="nav-label">Job Management</span>
              </a>
            </li>

            <li className={path === "/profile" ? "active" : ""}>
              <a href="/profile">
                <i className="fa fa-user fa-lg"></i>{" "}
                <span className="nav-label">Profile</span>
              </a>
            </li>
            <li className="fixed-bottom">
              <a href="/profile">
                <i className="fa fa-user fa-lg"></i>{" "}
                <span className="nav-label">Logged as: </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
