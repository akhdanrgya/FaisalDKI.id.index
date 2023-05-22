import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode"

const AddGaleri = () => {
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
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

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };
  const saveImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      await axios.post("http://localhost:5500/galeri", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/adminfaisal/post/galeri");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={saveImage}>
          <div className="field">
            <label className="label">Image</label>
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
              </div>
            </div>
          </div>
          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}

          <div className="field">
            <div className="control">
              <button className="button is-success" type="submit">
                Save
              </button>
            </div>
          </div>
            <p>Jangan upload gambar yang sama</p>
        </form>
      </div>
    </div>
  );
};

export default AddGaleri;

//   const saveImage = async (e) => {
//     e.preventDefault();
//     const formData = new formData();
//     formData.append("file", file);

//     try {
//       await axios.post("http://localhost:5000/galeri", formData, {
//         headers: {
//           "Content-Type": "multypart/form-data",
//         },
//       });
//       navigate("/post/galeri");
//     } catch (error) {
//       console.log(error);
//     }
//   };
