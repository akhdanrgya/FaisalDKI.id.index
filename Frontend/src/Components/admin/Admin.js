import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      });
      navigate("/adminfaisal/dashboard");
      console.log("login berhasil")
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      {/* Navbar Section */}

      {/* End Of Nav */}

      {/* Login */}
      <div class="p_120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
              <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                  <div class="row">
                    <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div class="col-lg-6">
                      <div class="p-5">
                        <div class="text-center">
                          <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                        </div>
                        <form class="user" onSubmit={Auth}>
                          <div class="form-group">
                            <p class="text-center">{msg}</p>
                            <input
                              class="form-control form-control-user"
                              name="email"
                              type="email"
                              placeholder="Email or Username"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div class="form-group">
                            <input
                              class="form-control form-control-user"
                              name="password"
                              type="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>

                          <div class="form-group">
                            <div class="custom-control custom-checkbox small">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customCheck"
                              />
                              <label
                                class="custom-control-label"
                                for="customCheck"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <button
                            class="btn btn-primary btn-user btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </form>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
