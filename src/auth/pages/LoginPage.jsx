import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("User Name");
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("12345");
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();
  const onLoging = (e) => {
    e.preventDefault();
    login(name, email, password, remember);

    const lastPath = localStorage.getItem("lastPath") || "/";
    localStorage.getItem("lastPath") &&
      navigate(lastPath, {
        replace: true,
      });
  };

  return (
    <div className="container" style={{ height: "100%" }}>
      <div className="row align-items-center" style={{ height: "100%" }}>
        <div className="col">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">Login</h5>
              <form onSubmit={onLoging}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember"
                    value={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="rembember">
                    Remember Me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
