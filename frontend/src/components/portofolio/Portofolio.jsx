import React from "react";
import "./portofolio.css";
import ProjectItem from "./ProjectItem";
import testImg from "../../assets/home-background.jpg";
import Chatter50 from "../../assets/Chatter50.png";
import Network50 from "../../assets/Network50.png";
import Mail50 from "../../assets/Mail50.png";
import Commerce50 from "../../assets/Commerce50.png";
import Wiki50 from "../../assets/Wiki50.png";
import ReactionTimer from "../../assets/reaction-timer.png"

const Portofolio = () => {
    return (
        <div className="project">
            <div id="project">
                <h1 className="title" >
                    PROJECT
                </h1>
                <p className="titleDescription">
                    Here are some of my past project that i have done in order to finish harvard CS50 classes.
                </p>
                <div className="projectItem">
                    <ProjectItem img={Chatter50} title="Chatter50" link="https://chatter50.up.railway.app" githubLink="https://github.com/habiburahmanrulialif/Chatter" />
                    <ProjectItem img={Network50} title="Network50" link="https://network50.up.railway.app" githubLink="https://github.com/habiburahmanrulialif/CS50Web/tree/main/NETWORK" />
                    <ProjectItem img={Mail50} title="Mail50" link="https://mail50.up.railway.app" githubLink="https://github.com/habiburahmanrulialif/CS50Web/tree/main/MAIL" />
                    <ProjectItem img={Commerce50} title="Commerce50" link="https://commerce50.up.railway.app" githubLink="https://github.com/habiburahmanrulialif/CS50Web/tree/main/COMMERCE" />
                    <ProjectItem img={Wiki50} title="Wiki50" link="https://wiki50.up.railway.app" githubLink="https://github.com/habiburahmanrulialif/CS50Web/tree/main/WIKI" />
                    <ProjectItem img={ReactionTimer} title="Reaction timer game" link="https://vue-project-production.up.railway.app" githubLink="https://github.com/habiburahmanrulialif/Vue-Project/tree/main/reaction-timer-game" />
                </div>
            </div>
        </div>
    );
};

export default Portofolio;
