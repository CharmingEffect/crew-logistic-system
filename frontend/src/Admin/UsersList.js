import React from "react";
import "./style.css";
import swal from "sweetalert";

const UsersList = () => {
  const [users, setUsers] = React.useState(null);
  const [id, setId] = React.useState(0);

  React.useEffect(() => {
    fetch("/api/admin/getAllUsers")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .then(() => console.log(users));
  }, []);

  React.useEffect(() => {
    console.log("List of users:", users);
  }, [users]);

  const handleDelete = (id) => {
    fetch("/api/admin/deleteUser/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status == 500) {
          swal({
            title: "Error!",
            text: "User not deleted",
            icon: "error",
            button: false,
            timer: 1000,
          });
        } else {
          swal({
            title: "Success!",
            text: "User deleted",
            icon: "success",
            button: false,
            timer: 1000,
          });
        }
      })
      .catch((message) => {
        swal({
          title: "Error!",
          text: message,
          icon: "error",
          button: false,
          timer: 1000,
        });
      });
  };

  return (
    <div className="container-fluid">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Registration date</th>
            <th>Activated</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.createdAt}</td>
                <td>{String(user.enabled)}</td>
                <td>
                  {" "}
                  <button
                    onClick={(id) => handleDelete(id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
