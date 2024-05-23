import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import LandingP from "./pages/LandingPage"
import AboutP from "./pages/AboutUs"
import ContactP from "./pages/ContactUs"
import NotFoundP from "./pages/NotFound"
// import './App.css'

export default function App() {
  return (
    <>  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingP/>} /> 
        <Route path="/about-us" element={<><Header/><AboutP /><Footer/></>} />
        <Route path="/contact-us" element={<><Header/><ContactP /><Footer/></>} />
        <Route path="*" element={<NotFoundP />} />
      </Routes>
    </BrowserRouter>
    </>


  )
}
