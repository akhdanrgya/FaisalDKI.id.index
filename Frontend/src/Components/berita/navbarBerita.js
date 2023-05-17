import React from "react";
import { Link } from "react-router-dom";

const HeaderB = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#fff", boxShadow: "0px 3px 16px 0px rgba(0, 0, 0, 0.1)" }}>
  
  <div class="container-fluid">
    
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarCenteredExample"
      aria-controls="navbarCenteredExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    
    <div
      class="collapse navbar-collapse justify-content-center"
      id="navbarCenteredExample"
    >
      
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" style={{color: "black"}} aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
        <Link class="nav-link" style={{color: "red"}} href="#visi" to={"/relawan/form"}>
                      Daftar Menjadi Relawan
                    </Link>
        </li>
      </ul>
      
    </div>
    
  </div>
  
</nav>
    </>
  )
}

export default HeaderB