import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <div className="list-group">
        {jobAssignments.map(assignment => (
          <div key={assignment.id} className="list-group-item">
            <h5 className="mb-1">{assignment.job.jobNumber}</h5>
            <p className="mb-1">{assignment.job.jobNumber} - {assignment.user.firstName} {assignment.user.lastName} - {assignment.status}</p>
            <div className="d-flex justify-content-end">
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(assignment.id)}>Delete</button> 
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobAssignmentList;