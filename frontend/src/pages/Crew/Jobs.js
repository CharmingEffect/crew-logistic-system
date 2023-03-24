import React, { useState } from "react";

import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import RecivedJobs from "./RecivedJobs";

const Jobs = () => {
  return (
    <>
      <div id="page-wrapper" className="gray-bg">
        <div className="row border-bottom">
          <Header />
        </div>
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="">
            {" "}
            <i
              className="fa fa-wrench fa-3x text-black d-inline-block m-3"
              aria-hidden="true"
            ></i>
            <h1 className="display-5 text-black d-inline-block">Jobs</h1>
            <Tabs>
              <div title="Recived Jobs">
                <RecivedJobs />
              </div>
              <div title="Accepted Jobs">
                <h2>Tab 2 Content</h2>

                <p>This is the content for Tab 2.</p>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
