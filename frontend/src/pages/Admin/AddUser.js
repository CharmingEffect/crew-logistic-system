import React, { useState } from "react";
import Modal from "react-modal";
import swal from "sweetalert";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "30rem",
  },
};

function AddUser() {
  const [formData, setFormData] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    role: "",
    address: {
      street: "",
      city: "",
      country: "",
      zipCode: "",
    },
  });

  const { email, firstName, lastName, role, street, city, country, zipCode } =
    user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // loading swal alert
    swal({
      title: "Loading...",
      text: "Please wait",
      icon: "info",
      button: false,
      timer: 4000,
    });

    await fetch("/api/admin/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        firstName: firstName,
        lastName: lastName,
        role: role,
        address: {
          street: street,
          city: city,
          country: country,
          zipCode: zipCode,
        },
      }),
    })
      .then((response) => {
        // console.log(response.status);
        if (response.status == 500) {
          swal({
            title: "Error!",
            text: "Email alreay exists",
            icon: "error",
            button: false,
            timer: 1000,
          });
        } else {
          swal({
            title: "Success!",
            text: "User created",
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
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name} Email: ${formData.email}`);
    setModalIsOpen(false);
  };

  return (
    <div>
      <Button
        className="button-color"
        size="sm"
        onClick={() => setModalIsOpen(true)}
      >
        Create New User
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <h2>Create New User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <p>
            Ones the user is created he will recive confirmation email. Needs to
            click on a link to activate account.
          </p>
          <div className="">
            <div className="">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={email}
                name="email"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            {/* password is generated automaticaly and sent to via user email */}
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="firstName"
                className="form-control"
                id="inputEmail4"
                value={firstName}
                name="firstName"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="lastName"
                className="form-control"
                id="inputPassword4"
                value={lastName}
                name="lastName"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            {" "}
            <br></br>
            <label className="ont-weight-bold">Address</label>
            <br></br>
            <label>Street</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              value={street}
              name="street"
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              value={city}
              name="city"
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                value={country}
                name="country"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select
                value={role}
                name="role"
                onChange={(e) => onInputChange(e)}
                id="inputState"
                className="form-control"
                required
              >
                {" "}
                <option></option>
                <option>ADMIN</option>
                <option>CREW_MEMBER</option>
              </select>
            </div>
            <div className="form-group">
              <label>Zip</label>
              <input
                type="text"
                className="form-control"
                id="inputZip"
                value={zipCode}
                name="zipCode"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="text-right">
            <br></br>
            <button type="submit" className="btn btn-primary">
              Add new user
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AddUser;
