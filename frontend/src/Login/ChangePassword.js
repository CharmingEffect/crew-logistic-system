import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FileLock2Fill, ArrowLeft } from "react-bootstrap-icons";
import { useState } from "react";
import swal from "sweetalert";
import Snowfall from 'react-snowfall';
import "./Loginpage.css";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleChangePassword() {
    if (newPassword !== confirmPassword) {
      swal({
        title: "Error!",
        text: "New password and confirm password do not match",
        icon: "error",
        button: false,
        timer: 1000,
      });
      return;
    }

    const reqBody = {
      email: email,
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
            window.location.href = "/";
          // Redirect user to the appropriate page
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

  function goBack() {
    window.location.href = "/";
    return
   
  }

  return (
    <div className="login-dark">
      <Snowfall />
      <form method="post"> 
      <div className="go-back-arrow" onClick={() => goBack()}>
        <ArrowLeft className="go-back-arrow" size={24} />
      </div>
        <div className="illustration">
          <FileLock2Fill />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="oldPassword"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div className="form-group text-center">
          <button
            className="btn btn-primary btn-block"
            type="button"
            onClick={() => handleChangePassword()}
          >
            Change Password
          </button>
     
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
