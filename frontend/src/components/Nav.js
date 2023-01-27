import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
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
              <li className="active">
                <a href="/dashboard">
                  <i className="fa fa-th-large"></i>{" "}
                  <span className="nav-label">Dashboard Admin</span>
                </a>
              </li>

              <li className="">
                <a href="/user-mngmnt">
                  <i className="fa fa-th-large"></i>{" "}
                  <span className="nav-label">User Management</span>
                </a>
              </li>
              <li className="">
                <a href="/job-mngmnt">
                  <i className="fa fa-th-large"></i>{" "}
                  <span className="nav-label">Job Management</span>
                </a>
              </li>

              <li className="">
                <a href="/job-mngmnt">
                  <i className="fa fa-th-large"></i>{" "}
                  <span className="nav-label">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
