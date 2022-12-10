import React from "react";
import "./Loginpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FileLock2Fill } from "react-bootstrap-icons";
import { useLocalState } from "../util/useLocalStorage";
import { useState } from "react";
import swal from "sweetalert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJwt] = useLocalState("", "jwt");

  function sendLoginRequest() {
    const reqBody = {
      email: email, // lucas@wp.pl
      password: password, // 1234
    };

    fetch("/api/auth/login", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(reqBody),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200)
          return Promise.all([response.json(), response.headers]);
        else return Promise.reject("Invalid credentials");
      })
      .then(([body, headers]) => {
        setJwt(headers.get("authorization"));
        window.location.href = "/dashboard";
      })
      .catch((message) => {
        swal("Error", message, "error");
      });
  }

  return (
    <div className="login-dark">
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
