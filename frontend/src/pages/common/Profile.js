import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import Header from "../../components/Header";
import { useLocalState } from "../../util/useLocalStorage";
import { useLoggedInUser } from "../../util/useUserData";
import AvatarUploader from "../../util/AvatarUploader";
import { Button } from "reactstrap";
import { FileLock2Fill, ArrowLeft } from "react-bootstrap-icons";
import swal from "sweetalert";
import Snowfall from 'react-snowfall';


const Profile = () => {
  const loggedUser = useLoggedInUser([]);
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [userToUpdate, setUserToUpdate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const [editMode, setEditMode] = useState(false);

  const { firstName, lastName, email, phoneNumber } = userToUpdate;

  const onInputChange = (e) => {
    setUserToUpdate({ ...userToUpdate, [e.target.name]: e.target.value });
  };

  function updateUser() {
    console.log("update user");

    fetch(`/api/admin/updateUser/${loggedUser.id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userToUpdate),
    }).then(() => {
      console.log("user updated");
      window.location = "/";
      setJwt("");
    });
  }



  function handleChangePassword() {

    if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
      swal({
        title: "Oops!",
        text: "Please fill in all fields",
        icon: "error",
        button: false,
        timer: 1000,
      });
      return;
    }


    if (newPassword !== confirmPassword) {
      swal({
        title: "Oops!",
        text: "New password and confirm password do not match",
        icon: "error",
        button: false,
        timer: 1000,
      });
      return;
    }

    if (oldPassword === newPassword) {
      swal({
        title: "Oops!",
        text: "New password and old password cannot be the same",
        icon: "error",
        button: false,
        timer: 1000,
      });
      return;
    }


    if (newPassword.length < 4) {
      swal({
        title: "Oops!",
        text: "New password must be at least 4 characters long",
        icon: "error",
        button: false,
        timer: 1000,
      });
      return;
    }


    const reqBody = {
      email: loggedUser.email,
      currentPassword: oldPassword,
      newPassword: newPassword,
    };

    fetch("/api/common/changePassword", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(reqBody),
    })
      .then((response) => {
        if (response.status === 200) {
          swal({
            title: "Success!",
            text: "Password changed successfully",
            icon: "success",
            button: false,
            timer: 1000,
          }); 
        } else {
          return Promise.reject("Failed to change password");
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
  }

  return (
    <>
      <div id="page-wrapper" className="gray-bg">
        <div className="row border-bottom">
          <Header />
        </div>
        <div className="wrapper wrapper-content animated fadeInRight"></div>
        <div className="mb-4">
          <h1 className="sophisticated-header display-5 text-black mr-4">
            <i className="fa fa-user text-black m-3" aria-hidden="true"></i>
            Profile
          </h1>
        </div>

        <div className="container-fluid">
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={`data:image/png;base64,${loggedUser.avatar}`}
                        alt="avatar"
                        className="rounded-circle"
                        width="150"
                      ></img>
                      <div className="mt-3">
                        <h4 className="text-black">
                          {" "}
                          {loggedUser.firstName} {loggedUser.lastName} <br></br>{" "}
                        </h4>
                        <p className="text-secondary mb-1"></p>
                        <p className="text-muted font-size-sm">
                          {loggedUser.role}
                        </p>

                        {AvatarUploader()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mt-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <span className="text-secondary"></span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <span className="text-secondary">
                        Upladed Documents:{" "}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <span className="text-secondary">Passport</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <span className="text-secondary">Driving Licence</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <span className="text-secondary">Etc</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                      </div>
                      <div className="col-sm-9">
                        {editMode ? (
                          <>
                            <div>
                              <input
                                name="firstName"
                                onChange={(e) => onInputChange(e)}
                                value={firstName}
                              />

                              <input
                                className="ml-2"
                                name="lastName"
                                onChange={(e) => onInputChange(e)}
                                value={lastName}
                              />

                            </div>
                          </>
                        ) : (
                          <p className="text-muted mb-0">
                            {loggedUser.firstName} {loggedUser.lastName}
                          </p>
                        )}
                      </div>

                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        {editMode ? (
                          <input
                            name="email"
                            onChange={(e) => onInputChange(e)}
                            value={email}
                          />
                        ) : (
                          <p className="text-muted mb-0">{loggedUser.email}</p>
                        )}
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Phone</p>
                      </div>
                      <div className="col-sm-9">
                        {editMode ? (
                          <input
                            name="phoneNumber"
                            onChange={(e) => onInputChange(e)}
                            value={loggedUser.phoneNumber}
                          />
                        ) : (
                          <p className="text-muted mb-0">
                            {loggedUser.phoneNumber}
                          </p>
                        )}
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Address</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {loggedUser.addressLine1}
                        </p>
                        <p className="text-muted mb-0">
                          {loggedUser.addressLine2}
                        </p>
                        <p className="text-muted mb-0">
                          {loggedUser.postalCode}
                        </p>
                        <p className="text-muted mb-0">{loggedUser.city}</p>
                        <p className="text-muted mb-0">{loggedUser.country}</p>
                      </div>
                    </div>
                    <hr></hr>
                    {/* Password */}
               

                    <div className="row">
                      <div className="col-sm-12">
                        {editMode ? (
                          <>
                            <Button
                              onClick={updateUser}
                              className="button-color"
                            >
                              Save
                            </Button>
                            <Button
                              onClick={() => setEditMode(false)}
                              className="button-color"
                            >
                              Cancel
                            </Button>
                            <p>After saving, you will need to log in again.</p>
                          </>
                        ) : (
                          <Button
                            className="button-color"
                            onClick={() => setEditMode(true)}
                          >
                            Edit
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                      <form method="post">

                        <div className="form-group m-3">
                          <input
                            className="form-control"
                            type="password"
                            name="oldPassword"
                            placeholder="Old Password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                          ></input>
                        </div>
                        <div className="form-group m-3">
                          <input
                            className="form-control"
                            type="password"
                            name="newPassword"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                          ></input>
                        </div>
                        <div className="form-group m-3">
                          <input
                            className="form-control"
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm New Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          ></input>
                        </div>

                        <Button
                            className="button-color"
                            onClick={() => handleChangePassword()}
                          >
                            Change Password
                          </Button>
                    
                      </form>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
