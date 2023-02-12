import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import Nav from "../../components/Nav";
import { useEffect } from "react";
import Header from "../../components/Header";
import { useLocalState } from "../../util/useLocalStorage";
import { FindAddressById, useLoggedInUser } from "../../util/useUserData";
import AvatarUploader from "../../util/AvatarUploader";

const Profile = () => {
  const loggedUser = useLoggedInUser([]);

  return (
    <>
      <div id="page-wrapper" className="gray-bg">
        <div className="row border-bottom">
          <Header />
        </div>
        <div className="wrapper wrapper-content animated fadeInRight"></div>
        <div className="">
          {" "}
          <i
            className="fa fa-user fa-3x text-black d-inline-block m-3"
            aria-hidden="true"
          ></i>
          <h1 className="display-5 text-black d-inline-block">Profile</h1>
          <div className="d-flex justify-content-end d-inline-block"></div>
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
                          {loggedUser.firstName} {loggedUser.lastName}
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
                      <span className="text-secondary">bootdey</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <span className="text-secondary">@bootdey</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <span className="text-secondary">bootdey</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <span className="text-secondary">bootdey</span>
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
                        <p className="text-muted mb-0">
                          {loggedUser.firstName} {loggedUser.lastName}
                        </p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{loggedUser.email}</p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Phone</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {loggedUser.phoneNumber}
                        </p>
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
                        <a
                          className="btn btn-info "
                          target="__blank"
                          href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                        >
                          Edit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row gutters-sm">
                  <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h6 className="d-flex align-items-center mb-3">
                          <i className="material-icons text-info mr-2">
                            assignment
                          </i>
                          Project Status
                        </h6>
                        <small>Web Design</small>
                        <div className="progress mb-3">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>Website Markup</small>
                        <div className="progress mb-3">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="72"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>One Page</small>
                        <div className="progress mb-3">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="89"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>Mobile Template</small>
                        <div className="progress mb-3">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="55"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>Backend API</small>
                        <div className="progress mb-3">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="66"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h6 className="d-flex align-items-center mb-3">
                          <i className="material-icons text-info mr-2">
                            assignment
                          </i>
                          Project Status
                        </h6>
                        <small>Web Design</small>
                        <div className="progress mb-3">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>Website Markup</small>
                        <div className="progress mb-3">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="72"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>One Page</small>
                        <div className="progress mb-3">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="89"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>Mobile Template</small>
                        <div className="progress mb-3">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="55"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>Backend API</small>
                        <div className="progress mb-3">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="66"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
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
