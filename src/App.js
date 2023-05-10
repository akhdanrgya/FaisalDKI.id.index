import Main from "./Pages/Main"
import Admin from "./Pages/Admin"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/adminfaisal" element={<Admin/>}/>
      </Routes>
    </Router>
  )
}

export default App