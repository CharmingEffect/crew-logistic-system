import React from "react";


const JobWidget = ({ jobNumber, clientCompanyName, address, contactOnSite, dateTime }) => {
  return (
    <div className="job-widget widget col-lg-4 m-2 p-4 navy-bg shadow rounded">
      <div className="row">
        <div className="col-4">
          <i className="fa fa-wrench fa-5x"></i>
        </div>
        <div className="col-8 text-right">
          <h2 className="font-weight-bold">Job #{jobNumber}</h2>
          <dl>
            <dt>Client</dt>
            <dd>{clientCompanyName}</dd>
            <dt>Address</dt>
            <dd>{address}</dd>
            <dt>Contact</dt>
            <dd>{contactOnSite}</dd>
            <dt>Date</dt>
            <dd>{dateTime}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default JobWidget;
