import React from "react";
import "../../Pages/admin.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../scenes/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"

const AdminPostGaleri = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [galeri, setGaleri] = useState([]);
  const navigate = useNavigate("")
  const [setUsers] = useState([]);
  const [expire, setExpire] = useState('');
  const [name, setName] = useState('');
  const [token, setToken] = useState("");
  useEffect(() => {
    refreshToken();
  }, []);
  
  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5500/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
      } catch (error) {
        if (error.response) {
          navigate('/adminfaisal')
        }
      }
    }

const axiosJWT = axios.create();

axiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get('http://localhost:5500/token');
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

const getUsers = async () => {
  const response = await axiosJWT.get('http://localhost:5500/users', {
      headers: {
          Authorization: `Bearer ${token}`
      }
  });
  setUsers(response.data);
}

  useEffect(() => {
    getGaleri();
  }, []);

  const getGaleri = async () => {
    const response = await axios.get("http://localhost:5500/galeri");
    setGaleri(response.data);
  };

  const deleteGaleri = async (galeriId) => {
    try {
      await axios.delete(`http://localhost:5500/galeri/${galeriId}`);
      getGaleri();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <div className="app">
        <Sidebar />
        <div className="container mt-5">
          <Link
            to="/post/galeri/upload"
            className="button is-success mt-5 ml-5"
          >
            Upload
          </Link>
          <div className="columns is-multiline ml-5 mt-5 " style={{overflowY: "scroll", overflowX: "hidden"}}>
            {galeri.map((galeri) => (
              <div className="column is-one-quarter">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src={galeri.url} alt="Placeholder image" />
                    </figure>
                  </div>
                  <footer className="card-footer">
                    <a
                      className="card-footer-item"
                      onClick={() => deleteGaleri(galeri.id)}
                    >
                      Delete
                    </a>
                  </footer>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ColorModeContext.Provider>
  );
};

export default AdminPostGaleri;

{
  /* <footer className="card-footer">
                    <a
                      className="card-footer-item"
                      onClick={() => deleteGaleri(galeri.id)}
                    >
                      Delete
                    </a>
                  </footer>

<div className="container mt-5">
<Link to="/post/galeri/upload" className="button is-success mt-5 ml-5">
  Upload
</Link>
<div className="columns is-multiline mt-5 ml-5">
{galeri.map((galeri) => (
  <div className="columns is-half">
    <div class="card m-5">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={galeri.url} alt="Placeholder image" />
        </figure>
      </div>
      <footer className="card-footer">
        <a
          className="card-footer-item"
          onClick={() => deleteGaleri(galeri.id)}
        >
          Delete
        </a>
      </footer>
    </div>
  </div>
))}
</div>
</div> */
}
