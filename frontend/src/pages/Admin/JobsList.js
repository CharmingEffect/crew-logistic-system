import swal from "sweetalert";
import React, { Component, useEffect } from "react";
import { Button, ButtonGroup, Container } from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

// https://github.com/eugenp/tutorials/blob/master/spring-boot-modules/spring-boot-react/frontend/src/ClientList.js

class JobsList extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [] };
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    fetch("/api/admin/getAllJobs")
      .then((response) => response.json())
      .then((data) => this.setState({ jobs: data }));
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
        title: "Error!",
        text: "Job has been deleted.",
        icon: "success",
        button: false,
        timer: 1000,
      });
    });
    this.componentDidMount();
  }

  render() {
    const { jobs } = this.state;

    const jobList = jobs.map((job) => {
      return (
        <Tr key={job.jobNumber}>
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
            </ButtonGroup>
          </Td>
        </Tr>
      );
    });

    const height = "50%";

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
  }
}

export default JobsList;
