import React from "react";
import "./portofolio.css";
import ProjectItem from "./ProjectItem";
import testImg from "../../assets/home-background.jpg";

const Portofolio = () => {
    return (
        <div id="project" className="project">
            <h1 className="title">Project</h1>
            <p className="titleDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, at nulla? Doloribus eos nobis veritatis eligendi
                illo! Necessitatibus voluptatem ex deleniti unde quae omnis
                dolorum. Quas optio ex perferendis temporibus?
            </p>
            <div className="projectItem">
                <ProjectItem img={testImg} title="test" link="#"/>
                <ProjectItem img={testImg} title="test" link="#"/>
                <ProjectItem img={testImg} title="test" link="#"/>
                <ProjectItem img={testImg} title="test" link="#"/>
            </div>
        </div>
    );
};

export default Portofolio;
