import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Navbar from "./page/Navbar";
function App(){


  return (
    <>
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile/:id" element={<Profile/>}/>
      <Route path="/contact/:name" element={<Contact/>}/>
     </Routes>
    </>
  )
}

export default  App;