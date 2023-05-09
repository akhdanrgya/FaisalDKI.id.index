import { useState } from "react";
import React from "react";

const Header2 = () =>{

    const [navbar, setNavbar] = useState(false)


    const changeColor = () => {
        if(window.scrollY >= 400) {
            setNavbar(true)
        }else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return(
        <>
        <header className={navbar ? 'header_area navbar_fixed' : 'header_area'}>
            <div class="main_menu" id="mainNav">
            	<nav class="navbar navbar-expand-lg navbar-light">
					<div class="container box_1620" >
						{/* Brand and toggle get grouped for better mobile display */}
						<a class="navbar-brand logo_h" href="index.html"><img src="img/logo-partai.png" alt=""/></a>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						{/* Collect the nav links, forms, and other content for toggling */}
						<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
							<ul class="nav navbar-nav menu_nav ml-auto">
								<li class="nav-item active"><a class="nav-link" href="#home">Home</a></li> 
								<li class="nav-item"><a class="nav-link" href="#tentang">Tentang</a></li> 
								<li class="nav-item"><a class="nav-link" href="#visi">Visi Misi</a></li>
								<li class="nav-item"><a class="nav-link" href="#programkerja">Program Kerja</a></li>
								
								<li class="nav-item submenu dropdown">
									<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Lainnya</a>
									<ul class="dropdown-menu">
										<li class="nav-item"><a class="nav-link" href="#kabar">Kabar</a></li>
										<li class="nav-item"><a class="nav-link" href="#relawan">Relawan</a></li>
										<li class="nav-item"><a class="nav-link" href="#galeri">Galeri</a></li>
										<li class="nav-item"><a class="nav-link" href="#kontak">kontak</a></li>
									</ul>
								</li> 
								
							</ul>
						</div> 
					</div>
            	</nav>
            </div>
        </header>
        </>
    )
}

export default Header2