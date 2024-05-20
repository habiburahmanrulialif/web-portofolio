import React from "react";
import "./portofolio.css";
import ProjectItem from "./ProjectItem";
import testImg from "../../assets/home-background.jpg";

const Portofolio = () => {
    return (
        <div className="project">
            <div id="project">
                <h1 className="title" >
                    PROJECT
                </h1>
                <p className="titleDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, at nulla? Doloribus eos nobis veritatis eligendi
                    illo! Necessitatibus voluptatem ex deleniti unde quae omnis
                    dolorum. Quas optio ex perferendis temporibus?
                </p>
                <div className="projectItem">
                    <ProjectItem img={testImg} title="Chatter50" link="chatter50.up.railway.app" />
                    <ProjectItem img={testImg} title="Network50" link="network50.up.railway.app" />
                    <ProjectItem img={testImg} title="Mail50" link="mail50.up.railway.app" />
                    <ProjectItem img={testImg} title="Commerce50" link="commerce50.up.railway.app" />
                    <ProjectItem img={testImg} title="Wiki50" link="wiki50.up.railway.app" />
                </div>
            </div>
        </div>
    );
};

export default Portofolio;
