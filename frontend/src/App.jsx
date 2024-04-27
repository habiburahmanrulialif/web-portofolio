import React from "react";
import "./App.css";
import About from "./components/about/About.jsx";
import Education from "./components/education/Education.jsx";
import Home from "./components/home/Home.jsx";
import Portofolio from "./components/portofolio/Portofolio.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

import { useState } from "react";

function App() {
    return (
        <>
            <Sidebar />
            <Home />
            <About />
            <Education />
            <Portofolio />
        </>
    );
}

export default App;