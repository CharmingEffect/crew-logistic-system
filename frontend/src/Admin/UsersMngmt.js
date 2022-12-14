import React, { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddUser from "./AddUser";
import { PersonPlusFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import UsersList from "./UsersList";
import "./style.css";

const UsersMngmt = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>
          <PersonPlusFill size={25} className="m-2" />
          Add new user
        </Tab>
        <Tab>List of users</Tab>
      </TabList>

      <TabPanel>
        <AddUser />
      </TabPanel>
      <TabPanel>
        <UsersList></UsersList>
      </TabPanel>
    </Tabs>
  );
};

export default UsersMngmt;
