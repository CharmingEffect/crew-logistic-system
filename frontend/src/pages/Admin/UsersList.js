import swal from "sweetalert";
import React, { Component } from "react";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import { useLocalState } from "../../util/useLocalStorage";

// https://github.com/eugenp/tutorials/blob/master/spring-boot-modules/spring-boot-react/frontend/src/ClientList.js

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    fetch("/api/admin/getAllUsers")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  async remove(id) {
    await fetch(`/api/admin/deleteUser/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      let updatedUsers = [...this.state.users].filter((i) => i.id !== id);
      this.setState({ clients: updatedUsers });
      swal("Deleted!", "User has been deleted.", "success");
      const [jwt, setJwt] = useLocalState("", "jwt");

      this.componentDidMount();
    });
  }

  render() {
    const { users } = this.state;

    const userList = users.map((user) => {
      return (
        <tr key={user.id}>
          <td style={{ whiteSpace: "nowrap" }}>{user.firstName}</td>
          <td style={{ whiteSpace: "nowrap" }}>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{String(user.enabled)}</td>
          <td>{String(user.createdAt)}</td>
          <td>
            <ButtonGroup>
              <Button
                size="sm"
                color="danger"
                onClick={() => this.remove(user.id)}
              >
                Delete
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });

    return (
      <Container fluid>
        <Table className="mt-4">
          <thead>
            <tr>
              <th width="30%">First Name</th>
              <th width="30%">Last Name</th>
              <th width="30%">Email</th>
              <th width="30%">Activated</th>
              <th width="30%">Joined</th>
              <th width="40%">Actions</th>
            </tr>
          </thead>
          <tbody>{userList}</tbody>
        </Table>
      </Container>
    );
  }
}

export default UsersList;
