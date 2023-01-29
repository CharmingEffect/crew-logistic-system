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
        <form className="form-horizontal" onSubmit={(e) => onSubmit(e)}>
          <div className="row">
            <div className="form-group row">
              <label className="ontrol-label col-sm-2">Job Number</label>
              <div>
                <input
                  type="email"
                  className="cls-form-control"
                  id="inputEmail4"
                  value={email}
                  name="email"
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>

              {/* password is generated automaticaly and sent to via user email */}
            </div>

            <div className="form-group">
              <label>Job Duration</label>
              <input
                type="firstName"
                className="cls-form-control"
                id="inputEmail4"
                value={firstName}
                name="firstName"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Date & Time</label>
              <input
                type="firstName"
                className="cls-form-control"
                id="inputEmail4"
                value={firstName}
                name="firstName"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div className="form-group">
              <label>Number of crew</label>
              <input
                type="lastName"
                className="cls-form-control"
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
            <label className="font-weight-2">Address</label>
            <br></br>
            <br></br>
            <label>Street</label>
            <input
              type="text"
              className="cls-form-control"
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
              className="cls-form-control"
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
                className="cls-form-control"
                id="inputCity"
                value={country}
                name="country"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Zip</label>
              <input
                type="text"
                className="cls-form-control"
                id="inputZip"
                value={zipCode}
                name="zipCode"
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Client's Company</label>
            <input
              type="text"
              className="cls-form-control"
              id="inputZip"
              value={zipCode}
              name="zipCode"
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact on site</label>
            <input
              type="text"
              className="cls-form-control"
              id="inputZip"
              value={zipCode}
              name="zipCode"
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label>Driver Required</label>
            <input
              type="checkbox"
              className="cls-form-control"
              id="inputZip"
              value={zipCode}
              name="zipCode"
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label>Remarks</label>
            <input
              type="text"
              className="cls-form-control"
              id="inputZip"
              value={zipCode}
              name="zipCode"
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label>Comment</label>
            <input
              type="text"
              className="cls-form-control"
              id="inputZip"
              value={zipCode}
              name="zipCode"
              onChange={(e) => onInputChange(e)}
              required
            />
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
