import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddGaleri = () => {
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

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
      await axios.post("http://localhost:5000/galeri", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/post/galeri");
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
