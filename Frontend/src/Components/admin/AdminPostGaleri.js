import React from "react";
import "../../Pages/admin.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../scenes/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import { Link } from "react-router-dom";

const AdminPostGaleri = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [galeri, setGaleri] = useState([]);

  useEffect(() => {
    getGaleri();
  }, []);

  const getGaleri = async () => {
    const response = await axios.get("http://localhost:5000/galeri");
    setGaleri(response.data);
  };

  const deleteGaleri = async (galeriId) => {
    try {
      await axios.delete(`http://localhost:5000/galeri/${galeriId}`);
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
