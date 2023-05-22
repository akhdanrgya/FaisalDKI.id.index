import React from "react";
import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const KabarU = () => {
  const [kabar, setKabar] = useState([]);

  useEffect(() => {
    getKabar();
  }, []);

  const getKabar = async () => {
    const response = await axios.get("http://localhost:5500/berita");
    setKabar(response.data);
  };

  return (
    <>
      <section class="latest_blog_area p_120" id="kabar">
        <div class="container">
          <div class="main_title">
            <h2>Baca kabar lainnya</h2>
          </div>
          <div class="row latest_blog_inner">
            <div class="col-lg-4">
              <div class="l_blog_item">
                <div class="l_blog_img">
                  <img class="img-fluid" src="../img/berita/1.jpg" alt="" />
                </div>
                <div class="l_blog_text">
                  <div class="date">
                    <a href="https://www.kompas.id/baca/foto/2023/05/02/psi-gelar-aksi-hardiknas">
                      2 Mei, 2023 | Oleh RONY ARIYANTO NUGROHO
                    </a>
                  </div>
                  <a href="https://www.kompas.id/baca/foto/2023/05/02/psi-gelar-aksi-hardiknas">
                    <h4>PSI Gelar Aksi Hardiknas</h4>
                  </a>
                  <p>
                    Para simpatisan dan kader Partai Solidaritas Indonesia (PSI)
                    mengikuti aksi di depan Kantor Kementerian Pendidikan dan
                    Kebudayaan Republik Indonesia, Jakarta, Selasa (2/5/2023).
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="l_blog_item">
                <div class="l_blog_img">
                  <img class="img-fluid" src="../img/berita/2.jpg" alt="" />
                </div>
                <div class="l_blog_text">
                  <div class="date">
                    <a href="https://news.republika.co.id/berita/rsxpz0484/elva-qolbina-jadi-ketua-definitif-dpw-psi-dki-gantikan-grace-natalie">
                      11 apr, 2023 | Oleh Erik Purnama Putra
                    </a>
                  </div>
                  <a href="https://news.republika.co.id/berita/rsxpz0484/elva-qolbina-jadi-ketua-definitif-dpw-psi-dki-gantikan-grace-natalie">
                    <h4>
                      Elva Qolbina Jadi Ketua Definitif DPW PSI DKI, Gantikan
                      Grace Natalie
                    </h4>
                  </a>
                  <p>
                    REPUBLIKA.CO.ID, JAKARTA -- Posisi ketua definitif Dewan
                    Pimpinan Wilayah (DPW) Partai Solidaritas Indonesia (PSI)
                    DKI Jakarta resmi dijabat oleh Elva Farhi Qolbina. Elva
                    menduduki posisi tersebut setelah sebelumnya Michael Victor
                    Sianipar keluar dari partai dan meninggalkan jabatan pada
                    Desember 2022.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="l_blog_item">
                <div class="l_blog_img">
                  <img class="img-fluid" src="../img/berita/3.jpeg" alt="" />
                </div>
                <div class="l_blog_text">
                  <div class="date">
                    <a href="https://penamas.id/tim-relawan-pcnu-jaksel-bantu-korban-gempa-cianjur/">
                      30 Nov, 2022 | By Mark Wiens
                    </a>
                  </div>
                  <a href="https://penamas.id/tim-relawan-pcnu-jaksel-bantu-korban-gempa-cianjur/">
                    <h4>Tim Relawan PCNU Jaksel Bantu Korban Gempa Cianjur</h4>
                  </a>
                  <p>
                    PENAMAS.ID, JAKARTA – Ketua Tanfidziyah Pengurus Cabang
                    Nahdlatul Ulama Jakarta Selatan (PCNU Jaksel), KH Abdul
                    Razak Alwi beserta jajaran melepas keberangkatan Tim Relawan
                    PCNU. Bertempat di halaman PCNU Jaksel, hari Selasa
                    (29/11/2022) kemarin, bantuan bagi korban gempa Cianjur itu,
                    dipimpin Ustadz Ahmad Faisal.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="l_blog_item">
                <div class="l_blog_img">
                  <img class="img-fluid" src="../img/berita/4.jpg" alt="" />
                </div>
                <div class="l_blog_text">
                  <div class="date">
                    <a href="https://jakarta.nu.or.id/jakarta-raya/pcnu-jakarta-selatan-berbagi-takjil-selama-ramadhan-1443-h-Ue1xf">
                      30 Nov, 2022 | By Mark Wiens
                    </a>
                  </div>
                  <a href="https://jakarta.nu.or.id/jakarta-raya/pcnu-jakarta-selatan-berbagi-takjil-selama-ramadhan-1443-h-Ue1xf">
                    <h4>
                      PCNU Jakarta Selatan Berbagi Takjil Selama Ramadhan 1443 H
                    </h4>
                  </a>
                  <p>
                    Pengurus harian Pengurus Cabang Nahdlatul Ulama (PCNU) Kota
                    Jakarta Selatan mengadakan program ifthar jama’i selama
                    Ramadhan 1443 H. Pengurus harian PCNU Kota Jakarta Selatan
                    bersama Banser Kebayoran Lama membagikan takjil setiap hari
                    kepada pengguna jalan di depan Kantor PCNU Jakarta Selatan,
                    Jl. KHM Syafi’i Hadzami, Kebayoran Lama Utara, Jakarta
                    Selatan.
                  </p>
                </div>
              </div>
            </div>
            {/* dari api */}
            {kabar.map((berita) => (

              <div class="col-lg-4">
              <div class="l_blog_item">
                <div class="l_blog_img">
                  <img class="img-fluid" src={berita.url} alt="" />
                </div>
                <div class="l_blog_text">
                  <div class="date">
                    <a href="">
                      30 Nov, 2022 | By Admin
                    </a>
                  </div>
                  <Link to={`/kabar/${berita.title}`}>
                    <h4>
                      {berita.title}
                    </h4>
                  </Link>
                  {HTMLReactParser(berita.artikel)}
                </div>
              </div>
            </div>
              ))}
            {/* end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default KabarU;
