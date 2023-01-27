import React, { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddUser from "./AddUser";
import { PersonPlusFill, PersonLinesFill } from "react-bootstrap-icons";
import UsersList from "./UsersList";
import Nav from "../../components/Nav";

import { useEffect } from "react";
import SwalForm from "./AddUser";

import Header from "../../components/Header";

const UsersMngmt = () => {
  return (
    <>
      <div className="nav_bg_color" id="wrapper">
        <Nav />
        <div id="page-wrapper" className="gray-bg">
          <div className="row border-bottom">
            <Header />
          </div>
          <div className="wrapper wrapper-content animated fadeInRight"></div>
          <div className="">
            {" "}
            <i
              class="fa fa-user fa-3x text-black d-inline-block m-3"
              aria-hidden="true"
            ></i>
            <h1 class="display-5 text-black d-inline-block">User Management</h1>
            <div className="d-flex justify-content-end">
              <AddUser></AddUser>
            </div>
          </div>

          <br />
          <UsersList></UsersList>
        </div>
      </div>
    </>
  );
};

export default UsersMngmt;
