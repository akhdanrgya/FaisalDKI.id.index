import React from "react";

class Tentang extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section class="welcome_area p_120" id="tentang">
        <div class="container">
          <div class="row welcome_inner">
            <div class="col-lg-6">
              <div class="welcome_text">
                <h4>Tentang Faisal</h4>
                <p>
                  Tumbuh dan besar di lingkungan pasar membuatnya memiliki
                  pengalaman dan rekam jejak yang solid dalam berbagai sektor
                  usaha. Serta memahami betul tantangan yang dihadapi oleh
                  masyarakat terutama UMKM dan Pedagang Kecil.
                  <br></br>
                  <br></br>
                  Ahmad Faisal akan fokus pada solusi untuk masalah-masalah
                  penting yang dihadapi oleh masyarakat di daerah pemilihan
                  terutama mengenai kebijakan publik yang adil dan transparan.
                  <br></br>
                  <br></br>
                  Selain itu Ahmad Faisal juga akan memperjuangkan peningkatan
                  kesejahteraan dan pertumbuhan ekonomi bagi msayarakat DKI
                  Jakarta
                </p>
                <div class="row">
                  <div class="col-md-4">
                    <div class="wel_item">
                      <i class="lnr lnr-users"></i>
                      <h4>8327</h4>
                      <p>Total Volunteers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <img src="img/banner/2.png" alt="" class="gambar" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Tentang;
