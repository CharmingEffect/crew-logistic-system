import React from "react";
import { useState } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Widget from "../Widget";
import { GetAllCrewMembers } from "../../util/useUserData";
import { SystemInfo } from "../../util/useUserData";
import { MemoryStats } from "../../util/useUserData";
import JobWidget from "../../components/JobWidget";
import { useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [toggleState, setToggleState] = useState(1);
  const [toggleNavbarState, setToggleNavbarState] = useState(true);

  const [latestJobs, setLatestJobs] = useState([]);

  useEffect(() => {
    axios
      .get("/api/admin/getLatestJobs")
      .then((response) => setLatestJobs(response.data))
      .catch((error) => console.log(error));
  }, []);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const systemInfo = SystemInfo();

  const memoryStats = MemoryStats();

  return (
    <>
      <div>
        <Nav />
        <div id="page-wrapper" className="gray-bg">
          <div className="row">
            <Header />
          </div>
          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
              <div className="col-lg-3">
                <div className="widget style1 navy-bg">
                  <Widget
                    name="Total Jobs"
                    count={systemInfo.numberOfJobs}
                    icon_name="fa fa-briefcase fa-5x"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget style1 red-bg">
                  <Widget
                    name="Crew members"
                    count={systemInfo.numberOfCrewMembers}
                    icon_name="fa fa-users fa-5x"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget style1 blue-bg">
                  <Widget
                    name="Total number of users"
                    count={systemInfo.numberOfUsers}
                    icon_name="fa fa-users fa-5x"
                  />
                </div>
              </div>

              <div className="col-lg-3">
                <div className="widget style1 purple-bg">
                  <Widget
                    name="Admins"
                    count={systemInfo.numberOfAdmins}
                    icon_name="fa fa-address-card-o fa-5x"
                  />
                </div>
              </div>
    
            </div>

            <div className="d-flex justify-content-around">
                {latestJobs.map(job => (
                        <JobWidget
                        jobNumber={job.jobNumber}
                        jobDuration={job.jobDuration}
                        numberOfCrew={job.numberOfCrew}
                        address={`${job.address.addressLine1} ${job.address.addressLine2} ${job.address.city} ${job.address.postalCode}`}
                        dateTime={job.dateTime}
                        clientCompanyName={job.clientCompanyName}
                        contactOnSite={job.contactOnSite}
                        driver={job.driver}
                        crewChief={job.crewChief}
                        remarks={job.remarks}
                        comment={job.comment}
                      />
                ))}
                
              </div> 
          </div>
          <p className="row">
                <strong>Memory Stats:</strong>
                <small>Heap Size: {memoryStats.heapSize}</small>
                <small>Heap Max Size: {memoryStats.heapMaxSize}</small>
                <small>Heap Free Size: {memoryStats.heapFreeSize}</small>
              </p>
        </div>
        
      </div>
    </>
  );
};

export default Admin;
