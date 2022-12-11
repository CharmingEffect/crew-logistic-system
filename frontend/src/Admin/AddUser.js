import React from "react";
import { PersonPlusFill } from "react-bootstrap-icons";
import { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    role: "",
    address: {
      street: "",
      city: "",
      country: "",
      zipCode: "",
    },
  });

  const {
    email,
    firstName,
    lastName,
    password,
    role,
    street,
    city,
    country,
    zipCode,
  } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/admin/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <h1>
          {" "}
          <PersonPlusFill size={50} /> Add New User
        </h1>
        <p>
          Ones the user is created he will recive confirmation email. Needs to
          click on a link to activate account.
        </p>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">First Name</label>
            <input
              type="firstName"
              className="form-control"
              id="inputEmail4"
              placeholder="firstName"
              value={firstName}
              name="firstName"
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group col-md-6">
            <label for="inputPassword4">Last Name</label>
            <input
              type="lastName"
              className="form-control"
              id="inputPassword4"
              placeholder="Last Name"
              value={lastName}
              name="lastName"
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="form-group">
          {" "}
          <br></br>
          <label className="ont-weight-bold" for="inputAddress">
            Address
          </label>
          <br></br>
          <label for="inputAddress">Street</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            value={street}
            name="street"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label for="inputAddress2">City</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            value={city}
            name="city"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">Country</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              value={country}
              name="country"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">Status</label>
            <select
              value={role}
              name="role"
              onChange={(e) => onInputChange(e)}
              id="inputState"
              className="form-control"
            >
              <option selected>Choose...</option>
              <option>ADMIN</option>
              <option>CREW_MEMBER</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              value={zipCode}
              name="zipCode"
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </>
  );
};

export default AddUser;
