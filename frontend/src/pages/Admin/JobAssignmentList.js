import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JobAssignmentList() {
  const [jobAssignments, setJobAssignments] = useState([]);

  useEffect(() => {
    axios.get('api/admin/job-assignments')
      .then(response => setJobAssignments(response.data))
      .catch(error => console.error(error));
  }, []);

  function handleDelete(id) {
    axios.delete(`api/admin/job-assignments/${id}`)
      .then(response => setJobAssignments(jobAssignments.filter(a => a.id !== id)))
      .catch(error => console.error(error));
  }

  return (
    <div>
      <ul>
        {jobAssignments.map(assignment => (
            
          <li key={assignment.id}>
            {assignment.job.jobNumber} - {assignment.user.firstName} {assignment.user.lastName} - {assignment.status}
            <button onClick={() => handleDelete(assignment.id)}>Delete</button>  
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobAssignmentList;