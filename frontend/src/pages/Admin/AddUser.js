import React, { useState } from "react";
import Modal from "react-modal";
import swal from "sweetalert";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import Loginpage.css

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

  overlay: {
    background: "rgb(0 0 0 / 75%)",
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
      addressLine1: "",
      addressLine2: "",
      city: "",
      stateProvince: "",
      postalCode: "",
      country: "",
    },
  });

  const {
    email,
    firstName,
    lastName,
    role,
    addressLine1,
    addressLine2,
    city,
    stateProvince,
    postalCode,
    country,
  } = user;

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
          addressLine1: addressLine1,
          addressLine2: addressLine2,
          city: city,
          stateProvince: stateProvince,
          postalCode: postalCode,
          country: country,
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
          setModalIsOpen(false);
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
        <i
          class="fa fa-user-plus fa-2x text-black d-inline-block m-3"
          aria-hidden="true"
        ></i>
        <h3 className="text-black d-inline-block">Create New User</h3>
        <p>
          Ones the user is created the system send a confirmation link. The user
          needs to click on it to activate his/her account.
        </p>
        <form onSubmit={(e) => onSubmit(e)}>
          <div class="form-group row mt-2">
            <label for="inputEmail" class="col-sm-5 col-form-label form-box">
              Email
            </label>
            <div class="col-sm-7 form-field">
              <input
                type="email"
                className="cls-form-control form-field"
                id="inputEmail4"
                value={email}
                name="email"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label
              for="inputPassword"
              class="col-sm-5 col-form-label form-box-light"
            >
              First Name
            </label>
            <div class="col-sm-7 form-field-light">
              <input
                type="text"
                className="cls-form-control form-field-light"
                id="inputEmail4"
                value={firstName}
                name="firstName"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-5 col-form-label form-box">
              Last Name
            </label>
            <div class="col-sm-7 form-field">
              <input
                type="lastName"
                className="cls-form-control form-field"
                id="inputPassword4"
                value={lastName}
                name="lastName"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label
              for="inputPassword"
              class="col-sm-5 col-form-label form-box-light"
            >
              Role
            </label>
            <select
              value={role}
              name="role"
              onChange={(e) => onInputChange(e)}
              id="inputState"
              className="col-sm-7 form-field-light"
              required
            >
              {" "}
              <option></option>
              <option>ADMIN</option>
              <option>CREW_MEMBER</option>
            </select>
          </div>
          {/* up to here is ok */}

          <div class="form-group row">
            <label for="inputPassword" class="col-sm-5 col-form-label form-box">
              Address Line 1
            </label>
            <div class="col-sm-7 form-field">
              <input
                type="text"
                className="cls-form-control form-field"
                id="inputAddress"
                value={addressLine1}
                name="addressLine1"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label
              for="inputPassword"
              class="col-sm-5 col-form-label form-box-light"
            >
              Address Line 2
            </label>
            <div class="col-sm-7 form-field-light">
              <input
                type="text"
                className="cls-form-control form-field-light"
                id="inputAddress2"
                value={addressLine2}
                name="addressLine2"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-5 col-form-label form-box">
              City
            </label>
            <div class="col-sm-7 form-field">
              <input
                type="text"
                className="cls-form-control form-field"
                id="inputCity"
                value={city}
                name="city"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label
              for="inputPassword"
              class="col-sm-5 col-form-label form-box-light"
            >
              State/Province
            </label>
            <div class="col-sm-7 form-field-light">
              <input
                type="text"
                className="cls-form-control form-field-light"
                id="inputZip"
                value={stateProvince}
                name="stateProvince"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-5 col-form-label form-box">
              Postal Code
            </label>
            <div class="col-sm-7 form-field">
              <input
                type="text"
                className="cls-form-control form-field"
                id="inputCity"
                value={postalCode}
                name="postalCode"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label
              for="inputPassword"
              class="col-sm-5 col-form-label form-box-light"
            >
              Country
            </label>
            <div class="col-sm-7 form-field-light">
              <input
                type="text"
                className="cls-form-control form-field-light"
                id="inputZip"
                value={country}
                name="country"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>

          <div className="d-flex justify-content-end mt-3">
            <br></br>
            <Button type="submit" className="button-color">
              Submit
            </Button>
            <Button
              className="button-color ml-3"
              size="sm"
              onClick={() => setModalIsOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AddUser;
