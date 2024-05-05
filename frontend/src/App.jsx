import React from "react";
import Education from "./components/education/Education.jsx";
import Home from "./components/home/Home.jsx";
import Portofolio from "./components/portofolio/Portofolio.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Contact from './components/contact/Contact.jsx'

import { useState } from "react";

function App() {
    return (
        <>
            <aside>
                <Sidebar />
            </aside>
            <main>
                <Home />
                <Education />
                <Portofolio />
                <Contact />
            </main>
        </>
    );
}

export default App;
