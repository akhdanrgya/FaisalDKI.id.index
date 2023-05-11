import { useState } from "react";
import Headers from "../Components/Headers";
import Validation from "../Components/admin/ad.js";

const Admin = () => {
  const [values, setValues] = useState({
    password: " "
  });
  const [errors, setErrors] = useState({});
  function handleInput(event) {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  }

  function handleValidation(event) {
    event.preventDefault();
    setErrors(Validation(values));
  }

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
                <form onSubmit={handleValidation}>
                  <div class="form-floating mb-3">
                    <label for="floatingPassword">Password Admin</label>
                    <input
                      placeholder="Password"
                      name="password"
                      type="password"
                      class="form-control"
                      onChange={handleInput}
                    />
                    {errors.password && (
                      <p style={{ color: "red" }}>{errors.password}</p>
                    )}
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
