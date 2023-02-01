import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import Nav from "../../components/Nav";
import { useEffect } from "react";
import Header from "../../components/Header";
import { useLocalState } from "../../util/useLocalStorage";

const Profile = () => {
  const [jwt, setJwt] = useLocalState("", "jwt");

  useEffect(() => {
    console.log("JWT Value is: " + jwt);
  }, [jwt]);

  return (
    <>
      <div className="nav_bg_color" id="wrapper">
        <Nav />
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
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Admin"
                          className="rounded-circle"
                          width="150"
                        ></img>
                        <div className="mt-3">
                          <h4>John Doe</h4>
                          <p className="text-secondary mb-1">
                            Full Stack Developer
                          </p>
                          <p className="text-muted font-size-sm">
                            Bay Area, San Francisco, CA
                          </p>
                          <button className="btn btn-primary">Follow</button>
                          <button className="btn btn-outline-primary">
                            Message
                          </button>
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
                  <div className="card mb-3">
                    <div>
                      <div className="row">
                        <div className="col-sm-3 form-box py-2">
                          <h6>Full Name</h6>
                        </div>
                        <div className="col-sm-9 form-field align-self-center py-2">
                          Kenneth Valdez
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-3 form-box-light py-2">
                          <h6>Email</h6>
                        </div>
                        <div className="col-sm-9 form-field-light  align-self-center py-2 ">
                          fip@jukmuh.al
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-3 form-box py-2">
                          <h6>Phone</h6>
                        </div>
                        <div className="col-sm-9">(239) 816-9029</div>
                      </div>
                      <hr></hr>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Mobile</h6>
                        </div>
                        <div className="col-sm-9">(320) 380-4539</div>
                      </div>
                      <hr></hr>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          Bay Area, San Francisco, CA
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
      </div>
    </>
  );
};

export default Profile;
