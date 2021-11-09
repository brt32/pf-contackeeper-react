import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <h1>
          Account <span className="text-primary">Login</span>
        </h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-primary btn-block"
          />
        </form>
        <div className="below-form">
          <h3>Firstly, register your account - completely for free! </h3>
          <p>Then back here and login. Magic will happen!</p>
        </div>
      </div>
      <div className="second-grid">
        <h1>Welcome To Contact Keeper!</h1>
        <h3>Keep your contact here, safely...</h3>
        <p>Below is a random picture chosen specially for You!</p>
        <div className="img"></div>
        {/* <img src="https://source.unsplash.com/random" /> */}
      </div>
      <div className="app-function">
        <h2>Application Functions:</h2>
        <ul>
          <li>******************************</li>
          <li>+ CRUD Backend Routes</li>
          <li>+ MongoDB database</li>
          <li>+ Hashed Passwords</li>
          <li>+ Authentication</li>
          <li>+ JWT Token</li>
          <li>+ Auth Middleware, Protecting Routes</li>
          <li>+ Context API, Global State</li>
          <li>+ Contacts Filter</li>
          <li>+ Basic ADD/DELETE Animation</li>
          <li>+ Hooks</li>
          <li>+ Custom Alerts</li>
          <li>+ Private Routes</li>
          <li>******************************</li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
