import React from "react";

class ProgramKerja extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="programkerja p_120" id="programkerja">
        <div class="container">
          <div class="main_title">
            <h2>Program Kerja</h2>
            <p>Untuk Masyarakat yang Lebih Maju dan Sejahtera</p>
          </div>
          <div class="feature_inner row">
            <div class="col-lg-6 col-md-8">
              <div class="feature_item">
                <i class="lnr lnr-chart-bars text-center"></i>
                <h4 class="text-center">Program Ekonomi</h4>
                <p class="text-center">
                  Kami akan memperjuangkan kebijakan yang mendorong pertumbuhan
                  ekonomi dengan meningkatkan UMKM serta menciptakan lapangan
                  kerja yang lebih banyak dan adil.
                </p>
                <br></br>
                <br></br>
              </div>
            </div>
            <div class="col-lg-6 col-md-8">
              <div class="feature_item">
                <i class="lnr lnr-graduation-hat text-center"></i>
                <h4 class="text-center">Program Pendidikan</h4>
                <p class="text-center">
                  Kami akan berjuang untuk meningkatkan sarana dan prasarana
                  pendidikan, serta meningkatkan kualitas pendidikan dengan
                  mengembangkan kurikulum yang inovatif.
                </p>
                <br></br>
                <br></br>
              </div>
            </div>
            <div class="col-lg-6 col-md-8">
              <div class="feature_item">
                <i class="lnr lnr-apartment text-center"></i>
                <h4 class="text-center">Program Infrastruktur</h4>
                <p class="text-center">
                  Kami akan berjuang untuk meningkatkan aksesibilitas dan
                  efisiensi infrastruktur yang ada, serta mengembangkan
                  infrastruktur baru yang mendukung pertumbuhan ekonomi dan
                  kesejahteraan masyarakat.
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-8">
              <div class="feature_item">
                <i class="lnr lnr-heart-pulse text-center"></i>
                <h4 class="text-center">Program Kesehatan</h4>
                <p class="text-center">
                  Kami juga akan memperjuangkan peningkatan kesehatan masyarakat
                  dengan meningkatkan akses dan kualitas pelayanan kesehatan,
                  peningkatan kesehatan ibu dan anak, serta pencegahan dan
                  pengendalian penyakit menular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgramKerja;
