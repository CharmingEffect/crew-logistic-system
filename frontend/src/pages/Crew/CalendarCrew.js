

import "react-tabs/style/react-tabs.css";
import Header from "../../components/Header";
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';
import { useLoggedInUser } from "../../util/useUserData";

const localizer = momentLocalizer(moment);

function CalendarCrew() {

    const loggedUserId = useLoggedInUser().id;

    const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`/api/admin/confirmedJobs/${loggedUserId}`)
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error(error));
  }, [loggedUserId]);


    const events = jobs.map(job => {
      const date = new Date(job.dateTime);
      const endDate = new Date(date.getTime() + job.jobDuration * 60 * 60 * 1000);
      return {
        title: job.jobNumber + ' - ' + job.clientCompanyName + ' - ' + job.address.addressLine1,
        companyName: job.clientCompanyName,
        address: job.address.addressLine1,
        start: date,
        end: endDate
      }
    });

    
    return (
        <>
            <div id="page-wrapper" className="gray-bg">
                <div className="row border-bottom">
                    <Header />
                </div>
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="mb-4">
                        <h1 className="sophisticated-header display-5 text-black mr-4">
                            <i className="fa fa-calendar text-black m-3" aria-hidden="true"></i>
                            Calendar
                        </h1>
                       
                    </div>
                    <div style={{ height: '500pt' }}>
                        <Calendar
                            localizer={localizer}
                            events={events}
                            style={{ padding: '10px' }}
                  
                        />
                    </div>

                </div>
            </div>
        </>
    );
}

export default CalendarCrew;
