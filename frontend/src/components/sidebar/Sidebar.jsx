import React, { useState } from "react";
import {
    AiOutlineMenu,
    AiOutlineHome,
    AiOutlineProject,
    AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { LuGraduationCap } from "react-icons/lu";
import "./sidebar.css";

const Sidebar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    visualViewport.onresize = () => {
        setNav(false);
    };

    return (
        <div>
            <AiOutlineMenu size={20} onClick={handleNav} className="menuBar" />
            {nav ? (
                <div className="menuList">
                    <a href="#home" onClick={handleNav} className="menuButton">
                        <AiOutlineHome size={20} />
                        <span className="buttonName">Home</span>
                    </a>
                    <a href="#education" onClick={handleNav} className="menuButton">
                        <LuGraduationCap size={20} />
                        <span className="buttonName">Education</span>
                    </a>
                    <a href="#project" onClick={handleNav} className="menuButton">
                        <AiOutlineProject size={20} />
                        <span className="buttonName">Project</span>
                    </a>
                    <a href="#contact" onClick={handleNav} className="menuButton">
                        <AiOutlineMail size={20} />
                        <span className="buttonName">Contact</span>
                    </a>
                </div>
            ) : (
                ""
            )}

            <div className="sideBar">
                <div className="sideBarList">
                    <a href="#home" onClick={handleNav} className="sideBarItem">
                        <AiOutlineHome size={20} />
                    </a>
                    <a href="#education" onClick={handleNav} className="sideBarItem">
                        <LuGraduationCap size={20} />
                    </a>
                    <a href="#project" onClick={handleNav} className="sideBarItem">
                        <AiOutlineProject size={20} />
                    </a>
                    <a href="#contact" onClick={handleNav} className="sideBarItem">
                        <AiOutlineMail size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
