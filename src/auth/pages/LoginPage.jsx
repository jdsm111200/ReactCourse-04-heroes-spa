import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const onLoging = (e) => {
    e.preventDefault();
    navigate("/marvel", {
      replace: true,
    });
    console.log("Login");
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
                    Email address
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
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
