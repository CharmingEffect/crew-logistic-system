import swal from "sweetalert";
import React, { Component } from "react";
import { Button, ButtonGroup, Container, Table } from "reactstrap";

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

      this.componentDidMount();
    });
  }

  render() {
    const { jobs } = this.state;

    const jobList = jobs.map((job) => {
      return (
        <tr className="table-odd" key={job.jobNumber}>
          <td style={{ whiteSpace: "nowrap" }}>{job.jobNumber}</td>
          <td style={{ whiteSpace: "nowrap" }}>{job.jobDuration}</td>
          <td>{job.numberOfCrew}</td>
          <td>
            {String(job.address.addressLine1)}{" "}
            {String(job.address.addressLine2)}
            {String(job.address.postalCode)}
            <br></br>
            {String(job.address.city)}
          </td>
          <td>{String(job.dateTime)}</td>
          <td>
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
          </td>
        </tr>
      );
    });

    return (
      <Container fluid>
        <Table className="mt-4">
          <thead className="thead">
            <tr>
              <th width="5%">Job Number</th>
              <th width="5%">Job Duration</th>
              <th width="5%">Number of crew</th>
              <th width="5%">Address</th>
              <th width="5%">Date</th>
              <th width="10%">Actions</th>
            </tr>
          </thead>
          <tbody>{jobList}</tbody>
        </Table>
      </Container>
    );
  }
}

export default JobsList;
