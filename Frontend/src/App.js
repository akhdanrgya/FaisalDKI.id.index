import Main from "./Pages/Main"
import Admin from "./Pages/Admin"
import PortalBerita from "./Pages/PortalBerita"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/adminfaisal" element={<Admin/>}/>
        <Route path="/test" element={<PortalBerita/>}/>
      </Routes>
    </Router>
  )
}

export default App