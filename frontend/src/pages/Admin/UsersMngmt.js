import React, { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddUser from "./AddUser";
import { PersonPlusFill, PersonLinesFill } from "react-bootstrap-icons";
import UsersList from "./UsersList";
import Nav from "../../components/Nav";

import Header from "../../components/Header";

const UsersMngmt = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <div className="nav_bg_color" id="wrapper">
        <Nav />
        <div id="page-wrapper" className="gray-bg">
          <div className="row border-bottom">
            <Header />
          </div>
          <div className="wrapper wrapper-content animated fadeInRight"></div>
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>
                <PersonPlusFill size={25} className="m-2" />
                Add new user
              </Tab>
              <Tab>
                <PersonLinesFill size={25} className="m-2" />
                List of users
              </Tab>
            </TabList>

            <TabPanel>
              <AddUser />
            </TabPanel>
            <TabPanel>
              <UsersList></UsersList>
            </TabPanel>
          </Tabs>
          ;
        </div>
      </div>
    </>
  );
};

export default UsersMngmt;
