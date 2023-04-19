import swal from "sweetalert";
import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Container } from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import axios from "axios";
const qs = require('qs');




const ConfirmedJobs = (props) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`/api/admin/confirmedJobs/${props.loggedUserId}`)
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error(error));
  }, [props.loggedUserId]);

  const declineJob = async (jobN) => {
    const userId = props.loggedUserId;
    let data = qs.stringify({
      'jobNumber': jobN,
      'userId': userId ,
      'status': 'PENDING'
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/api/admin/updateJobStatus/',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      if (response.status === 200) {
        swal("Success!", "Job Declined!", "success");
        window.location.reload();
      }
      
    })
    .catch((error) => {
      console.log(error);
    });
    
  };

  const jobList = jobs.map((job) => (
    <Tr className="table-odd" key={job.jobNumber}>
      <Td>{job.jobNumber}</Td>
      <Td>{job.jobDuration}</Td>
      <Td>{job.numberOfCrew}</Td>
      <Td>
        {job.address.addressLine1} {job.address.addressLine2}{" "}
        {job.address.postalCode} {job.address.city}
      </Td>
      <Td>{job.dateTime}</Td>
      <Td>
        <ButtonGroup>
          <Button size="sm" color="danger" className="mx-2" onClick={() => declineJob(job.jobNumber)}>
            <i className="fa fa-times" ></i>
          </Button>
        </ButtonGroup>
      </Td>
    </Tr>
  ));

  return (
    <Table>
      <Thead className="thead">
        <Tr>
          <Th width="5%">Job Number</Th>
          <Th width="5%">Job Duration</Th>
          <Th width="5%">Number of crew</Th>
          <Th width="5%">Address</Th>
          <Th width="5%">Date</Th>
          <Th width="5%">Actions</Th>
        </Tr>
      </Thead>
      <Tbody>{jobList}</Tbody>
    </Table>
  );
};

export default ConfirmedJobs;