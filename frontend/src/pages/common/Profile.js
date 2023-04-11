import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import Header from "../../components/Header";
import { useLocalState } from "../../util/useLocalStorage";
import { useLoggedInUser } from "../../util/useUserData";
import AvatarUploader from "../../util/AvatarUploader";
import { Button } from "reactstrap";

const Profile = () => {
  const loggedUser = useLoggedInUser([]);
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [userToUpdate, setUserToUpdate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
