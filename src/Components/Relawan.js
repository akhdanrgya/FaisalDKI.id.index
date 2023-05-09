import React from "react";
import { OwlCarousel } from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Relawan = () => {
	return(
		<>
		<div class="container">
			<h2>Relawan</h2>
			<p>Mari bergabung menjadi relawan dan berjuang  bersama berikan perubahan positif</p>
		</div>
		<div className="testi_inner">
			<OwlCarousel className="testi_slider owl-theme">
				<div class="item">
				<div class="testi_item">
					<p>----</p>
					<h4>----</h4>
					<a href="#"><i class="fa fa-star"></i></a>
					<a href="#"><i class="fa fa-star"></i></a>
					<a href="#"><i class="fa fa-star"></i></a>
					<a href="#"><i class="fa fa-star"></i></a>
					<a href="#"><i class="fa fa-star-half-o"></i></a>
				</div>
				</div>
			</OwlCarousel>
		</div>
		</>
	)
}

export default Relawan

{/* <section class="testimonials_area p_120" id="relawan">
<div class="container">
	<div class="main_title">
		<h2>Relawan</h2>
		<p>Mari bergabung menjadi relawan dan berjuang  bersama berikan perubahan positif</p>
	</div>
	<div class="testi_inner">
		<div class="testi_slider owl-carousel">
			<div class="item">
				<div class="testi_item">
					<p>----</p>
					<h4>----</h4>
					<a href="#"><i class="fa fa-star"></i></a>
					<a href="#"><i class="fa fa-star"></i></a>
					<a href="#"><i class="fa fa-star"></i></a>
					<a href="#"><i class="fa fa-star"></i></a>
					<a href="#"><i class="fa fa-star-half-o"></i></a>
				</div>
			</div>
		</div>
	</div>
</div>
</section> */}