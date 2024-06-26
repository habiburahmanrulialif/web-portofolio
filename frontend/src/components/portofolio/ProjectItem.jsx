import React from "react";
import "./projectItem.css";

const ProjectItem = ({ img, title, link, githubLink, tech }) => {
    return (
        <div className="projectItem-Item">
            <img src={img} alt="/" className="projectImg" />
            <div className="projectDetailContainer">
                <h3 className="projectTitle">{title}</h3>
                <p id="tech">{tech}</p>
                <a href={link} target="_blank" className="projectLink">LIVE DEMO</a>
                <a href={githubLink} target="_blank" className="githubLink">Details</a>
            </div>
        </div>
    );
};

export default ProjectItem;
