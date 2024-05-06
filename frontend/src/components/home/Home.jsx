import React from "react";
import "./home.css";
import bg_home from "../../assets/bg-home.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

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
                     <FaLinkedin  size={20} className="cursor-pointer"/>
                     <FaInstagram size={20} className="cursor-pointer"/>
                     <FaTwitter   size={20} className="cursor-pointer"/>
                     <FaFacebook  size={20} className="cursor-pointer"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
