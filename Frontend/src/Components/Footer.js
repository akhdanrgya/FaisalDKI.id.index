import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer class="footer_area p_120">
        <div class="container">
          <div class="row footer_inner">
            <div class="col-lg-5 col-sm-6">
              <aside class="f_widget ab_widget">
                <div class="f_title">
                  <h3>Tentang</h3>
                </div>
                <p>
                  Do you want to be even more successful? Learn to love learning
                  and growth. The more effort you put into improving your
                  skills,
                </p>
                <p>
                  Copyright ©2023 All rights reserved All rights reserved | This
                  website is made with by{" "}
                  <a
                    href="https://www.instagram.com/akhdanrgya"
                    target="_blank"
                  >
                    Akhdanrgya
                  </a>
                </p>
              </aside>
            </div>
            <div class="col-lg-5 col-sm-6" id="kontak">
              <aside class="f_widget news_widget">
                <div class="f_title">
                  <h3>Kabar</h3>
                </div>
                <p>Tetap update untuk kabar kabar terkini</p>
              </aside>
            </div>
            <div class="col-lg-2">
              <aside class="f_widget social_widget">
                <div class="f_title">
                  <h3>Kontak kami</h3>
                </div>
                <p>Media Social</p>
                <ul class="list">
                  <li>
                    <a href="#">
                    <i class="fa-brands fa-tiktok"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/ahmadfaisaldki/">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
                <p>Whatsapp : 0123456789</p>
                <p>telepon : 0123456789</p>
              </aside>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
