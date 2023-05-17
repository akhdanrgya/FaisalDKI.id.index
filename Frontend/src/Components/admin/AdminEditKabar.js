import React from "react";
import axios from "axios";
import JoditEditor from "jodit-react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";

const EditBerita = () => {
  const editor = useRef(null);
  
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getBeritaById();
  }, []);

  const getBeritaById = async () => {
    const response = await axios.get(`http://localhost:5000/berita/${id}`);
    setTitle(response.data.title);
    setFile(response.data.image);
    setPreview(response.data.url);
    setContent(response.data.artikel);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateBerita = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("artikel", content);
    try {
      await axios.patch(`http://localhost:5000/Berita/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/post/kabar");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns m-5">
      <div className="column is-half">
        <form onSubmit={updateBerita}>
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
  );
};

export default EditBerita;
