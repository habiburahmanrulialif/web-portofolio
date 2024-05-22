import React from "react";
import "./home.css";
import bg_home from "../../assets/bg-home.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Home = () => {
    return (
        <div id="home">
            <img src={bg_home} alt="background_for_home" className="bg-home" />
            <div className="overlayBg">
                <div className="myInfo">
                    <h1 className="myName">I'm Habiburahman Ruli Alif</h1>
                    <h2 className="myOccupation">
                        I'm a
                        <TypeAnimation
                            sequence={[
                                "Developer",
                                1000,
                                "Coder",
                                1000,
                                "Tech Enthusiast",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            cursor={true}
                            style={{ fontSize: "1em", paddingLeft: "5px" }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className="socialMedia">
                        <a href="https://www.linkedin.com/in/habiburahman-ruli-alif" target="_blank">
                            <FaLinkedin size={20} className="cursor-pointer" />
                        </a>
                        <a href="https://www.github.com/habiburahmanrulialif" target="_blank">
                            <FaGithub size={20} className="cursor-pointer" />
                        </a>
                        <a href="https://www.instagram.com/habiburahman_14/" target="_blank">
                            <FaInstagram size={20} className="cursor-pointer" />
                        </a>
                        <a href="https://www.facebook.com/people/Habiburahman-Ruli-Alif/100088122450815/" target="_blank">
                            <FaFacebook size={20} className="cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
