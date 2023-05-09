import React from "react";

class Galeri extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section class="projects_area p_120" id="galeri">
        	<div class="container">
        		<div class="main_title">
					<h2>Galeri</h2>
					<p>Perjalanan kami memperjuangkan aspirasi Anda</p>
				</div>
        		<div class="projects_fillter">
				</div>
				<div class="projects_inner row">
					<div class="col-lg-2 col-sm-6 brand web">
						<div class="projects_item">
							<img class="img-fluid" src="img/gallery/1.jpg" alt=""/>
							<div class="projects_text">
								
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 brand work">
						<div class="projects_item">
							<img class="img-fluid" src="img/gallery/2.jpg" alt=""/>
							<div class="projects_text">
							</div>
						</div>
					</div>
				</div>
        	</div>
        </section>
        )
    }
}

export default Galeri