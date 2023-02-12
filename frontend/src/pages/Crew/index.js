import React from "react";
import { useState } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Widget from "../Widget";

const Crew = () => {
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
    <>
      <div className="nav_bg_color" id="wrapper">
        <Nav />
        <div id="page-wrapper" className="gray-bg">
          <div className="row border-bottom">
            <Header />
          </div>
          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
              <div className="col-lg-3">
                <div className="widget style1 navy-bg">
                  <Widget
                    name="Upcoming jobs (needed logic for it)"
                    count="0"
                    icon_name="fa fa-briefcase fa-5x"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crew;
