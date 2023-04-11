import React from "react";

import "react-tabs/style/react-tabs.css";
import AddUser from "./AddUser";
import UsersList from "./UsersList";


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
