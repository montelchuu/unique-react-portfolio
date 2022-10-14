import React from "react";
import Navigation from "../Nav";
import About from "../About";
import Home from "../Home";
import Resume from "../Resume";
import Contact from "../Contact";
import Footer from "../Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Particle from "../Particles";

function Main() {
    return (
        <BrowserRouter>
            <div className="main">
                <Navigation />
                <Particle />
                <Routes>
                    <Route path="/Home" element={<Home />}></Route>
                    <Route path="/About" element={<About />}></Route>
                    <Route path="/Resume" element={<Resume />}></Route>
                    <Route path="/Contact" element={<Contact />}></Route>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default Main;