import React from "react";
import Education from "./components/education/Education.jsx";
import Home from "./components/home/Home.jsx";
import Portofolio from "./components/portofolio/Portofolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Certification from "./components/certification/Certification.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

import "./App.css";

import { useState } from "react";

function App() {
    return (
        <>
            <Sidebar />
            <Home />
            <Education />
            <Portofolio />
            <Certification />
            <Contact />
        </>
    );
}

export default App;
