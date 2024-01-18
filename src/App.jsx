import React from "react";
import Navbar from "./Components/NAvbar";
import Footer from "./Components/Footer";
import Features from "./Pages/Features";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import GetChrome from "./Pages/GetChrome";
import GetFirefox from "./Pages/GetFirefox";
import MoreInfo from "./Pages/MoreInfo";
import AddInstall from "./Pages/AddInstall";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/features" element={<Features />}/>
            <Route path="/pricing" element={<Pricing />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/logIn" element={<Login />}/>
            <Route path="/getinchrome" element={<GetChrome />}/>
            <Route path="/getinfirefox" element={<GetFirefox />}/>
            <Route path="/moreinfo" element={<MoreInfo />} />
            <Route path="/add" element={<AddInstall />}/>
            <Route path="/contactus" element={<ContactUs />}/>
          </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
