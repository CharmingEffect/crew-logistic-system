import React from "react";
import { PersonPlusFill } from "react-bootstrap-icons";
import { useState } from "react";
import swal from "sweetalert";
import UsersMngmt from "./UsersMngmt";

const AddUser = () => {
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

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <p>
          Ones the user is created he will recive confirmation email. Needs to
          click on a link to activate account.
        </p>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>

          {/* password is generated automaticaly and sent to via user email */}
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>First Name</label>
            <input
              type="firstName"
              className="form-control"
              id="inputEmail4"
              placeholder="firstName"
              value={firstName}
              name="firstName"
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>

          <div className="form-group col-md-6">
            <label>Last Name</label>
            <input
              type="lastName"
              className="form-control"
              id="inputPassword4"
              placeholder="Last Name"
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
            placeholder="1234 Main St"
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
            placeholder="Apartment, studio, or floor"
            value={city}
            name="city"
            onChange={(e) => onInputChange(e)}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
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
          <div className="form-group col-md-4">
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
          <div className="form-group col-md-2">
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
    </>
  );
};

export default AddUser;
