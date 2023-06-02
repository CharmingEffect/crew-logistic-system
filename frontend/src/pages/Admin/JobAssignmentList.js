import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

function JobAssignmentList() {
  const [jobAssignments, setJobAssignments] = useState([]);

  useEffect(() => {
    axios.get("/api/admin/job-assignments")
      .then(response => setJobAssignments(response.data))
      .catch(error => console.error(error));
  }, []);

  function handleDelete(id) {
    axios.delete(`/api/admin/job-assignments/${id}`)
      .then(response => setJobAssignments(jobAssignments.filter(a => a.id !== id)))
      .catch(error => console.error(error));
  }

  return (
    <Table>
    <Thead className="thead">
      <Tr>
        <Th>Job Number</Th>
        <Th>Sent To</Th>
        <Th>Status</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      {jobAssignments.map((assignment) => (
        <Tr className="table-odd"  key={assignment.id}>
          <Td>{assignment.jobNumber}</Td>
          <Td>{assignment.sendTo}</Td>
          <Td>{assignment.status}</Td>
          <Td>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(assignment.id)}>Delete</button>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
  );
}

export default JobAssignmentList;