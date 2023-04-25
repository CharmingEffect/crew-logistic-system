import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLoggedInUser } from "../util/useUserData";

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
    if (loggedUser.role === "CREW_MEMBER") {
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
                  className="rounded-circle width-10"
                  src={`data:image/png;base64,${loggedUser.avatar}`}
                  alt=""
                />
                <a href="/profile">
                  <span className="block m-t-xs font-bold profile-title">
                    {loggedUser.firstName} {loggedUser.lastName}
                  </span>
                </a>
              </div>
              <div className="logo-element">CLS</div>
            </li>

            {admin ? (
              <li className={path === "/dashboard-admin" ? "active" : ""}>
                <a href="/dashboard-admin">
                  <i className="fa fa-th-large"></i>{" "}
                  <span className="nav-label">Dashboard</span>
                </a>
              </li>
            ) : (
              <></>
            )}



            {crew ? (
              <li className={path === "/dashboard-crew" ? "active" : ""}>
                <a href="/dashboard-crew">
                  <i className="fa fa-th-large"></i>{" "}
                  <span className="nav-label">Dashboard</span>
                </a>
              </li>
            ) : (
              <></>
            )}

            {crew ? (
              <li className={path === "/jobs" ? "active" : ""}>
                <a href="/jobs">
                  <i className="fa fa-tasks"></i>{" "}
                  <span className="nav-label">Jobs</span>
                </a>
              </li>
            ) : (
              <></>
            )}

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

            {admin ? (
              <li className={path === "/calendar-admin" ? "active" : ""}>
                <a href="/calendar-admin">
                  <i className="fa fa-calendar"></i>{" "}
                  <span className="nav-label">Calendar</span>
                </a>
              </li>
            ) : (
              <></>
            )}

            {crew ? (
              <li className={path === "/calendar-crew" ? "active" : ""}>
                <a href="/calendar-crew">
                  <i className="fa fa-calendar"></i>{" "}
                  <span className="nav-label">Calendar</span>
                </a>
              </li>
            ) : (
              <></>
            )}
            <li className={path === "/messages" ? "active" : ""}>
              <a href="/messages">
                <i className="fa fa-comments fa-lg"></i>{" "}
                <span className="nav-label">Messages</span>
              </a>
            </li>
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
