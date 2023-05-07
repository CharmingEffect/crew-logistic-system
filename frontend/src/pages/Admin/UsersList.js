import swal from "sweetalert";
import React, { Component } from "react";
import { Button, ButtonGroup, Container } from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { getAllUsers } from "../../util/useUserData";

// https://github.com/eugenp/tutorials/blob/master/spring-boot-modules/spring-boot-react/frontend/src/ClientList.js

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
   getAllUsers().then((data) => {
      this.setState({ users: data });
    });
  }

  async remove(id) {
    const response = await fetch(`/api/admin/deleteUser/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      let updatedUsers = [...this.state.users].filter((i) => i.id !== id);
      this.setState({ clients: updatedUsers });
      swal("Deleted!", "User has been deleted.", "success");
      this.componentDidMount();
    } else if (response.status === 500) {
      swal(
        "Cannot Delete!",
        "The user is associated with ongoing job",
        "error"
      );
    } else {
      swal("Error!", "An unexpected error occurred.", "error");
    }
  }

  async edit(id) {}

  render() {
    const { users } = this.state;

    const userList = users.map((user) => {
      if (user.enabled === true) {
        user.enabled = "Yes";
      } else {
        user.enabled = "No";
      }

      return (
        <Tr className="table-odd" key={user.id}>
          <Td style={{ whiteSpace: "nowrap" }}>{user.id}</Td>
          <Td style={{ whiteSpace: "nowrap" }}>{user.firstName}</Td>
          <Td style={{ whiteSpace: "nowrap" }}>{user.lastName}</Td>
          <Td style={{ whiteSpace: "nowrap" }}>{user.role}</Td>
          <Td>{user.email}</Td>
          <Td>{String(user.enabled)}</Td>
          <Td>{String(user.createdAt)}</Td>
          <Td>
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
                onClick={() => this.edit(user.id)}
                className="mx-2"
              >
                Edit
              </Button>
            </ButtonGroup>
          </Td>
        </Tr>
      );
    });

    return (
      <Container fluid>
        <Table className="mt-4">
          <Thead className="thead">
            <Tr>
              <Th width="5%">Id</Th>
              <Th width="5%">First Name</Th>
              <Th width="5%">Last Name</Th>
              <Th width="5%">Role</Th>
              <Th width="5%">Email</Th>
              <Th width="5%">Activated</Th>
              <Th width="5%">Joined</Th>
              <Th width="10%">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>{userList}</Tbody>
        </Table>
      </Container>
    );
  }
}

export default UsersList;
