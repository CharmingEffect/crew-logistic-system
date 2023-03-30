import React, { useState } from "react";

import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import RecivedJobs from "./RecivedJobs";
import { useLoggedInUser } from "../../util/useUserData";

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
                Job Management
              </h1>
            </div>
            <Tabs>
              <div title="Recived Jobs">
                <RecivedJobs loggedUserId={useLoggedInUser().id} />
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
