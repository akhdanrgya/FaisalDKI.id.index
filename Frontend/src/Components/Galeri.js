import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Galeri = () => {
  const [galeri, setGaleri] = useState([]);

  useEffect(() => {
    getGaleri();
  }, []);

  const getGaleri = async () => {
    const response = await axios.get("http://localhost:5500/galeri");
    setGaleri(response.data);
  };

  return (
    <>
      <section class="projects_area p_120" id="galeri">
        <div class="container">
          <div class="main_title">
            <h2>Galeri</h2>
            <p>Perjalanan kami memperjuangkan aspirasi Anda</p>
          </div>
          <div class="projects_fillter"></div>
          <div class="projects_inner row">
            {galeri.map((galeri) => (
              <div class="col-lg-4 col-sm-8 brand web">
                <div class="projects_item">
                  <img class="img-fluid" src={galeri.url} alt="" />
                  <div class="projects_text"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Galeri;
