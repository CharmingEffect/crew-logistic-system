import swal from "sweetalert";
import React, { Component, useEffect } from "react";
import { Button, ButtonGroup, Container } from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import AssignCrew from "./AssignCrew";


// https://github.com/eugenp/tutorials/blob/master/spring-boot-modules/spring-boot-react/frontend/src/ClientList.js

class JobsList extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [], showTooltip: false, tooltipX: 0, tooltipY: 0 };
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    fetch("/api/admin/getAllJobs")
      .then((response) => response.json())
      .then((data) => this.setState({ jobs: data }));
  }

  handleMouseOver(e, content) {
    this.setState({
      showTooltip: true,
      tooltipX: e.pageX,
      tooltipY: e.pageY,
      tooltipContent: content,
    });
  }

  handleMouseOut() {
    this.setState({ showTooltip: false });
  }


  async remove(jobNumber) {
    await fetch(`/api/admin/deleteJob/${jobNumber}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      let updatedJobs = [...this.state.jobs].filter(
        (i) => i.jobNumber !== jobNumber
      );
      this.setState({ clients: updatedJobs });
      swal({
        title: "Sucess!",
        text: "Job has been deleted.",
        icon: "success",
        button: false,
        timer: 1000,
      });
    });
    this.componentDidMount();
  }

  assginCrew(jobNumber) {
    return <AssignCrew jobNumber={jobNumber}></AssignCrew>;
  }

  render() {
    const { jobs } = this.state;

    const jobList = jobs.map((job) => {
      const tooltipContent = (
        <div
          style={{
            display: "flex",
            backgroundColor: "#2C3E50",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                marginBottom: "5px",
              }}
            >
             JOB INFORMATION: 
            </p>
            <div style={{ backgroundColor: '#2C3E50', padding: '10px', borderRadius: '5px' }}>
              <p style={{ color: 'white' }}>Job number: {job.jobNumber}</p>
              <p style={{ color: 'white' }}>Job duration: {job.jobDuration} h</p>
              <p style={{ color: 'white' }}>Number of crew: {job.numberOfCrew}</p>
              <p style={{ color: 'white' }}>Date and time: {job.dateTime}</p>
              <p style={{ color: 'white' }}>Driver: {job.driverName}</p>
              <p style={{ color: 'white' }}>Crew Chief: {job.crewChiefName}</p>
            </div>
          </div>
          <div>
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                marginBottom: "5px",
              }}
            >
            CREW LIST
            </p>
                cre list  - modify job info to include crew list
            {/* {job.crewList.map((crewMember) => (
              <p key={crewMember.id} style={{ color: "white" }}>
                {crewMember.name}
              </p>
            ))} */}
          </div>
        </div>
      );



      return (

        <Tr className="table-odd" key={job.jobNumber}
          onMouseOver={(e) => this.handleMouseOver(e, tooltipContent)}
          onMouseOut={() => this.handleMouseOut()}

        >
          <Td>{job.jobNumber}</Td>
          <Td>{job.jobDuration}</Td>
          <Td>{job.numberOfCrew}</Td>
          <Td>
            {String(job.address.addressLine1)}{" "}
            {String(job.address.addressLine2)}
            {String(job.address.postalCode)}
            {String(job.address.city)}
          </Td>
          <Td>{String(job.dateTime)}</Td>
          <Td>
            <ButtonGroup>
              <Button
                size="sm"
                color="danger"
                onClick={() => this.remove(job.jobNumber)}
              >
                Delete
              </Button>
              <Button
                size="sm"
                color="success"
                onClick={() => this.remove(job.jobNumber)}
                className="mx-2"
              >
                Edit
              </Button>
              <AssignCrew jobNumber={job.jobNumber}></AssignCrew>
            </ButtonGroup>
          </Td>
        </Tr>
      );
    });

    const height = "50%";

    return (
      <>
        {this.state.showTooltip && (
          <div
            className="tooltip-popup"
            style={{ top: this.state.tooltipY, left: this.state.tooltipX }}
          >
            {this.state.tooltipContent}
          </div>
        )}
        <Table>
          <Thead className="thead">
            <Tr>
              <Th width="5%">Job Number</Th>
              <Th width="5%">Job Duration (h)</Th>
              <Th width="5%">Number of crew</Th>
              <Th width="5%">Address</Th>
              <Th width="5%">Date</Th>
              <Th width="5%">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>{jobList}</Tbody>
        </Table>
      </>

    );
  }
}

export default JobsList;
