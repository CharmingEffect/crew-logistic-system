import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Header from "../../components/Header";
import AddJob from "./AddJob";
import JobsList from "./JobsList";
import JobAssignmentList from "./JobAssignmentList";

function JobsMngmt() {
  return (
    <>
      <div id="page-wrapper" className="gray-bg">
        <div className="row border-bottom">
          <Header />
        </div>
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="mb-4">
            <h1 className="sophisticated-header display-5 text-black mr-4">
              <i className="fa fa-wrench text-black m-3" aria-hidden="true"></i>
              Job Management
            </h1>
            <div className="d-flex justify-content-end">
              <AddJob />
            </div>
          </div>

          <Tabs>
            <TabList>
              <Tab>Job List</Tab>
              <Tab>Sent Job Assignments </Tab>
            </TabList>
            <TabPanel>
              <JobsList />
            </TabPanel>
            <TabPanel>
              <JobAssignmentList />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default JobsMngmt;
