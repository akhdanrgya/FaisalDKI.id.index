
import Footer from "./Footer";
import React from "react";
import KabarU from "./berita/KabarTerupdate";

const NewsArticle = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div class="mb-6 main_title">
              <h2>
                Nostalgia Medali Emas Terakhir Timnas Indonesia di SEA Games
                1991
              </h2>
            </div>
            <div className="mb-4">
              <p className="text-muted">
                Oleh <a href="">Admin</a> | 16 Mei 2023
              </p>
            </div>
            <div className="mb-6">
              <img
                src="img/berita/4.jpg"
                alt="Gambar Artikel"
                className="img-fluid"
              />
            </div>
            <div className="mb-6">
              <p className="lead">
                Timnas Indonesia meraih medali emas terakhir di SEA Games pada
                tahun 1991. Pada tahun tersebut, timnas berhasil mengalahkan
                tim-tim kuat seperti Malaysia dan Thailand.
              </p>
              <p>
                Pada pertandingan final SEA Games 1991, Timnas Indonesia
                berhadapan dengan Timnas Malaysia. Pertandingan berlangsung
                sengit dan penuh tensi. Timnas Indonesia berhasil mencetak gol
                kemenangan di menit akhir pertandingan melalui tendangan bebas
                yang dieksekusi dengan sempurna oleh pemain andalan, Bambang
                Pamungkas.
              </p>
              <p>
                Kemenangan ini menjadi momen bersejarah bagi Timnas Indonesia.
                Sejak saat itu, Timnas belum mampu meraih medali emas lagi dalam
                ajang SEA Games.
              </p>
              <p>
                Pelatih timnas saat itu, Sutan Harhara, mengatakan bahwa
                kemenangan ini merupakan hasil dari kerja keras dan dedikasi
                para pemain. Mereka berhasil mengatasi tekanan dan memberikan
                performa terbaik dalam pertandingan.
              </p>
              <p>
                Meski telah berlalu lebih dari 30 tahun, medali emas ini masih
                menjadi inspirasi bagi generasi penerus sepak bola Indonesia.
                Diharapkan Timnas Indonesia dapat kembali meraih prestasi
                gemilang di kancah internasional dan membanggakan seluruh rakyat
                Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <KabarU/>
      <Footer />
    </>
  );
};

export default NewsArticle;
