import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Relawan = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div class="container">
		<div class="main_title">
        <h2>Relawan</h2>
        <p>
          Mari bergabung menjadi relawan dan berjuang bersama berikan perubahan
          positif
        </p>
		</div>
      </div>
      <div className="testi_inner">
        <Carousel responsive={responsive} class="testi_slider">
			<div className="item">
          <div className="item_item">Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
			</div>
        </Carousel>
        ;
      </div>
    </>
  );
};

export default Relawan;

{
  /* <section class="testimonials_area p_120" id="relawan">
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
</section> */
}
