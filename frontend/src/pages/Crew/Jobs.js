import React, { useState } from "react";



import Header from "../../components/Header";



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
            <h1 className="display-5 text-black d-inline-block">
             Jobs
            </h1>
            <div className="d-flex justify-content-end">
            
            </div>
          </div>

          <br />
         <p>Recived and Accepted Jobs</p>
        </div>
      </div>
    </>
  );
};

export default Jobs;
