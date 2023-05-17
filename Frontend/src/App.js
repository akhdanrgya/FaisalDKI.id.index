import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { useState } from 'react';

import Main from "./Pages/Main"
import RelawanForm from "./Components/RelawanForm"
import Admin from "./Components/admin/Admin";
import AdminDash from "./Pages/Admindash"
import AdminTeam from "./Components/admin/AdminTeam"
import AdminPostGaleri from "./Components/admin/AdminPostGaleri"
import AdminPostKabar from "./Components/admin/AdminPostKabar"
import AddGaleri from "./Components/admin/AddGaleri"
import EditBerita from "./Components/admin/AdminEditKabar"
import News from "./Components/berita/berita"


const App = () =>{
  
  return(

    <Router>
      <Routes>
        {/* public route */}
        <Route path="/" element={<Main/>}/>
        <Route path="/adminfaisal" element={<Admin/>}/>
        <Route path="/relawan/form" element={<RelawanForm/>}/>
        <Route path="/kabar/:title" element={<News/>}/>

        {/* testing future */}
      {/* <PrivateRoute path="/adminfaisal/dashboard" element={<AdminDash />} />
      <PrivateRoute path="/adminfaisal/data/pendukung" element={<AdminTeam />} />
      <PrivateRoute path="/adminfaisal/post/galeri" element={<AdminPostGaleri />} />
      <PrivateRoute path="/adminfaisal/post/kabar" element={<AdminPostKabar />} />
      <PrivateRoute path="/adminfaisal/post/galeri/upload" element={<AddGaleri />} />
      <PrivateRoute path="/adminfaisal/post/kabar/edit/:id" element={<EditBerita />} /> */}
        {/* private route */}


      
        <Route path="/adminfaisal/dashboard" element={<AdminDash/>}/>
        <Route path="/adminfaisal/data/pendukung" element={<AdminTeam/>}/>
        <Route path="/adminfaisal/post/galeri" element={<AdminPostGaleri/>}/>
        <Route path="/adminfaisal/post/kabar" element={<AdminPostKabar/>}/>
        <Route path="/adminfaisal/post/galeri/upload" element={<AddGaleri/>}/>
        <Route path="/adminfaisal/post/kabar/edit/:id" element={<EditBerita/>}/>


      </Routes>
    </Router>

    
  )
}

export default App