import React, { useState } from "react";

import Header from "../../components/Header";
import RecivedJobs from "./RecivedJobs";
import { useLoggedInUser } from "../../util/useUserData";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ConfirmedJobs from "./ConfirmedJobs";

const Jobs = () => {
  return (
    <>
      <div id="page-wrapper" className="gray-bg">
        <div className="row border-bottom">
          <Header />
        </div>
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="">
            <div className="mb-4">
              <h1 className="sophisticated-header display-5 text-black mr-4">
                <i
                  className="fa fa-wrench text-black m-3"
                  aria-hidden="true"
                ></i>
                Jobs
              </h1>
            </div>
            <Tabs>
              <TabList>
                <Tab>Recived Jobs</Tab>
                <Tab>Accepted Jobs</Tab>
              </TabList>
              <TabPanel>
                <RecivedJobs loggedUserId={useLoggedInUser().id} />
              </TabPanel>
              <TabPanel>
              <ConfirmedJobs loggedUserId={useLoggedInUser().id} />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
