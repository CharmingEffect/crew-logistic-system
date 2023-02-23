import swal from "sweetalert";
import React, { Component } from "react";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import { useLocalState } from "../../util/useLocalStorage";
import BASE_URL from "../../util/baseUrl";


// https://github.com/eugenp/tutorials/blob/master/spring-boot-modules/spring-boot-react/frontend/src/ClientList.js

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    fetch(BASE_URL + "/api/admin/getAllUsers")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  async remove(id) {
    await fetch(BASE_URL + `/api/admin/deleteUser/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      let updatedUsers = [...this.state.users].filter((i) => i.id !== id);
      this.setState({ clients: updatedUsers });
      swal("Deleted!", "User has been deleted.", "success");
      this.componentDidMount();
    });
  }

  render() {
    const { users } = this.state;

    const userList = users.map((user) => {
      return (
        <tr className="table-odd" key={user.id}>
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
              <Button
                size="sm"
                color="success"
                onClick={() => this.remove(user.id)}
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
              <th width="5%">First Name</th>
              <th width="5%">Last Name</th>
              <th width="5%">Email</th>
              <th width="5%">Activated</th>
              <th width="5%">Joined</th>
              <th width="10%">Actions</th>
            </tr>
          </thead>
          <tbody>{userList}</tbody>
        </Table>
      </Container>
    );
  }
}

export default UsersList;
