import React from "react";
import "./Loginpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FileLock2Fill } from "react-bootstrap-icons";
import { useLocalState } from "../util/useLocalStorage";
import { useState } from "react";
import swal from "sweetalert";
import BASE_URL from "../util/baseUrl";
import Snowfall from 'react-snowfall';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJwt] = useLocalState("", "jwt");

  function sendLoginRequest() {
    const reqBody = {
      email: email, // lucas@wp.pl
      password: password, // 1234
      isAccountEnabled: null,
    };

    fetch("/api/auth/login", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(reqBody),
    })
      .then((response) => {
        // console.log(response.body);

        if (response.status === 200)
          return Promise.all([response.json(), response.headers]);
        else
          return Promise.reject("Invalid credentials or account not enabled");
      })
      .then(([body, headers]) => {
        console.log(body);
        setJwt(headers.get("authorization"));
        //console.log("gdzue to jest" + headers.get("authorization"));
        if (body.role === "ADMIN") {
          window.location.href = "/dashboard-admin";
        }
        if (body.role === "CREW_MEMBER") {
          window.location.href = "/dashboard-crew";
        }
        if (body.enabled === false) {
          swal({
            title: "Error!",
            text: "Your account is disabled, please contact your administrator",
            icon: "error",
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
  }

  return (
    <div className="login-dark">
       <Snowfall />
      <form method="post">
        <h2 className="sr-only text-center">Pinnacle Login</h2>
        <div className="illustration">
          <FileLock2Fill />
        </div>
        <div className="form-group">
          {/* binding the data to the input from fields */}
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
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="form-group text-center">
          <button
            className="btn btn-primary btn-block"
            type="button"
            onClick={() => sendLoginRequest()}
          >
            Log In
          </button>
        </div>
        <a href="#" className="forgot">
          <br></br>
          Forgot your email or password?
        </a>
      </form>
    </div>
  );
};

export default Login;
