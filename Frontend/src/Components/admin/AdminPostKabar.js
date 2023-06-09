import React from "react";
import "../../Pages/admin.css";
import { useState, useEffect } from "react";
import Sidebar from "../../scenes/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import HTMLReactParser from "html-react-parser";
import jwt_decode from "jwt-decode"

const AdminPostKabar = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [kabar, setKabar] = useState([]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
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
  const response = await axiosJWT.get(`${port}/users`, {
      headers: {
          Authorization: `Bearer ${token}`
      }
  });
  setUsers(response.data);
}

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveBerita = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("artikel", content);

    try {
      await axios.post(`${port}/berita`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      alert("berita telah di upload silahkan refresh halaman ini");
    } catch (error) {
      console.log(error);
    }
  };

  const editor = useRef(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    getKabar();
  }, []);

  const getKabar = async () => {
    const response = await axios.get(`${port}/berita`);
    setKabar(response.data);
  };

  const deleteBerita = async (beritaId) => {
    try {
      await axios.delete(`${port}/berita/${beritaId}`);
      getKabar();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ColorModeContext.Provider value={colorMode}>
      <CssBaseline />
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <div className="container mt-5" style={{overflowY: "scroll", overflowX: "hidden"}}>
          <div className="columns m-5">
            <div className="column is-half">
              <form onSubmit={saveBerita}>
                <div className="field">
                  <label className="label">Judul</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Judul Kabar"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Kabar Image</label>
                  <div className="control">
                    <div className="file">
                      <label className="file-label">
                        <input
                          type="file"
                          className="file-input"
                          onChange={loadImage}
                        />
                        <span className="file-cta">
                          <span className="file">Chose a file...</span>
                        </span>
                      </label>
                      {preview ? (
                        <figure className="image is-128x128">
                          <img src={preview} alt="Preview Image" />
                        </figure>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Isi Kabarmu !</label>
                  <div className="control">
                    <div className="">
                      <label className="">
                        <JoditEditor
                          ref={editor}
                          value={content}
                          onChange={(newContent) => setContent(newContent)}
                        />

                        <div>{HTMLReactParser(content)}</div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-success" type="submit">
                      Upload
                    </button>
                  </div>
                </div>
                <p>Jangan upload Kabar dan foto yang sama</p>
              </form>
            </div>
          </div>
          <div className="columns is-multiline">
            {kabar.map((berita) => (
              <div className="column is-one-quarter m-5">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src={berita.url} alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48">
                          <img
                            src="../../img/logo-psi/bunga-merah.png"
                            alt="Placeholder image"
                          />
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4">{berita.title}</p>
                        <p class="subtitle is-6">@admin</p>
                      </div>
                    </div>
                    <div class="content">
                      {HTMLReactParser(berita.artikel)}
                      <br />
                      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <Link to={`/adminfaisal/post/kabar/edit/${berita.id}`} className="card-footer-item">Edit</Link>
                    <a
                      className="card-footer-item"
                      onClick={() => deleteBerita(berita.id)}
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

export default AdminPostKabar;
