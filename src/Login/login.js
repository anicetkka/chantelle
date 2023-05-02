import React, { useMemo, useEffect, useState } from "react";
import { createBrowserRouter, Route, Routes, Link, NavLink, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import logo from "../Img/logo.png";
import loginimage from "../Img/login-page.png";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
const Login = () => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getToken = async () => {
    const user = {
      username: email,
      password: password,
    };
    const auth_response = await axios.post(
      "https://chantelletest.centricsoftware.com/csi-requesthandler/api/v2/session",
      user
    );
    console.log(auth_response.data);
  };

  return (
    <div>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol sm="6">
            <div className="d-flex flex-row ps-5 pt-5">
              <MDBIcon
                fas
                icon="crow fa-3x me-3"
                style={{ color: "#709085" }}
              />
              <span className="h1 fw-bold mb-0">
                <img className="logoimmo" src={logo} alt="Logo" />
              </span>
            </div>

            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              <h3
                className="fw-normal mb-3 ps-5 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Log in
              </h3>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Email address"
                onChange={(e) => setEmail(e.target.value)}
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                id="formControlLg"
                type="password"
                size="lg"
              />
              <Link to="/home">
                <MDBBtn
                  className="mb-4 px-5 mx-5 w-100"
                  color="info"
                  size="lg"
                  onClick={() => getToken()}
                >
                  Login
                </MDBBtn>
              </Link>
            </div>
          </MDBCol>

          <MDBCol sm="6" className="d-none d-sm-block px-0">
            <img
              src={loginimage}
              alt="Login image"
              className="Login_image w-100 vh-100"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Login;
