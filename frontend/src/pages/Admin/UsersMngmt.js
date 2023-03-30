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
      <div id="page-wrapper" className="gray-bg">
        <div className="row border-bottom">
          <Header />
        </div>
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="mb-4">
            <h1 className="sophisticated-header display-5 text-black mr-4">
              <i
                className="fa fa-user text-black d-inline-block m-3"
                aria-hidden="true"
              ></i>
              User Management
            </h1>
            <div className="d-flex justify-content-end">
              <AddUser />
            </div>
          </div>
          <UsersList />
        </div>
      </div>
    </>
  );
};

export default UsersMngmt;
