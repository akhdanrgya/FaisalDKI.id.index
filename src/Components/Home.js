import React from "react";

class Home extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section class="home_banner_area" id="home">
            <div class="banner_inner">
				<div class="container">
					<div class="row">
						<div class="col-lg-6">
							<img src="img/banner/home-left-2.png" alt="" class="gambar1"/>
						</div>
						<div class="col-lg-6">
							<div class="banner_content">
								<h2>Ahmad Faisal</h2>
								<p>Berkomitmen untuk membangun transparansi dan akuntabilitas dalam kerja legislatif.<br></br>
									Mari memperjuangkan kebijakan publik yang adil dan transparan.</p>
								<a class="banner_btn" href="#tentang">Tentang</a>
							</div>
						</div>
					</div>
				</div>
            </div>
        </section>
        )
    }
}

export default Home