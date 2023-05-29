import React, { useState, useEffect } from "react";
import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import KabarU from "./KabarTerupdate";
import Footer from "../Footer";
import HeaderB from "./navbarBerita";

const News = () => {
  const [berita, setBerita] = useState(null);
  const { id } = useParams();
  const port = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    getBerita();
  }, [id]);

  const getBerita = async () => {
    try {
      const response = await axios.get(`${port}/berita/${id}`);
      const data = response.data;
      setBerita(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* nav */}
      <HeaderB />
      {/* end of nav */}

      {/* header */}
      <section class="banner_area">
        <div class="banner_inner d-flex align-items-center">
          <div
            class="overlay bg-parallax"
            data-stellar-ratio="0.9"
            data-stellar-vertical-offset="0"
            data-background=""
          ></div>
          <div class="container">
            <div class="banner_content text-center">
              <h2>Kabar</h2>
              <div class="page_link">
                <a href="/">Home</a>
                <a>Kabar</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of header */}
      {berita && (
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div class="mb-6 main_title">
                <h2>{berita.title}</h2>
              </div>
              <div className="mb-4">
                <p className="text-muted">
                  Oleh <a href="">Admin</a> | 16 Mei 2023
                </p>
              </div>
              <div className="mb-6">
                <img
                  src={berita.url}
                  alt="Gambar Artikel"
                  className="img-fluid"
                />
              </div>
              <div className="mb-6 lead">
                {HTMLReactParser(berita.artikel)}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* kabar terupdate */}
      <KabarU />

      {/* footer */}
      <Footer />
    </>
  );
};

export default News;
