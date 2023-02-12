import React from "react";
import { useState } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Widget from "../Widget";
import { GetAllCrewMembers } from "../../util/useUserData";
import { SystemInfo } from "../../util/useUserData";
import { MemoryStats } from "../../util/useUserData";

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
  const systemInfo = SystemInfo();

  const memoryStats = MemoryStats();

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
                    name="Total Jobs"
                    count={systemInfo.numberOfJobs}
                    icon_name="fa fa-briefcase fa-5x"
                  />
                </div>
              </div>
              {/* <div className="col-lg-3">
                <div className="widget style1 lazur-bg">
                  <Widget
                    name="Advocates"
                    count="27"
                    icon_name="fa fa-user-circle-o fa-5x"
                  />
                </div>
              </div>
              */}
              <div className="col-lg-3">
                <div className="widget style1 yellow-bg">
                  <Widget
                    name="Stats of JVM:"
                    a={memoryStats.heapSize}
                    b={memoryStats.heapMaxSize}
                    c={memoryStats.heapFreeSize}
                    icon_name="fa fa-leanpub fa-5x"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget style1 red-bg">
                  <Widget
                    name="Crew members"
                    count={systemInfo.numberOfCrewMembers}
                    icon_name="fa fa-users fa-5x"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget style1 blue-bg">
                  <Widget
                    name="Total number of users"
                    count={systemInfo.numberOfUsers}
                    icon_name="fa fa-users fa-5x"
                  />
                </div>
              </div>

              <div className="col-lg-3">
                <div className="widget style1 purple-bg">
                  <Widget
                    name="Admins"
                    count={systemInfo.numberOfAdmins}
                    icon_name="fa fa-address-card-o fa-5x"
                  />
                </div>
              </div>

              {/*
              <div className="col-lg-3">
                <div className="widget style1 purple-bg">
                  <Widget
                    name="My Case Diary"
                    count="27"
                    icon_name="fa fa-book fa-5x"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget style1 green-bg">
                  <Widget
                    name="Team 1"
                    count="27"
                    icon_name="fa fa-heart fa-5x"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget style1 ash-bg">
                  <Widget
                    name="Team 2"
                    count="27"
                    icon_name="fa fa-envelope-o fa-5x"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
