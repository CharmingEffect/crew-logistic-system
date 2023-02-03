import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import swal from "sweetalert";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { number } from "prop-types";
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
  const [users, setUsers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [job, setJob] = useState({
    jobNumber: "",
    dateTime: "",
    jobDuration: "",
    numberOfCrew: "",
    address: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      stateProvince: "",
      postalCode: "",
      country: "",
    },
    clientCompanyName: "",
    contactOnSite: "",
    driverRequired: "",
    user: {
      driverUserId: "",
    },
    remarks: "",
    comment: "",
    ccUserId: "",
  });

  const {
    jobNumber,
    dateTime,
    jobDuration,
    numberOfCrew,
    addressLine1,
    addressLine2,
    city,
    stateProvince,
    postalCode,
    country,
    clientCompanyName,
    contactOnSite,
    driverRequired,
    driverUserId,
    remarks,
    comment,
    ccUserId,
  } = job;

  const onInputChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetch("/api/admin/getAllUsers")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

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

    await fetch("/api/admin/newJob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        jobNumber: jobNumber,
        dateTime: dateTime,
        jobDuration: jobDuration,
        numberOfCrew: numberOfCrew,
        address: {
          addressLine1: addressLine1,
          addressLine2: addressLine2,
          city: city,
          stateProvince: stateProvince,
          postalCode: postalCode,
          country: country,
        },
        clientCompanyName: clientCompanyName,
        contactOnSite: contactOnSite,
        driverRequired: driverRequired,
        driverUserId: driverUserId,

        remarks: remarks,
        comment: comment,
        ccUserId: ccUserId,
      }),
    })
      .then((response) => {
        // console.log(response.status);
        if (response.status == 500) {
          swal({
            title: "Error!",
            text: "Job with this number already exists",
            icon: "error",
            button: false,
            timer: 1000,
          });
        } else {
          swal({
            title: "Success!",
            text: "Job created",
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
          className="fa fa-plus-circle fa-2x text-black d-inline-block m-3"
          aria-hidden="true"
        ></i>
        <h3 className="text-black d-inline-block">Create New Job</h3>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="row">
            <div className="col-sm mx-2">
              <div className="form-group row">
                <label
                  for="inputEmail"
                  className="col-sm-5 col-form-label form-box"
                >
                  Job Number
                </label>
                <div className="col-sm-7 form-field">
                  <input
                    type="text"
                    className="cls-form-control form-field"
                    id="inputEmail4"
                    value={jobNumber}
                    name="jobNumber"
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="inputPassword"
                  className="col-sm-5 col-form-label form-box-light"
                >
                  Date & Time
                </label>
                <div className="col-sm-7 form-field-light">
                  <input
                    type="datetime-local"
                    className="cls-form-control form-field-light"
                    id="inputEmail4"
                    value={dateTime}
                    name="dateTime"
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="inputPassword"
                  className="col-sm-5 col-form-label form-box"
                >
                  Job Duration
                </label>
                <div className="col-sm-7 form-field">
                  <input
                    type="number"
                    className="cls-form-control form-field"
                    id="inputPassword4"
                    value={jobDuration}
                    name="jobDuration"
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="inputPassword"
                  className="col-sm-5 col-form-label form-box-light"
                >
                  Number of Crew
                </label>
                <div className="col-sm-7 form-field-light">
                  <input
                    type="number"
                    className="cls-form-control form-field-light"
                    id="inputAddress"
                    value={numberOfCrew}
                    name="numberOfCrew"
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="inputPassword"
                  className="col-sm-5 col-form-label form-box"
                >
                  Address Line 1
                </label>
                <div className="col-sm-7 form-field">
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
              <div className="form-group row">
                <label
                  for="inputPassword"
                  className="col-sm-5 col-form-label form-box-light"
                >
                  Address Line 2
                </label>
                <div className="col-sm-7 form-field-light">
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
              <div className="form-group row">
                <label
                  for="inputPassword"
                  className="col-sm-5 col-form-label form-box"
                >
                  City
                </label>
                <div className="col-sm-7 form-field">
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
              <div className="form-group row">
                <label
                  for="inputPassword"
                  className="col-sm-5 col-form-label form-box-light"
                >
                  State/Province
                </label>
                <div className="col-sm-7 form-field-light">
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
              <div className="form-group row">
                <label
                  for="inputPassword"
                  className="col-sm-5 col-form-label form-box"
                >
                  Postal Code
                </label>
                <div className="col-sm-7 form-field">
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
              <div className="form-group row">
                <label
                  for="inputPassword"
                  className="col-sm-5 col-form-label form-box-light"
                >
                  Country
                </label>
                <div className="col-sm-7 form-field-light">
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
            </div>
            <div className="col-sm">
              <div className="form-group row">
                <label
                  for="inputPassword"
                  className="col-sm-5 col-form-label form-box-light"
                >
                  Client's Company
                </label>
                <div className="col-sm-7 form-field-light">
                  <input
                    type="text"
                    className="cls-form-control form-field-light"
                    id="inputZip"
                    value={clientCompanyName}
                    name="clientCompanyName"
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="inputPassword"
                  className="col-sm-5 col-form-label form-box"
                >
                  Contact on site
                </label>
                <div className="col-sm-7 form-field">
                  <input
                    type="text"
                    className="cls-form-control form-field"
                    id="inputCity"
                    value={contactOnSite}
                    name="contactOnSite"
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="inputPassword"
                  className="col-sm-5 col-form-label form-box-light"
                >
                  Driver Required
                </label>
                <div className="col-sm-7 form-field-light">
                  <input
                    type="checkbox"
                    id="inputZip"
                    value={driverRequired}
                    name="driverRequired"
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="inputPassword"
                  className="col-sm-5 col-form-label form-box"
                >
                  Driver
                </label>
                <div className="col-sm-7 form-field">
                  <select className="cls-form-control form-field">
                    {users.map((user) => (
                      <option value={user.id}>
                        {user.firstName} {user.lastName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="inputPassword"
                  className="col-sm-5 col-form-label form-box-light"
                >
                  Remarks
                </label>
                <div className="col-sm-7 form-field-light">
                  <input
                    type="text"
                    className="cls-form-control form-field-light"
                    id="inputZip"
                    value={remarks}
                    name="remarks"
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="inputPassword"
                  className="col-sm-5 col-form-label form-box"
                >
                  Comment
                </label>
                <div className="col-sm-7 form-field">
                  <input
                    type="text"
                    className="cls-form-control form-field"
                    id="inputCity"
                    value={comment}
                    name="comment"
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
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
