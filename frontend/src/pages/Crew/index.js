import React from "react";
import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Widget from "../Widget";
import { useLoggedInUser } from "../../util/useUserData";
import JobWidget from "../../components/JobWidget";

const Crew = () => {
  const [toggleState, setToggleState] = useState(1);
  const [toggleNavbarState, setToggleNavbarState] = useState(true);
  const [jobs, setJobs] = useState([]);
  const loggedUser = useLoggedInUser();
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const toggleNavbar = (e) => {
    toggleNavbarState === true
      ? setToggleNavbarState(false)
      : setToggleNavbarState(true);
  };

  const logoutUser = () => {
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  useEffect(() => {
    fetch(`/api/admin/confirmedJobs/${loggedUser.id}`)
      .then((response) => response.json())
      .then((data) => {
        const lastThreeJobs = data.slice(-3);
        setJobs(lastThreeJobs);
      })
      .catch((error) => console.error(error));
  }, [loggedUser.id]);

  return (
    <>
      <div className="nav_bg_color" id="wrapper">
        <Nav />
        <div id="page-wrapper" className="gray-bg">
          <div className="row border-bottom">
            <Header />
          </div>
          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
         
            <h1 className="sophisticated-header display-5 text-black mr-4">
              <i
                className="fa fa-user text-black d-inline-block m-3"
                aria-hidden="true"
              ></i>
              Upcoming Jobs
            </h1>
    
    
            </div>

            <div className="d-flex justify-content-around">
            
                {jobs.map(job => (
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
        </div>
      </div>
    </>
  );
};

export default Crew;
