

import "react-tabs/style/react-tabs.css";
import Header from "../../components/Header";
import AddJob from "./AddJob";
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';


const localizer = momentLocalizer(moment);

function CalendarAdmin() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
      axios.get('/api/admin/getAllJobs')
        .then(response => setJobs(response.data))
        .catch(error => console.error(error));
    }, []);
  
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
                        <div className="d-flex justify-content-end">
                            <AddJob />
                        </div>
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

export default CalendarAdmin;
