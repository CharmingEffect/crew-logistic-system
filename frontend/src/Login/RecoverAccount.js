import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UnlockFill, ArrowLeft } from "react-bootstrap-icons";
import { useState } from "react";
import swal from "sweetalert";
import Snowfall from 'react-snowfall';
import "./Loginpage.css";

const RecoverAccount = () => {
  const [email, setEmail] = useState("");

  function handleChangePassword() {

    if (email === "") {
      swal({
        title: "Error!",
        text: "Please enter your email.",
        icon: "error",
        button: false,
        timer: 1000,
      });
      return;
    }

    if (email.length < 3) {
      swal({
        title: "Error!",
        text: "Email has to be longer than 3 characters.",
        icon: "error",
        button: false,
        timer: 1000,
      });
      return;

    }


    const reqBody = {
      email: email,
    };

    fetch("api/common/recoverAccount", {
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
            text: "Password changed successfully. Login to your email to get your new password.",
            icon: "success",
          }).then(function() {
            window.location = "/";
        });
          // Redirect user to the appropriate page
        } 

        else if (response.status === 404) {
          return Promise.reject("Email not found.");
        }
        
        else {
          return Promise.reject("Somthing went wrong.");
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
          <UnlockFill/>
        </div>
        <p className="text-center">Recover Account</p>
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
        <div className="form-group text-center">
          <button
            className="btn btn-primary btn-block"
            type="button"
            onClick={() => handleChangePassword()}
          >
            Recover
          </button>
     
        </div>
      </form>
    </div>
  );
};

export default RecoverAccount;
