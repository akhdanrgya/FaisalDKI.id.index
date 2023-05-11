import { useState } from "react";
import Headers from "../Components/Headers";
import Label from "../Components/admin/label";

const Admin = () => {
  console.log("re-rendered");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <>
      {/* Navbar Section */}

      {/* End Of Nav */}

      {/* Login */}

      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card border-0 shadow rounded-3 my-5">
              <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-light fs-5">
                  Sign In
                </h5>
                <form onSubmit={handleSubmit}>
                  <div class="form-floating mb-3">
                    <label for="floatingInput">Username</label>
                    <Label placeholder="Username" name="username"/>
                  </div>
                  <div class="form-floating mb-3">
                    <label for="floatingPassword">Password</label>
                    <Label placeholder="Password" name="password" type="password"/>
                  </div>
                  <div class="d-grid">
                    <button
                      class="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
