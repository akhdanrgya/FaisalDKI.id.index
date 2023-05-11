import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// memanggil data dri backend
const News = () => {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    getBerita();
  }, []);

  const getBerita = async () => {
    const response = await axios.get("http://localhost:5000/berita");
    setBerita(response.data);
  };
// -------------------------------------------
  return (
    <>
      {/* data dari data base */}
      {berita.map((berita) => (
        <section class="portfolio_details_area p_120">
          <div class="container">
            <div class="portfolio_details_inner">
              <div class="row foto_berita">
                <div class="col-md-6">
                  <div class="left_img  ">
                    <img
                      class="img-fluid"
                      // dri data base
                      src={berita.url}
                      // -------------
                      alt=""
                      />
                  </div>
                </div>
              </div>
              <div class="portfolio_right_text">
                {/* ini juga dri data base */}
                <h4>{berita.title}</h4>
                <p> {berita.artikel}</p>
                {/* ----------------- */}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};
// end off data dari data base

export default News;
