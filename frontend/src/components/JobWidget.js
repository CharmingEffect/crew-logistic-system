
import React, { useState, useEffect } from "react";
import axios from "axios";



const JobWidget = ({ jobNumber, clientCompanyName, address, contactOnSite, dateTime }) => {
  return (
    <div className="col-lg-4 m-2">
      <div className="widget navy-bg p-xl">
        <div className="row">
          <div className="col-xs-4">
            <i className="fa fa-wrench fa-5x"></i>
          </div>
          <div className="col-xs-8 text-right">
           
            <h2 className="font-bold">Job Number {jobNumber}</h2>
            <span className="font-bold">Client:</span>
            <p className="font-bold">{clientCompanyName}</p>
            <span className="font-bold">Address:</span>
            <p className="font-bold">{address}</p>
            <span className="font-bold">Contact:</span>
            <p className="font-bold">{contactOnSite}</p>
            <span className="font-bold">Date:</span>
            <p className="font-bold">{dateTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobWidget;