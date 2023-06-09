import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from 'react';

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
import BlankPage from "./Pages/Blank";


const App = () =>{
  
  return(

    <Router>
      <Routes>
        {/* public route */}
        <Route path="/" element={<Main/>}/>
        <Route path="/adminfaisal" element={<Admin/>}/>
        <Route path="/relawan/form" element={<RelawanForm/>}/>
        <Route path="/kabar/:id" element={<News/>}/>

      
        <Route path="/adminfaisal/dashboard" element={<AdminDash/>}/>
        <Route path="/adminfaisal/data/pendukung" element={<AdminTeam/>}/>
        <Route path="/adminfaisal/post/kabar" element={<AdminPostKabar/>}/>
        <Route path="/adminfaisal/post/kabar/edit/:id" element={<EditBerita/>}/>

        {/* blank page */}

        <Route path="*" element={<BlankPage/>}/>

        {/* maintenance */}

        <Route path="/post/galeri/upload" element={<AddGaleri/>}/>
        <Route path="/adminfaisal/post/galeri" element={<AdminPostGaleri/>}/>

      </Routes>
    </Router>

    
  )
}

export default App