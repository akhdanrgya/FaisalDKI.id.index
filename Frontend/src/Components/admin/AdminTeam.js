import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import Sidebar from "../../scenes/global/Sidebar";
import Team from "../../scenes/team";
import "../../Pages/admin.css"
import { useNavigate } from "react-router-dom";

const AdminTeam = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const navigate = useNavigate("")
  const [setUsers] = useState([]);
  const [expire, setExpire] = useState('');
  const [name, setName] = useState('');
  const [token, setToken] = useState("");
  const port = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    refreshToken();
  }, []);
  
  const refreshToken = async () => {
    try {
      const response = await axios.get(`${port}/token`);
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
        const response = await axios.get(`${port}/token`);
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
  const response = await axiosJWT.get(`${port}users`, {
      headers: {
          Authorization: `Bearer ${token}`
      }
  });
  setUsers(response.data);
}

  return (
    <ColorModeContext.Provider value={colorMode}>

        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
              <Team/>
          </main>
        </div>

    </ColorModeContext.Provider>
  )
};

export default AdminTeam;
