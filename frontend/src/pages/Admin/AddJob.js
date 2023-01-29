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
  },

  overlay: {
    //position: "none",
    background: "rgb(0 0 0 / 75%)",
  },
};

function AddJob() {
  const [formData, setFormData] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [user, setUser] = useState({
    jobNumber: "",
    dateTime: "",
    jobDuration: "",
    numberOfCrew: "",
    address: {
      street: "",
      city: "",
      country: "",
      zipCode: "",
    },
    clientCompanyName: "",
    contactOnSite: "",
    driverRequired: "",
    remarks: "",
    comment: "",
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
    <div>
      <Button
        className="button-color"
        col-sm-7
        size="sm"
        onClick={() => setModalIsOpen(true)}
      >
        Create New Job
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <i
          class="fa fa-plus-circle fa-3x text-black d-inline-block m-3"
          aria-hidden="true"
        ></i>
        <h2 className="text-black d-inline-block">Create New Job</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div class="form-group row mt-2">
            <label for="inputEmail" class="col-sm-5 col-form-label form-box">
              Job Number
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
              Date & Time
            </label>
            <div class="col-sm-7 form-field-light">
              <input
                type="firstName"
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
              Job Duration
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
              Number of Crew
            </label>
            <div class="col-sm-7 form-field-light">
              <input
                type="text"
                className="cls-form-control form-field-light"
                id="inputAddress"
                value={street}
                name="street"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-5 col-form-label form-box">
              Street
            </label>
            <div class="col-sm-7 form-field">
              <input
                type="text"
                className="cls-form-control form-field"
                id="inputAddress2"
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
              City
            </label>
            <div class="col-sm-7 form-field-light">
              <input
                type="text"
                className="cls-form-control form-field-light"
                id="inputCity"
                value={country}
                name="country"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-5 col-form-label form-box">
              Country
            </label>
            <div class="col-sm-7 form-field">
              <input
                type="text"
                className="cls-form-control form-field"
                id="inputZip"
                value={zipCode}
                name="zipCode"
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
              Postal Code
            </label>
            <div class="col-sm-7 form-field-light">
              <input
                type="text"
                className="cls-form-control form-field-light"
                id="inputCity"
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

export default AddJob;
