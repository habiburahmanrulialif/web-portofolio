import React from "react";
import "./home.css";
import bg_home from '../../assets/bg-home.jpg';

const Home = () => {
    return (
        <div id="home">
            <img src={ bg_home } alt="background_for_home" className="bg-home"/>
        </div>
    );
};

export default Home;
