import React from "react";
import "./projectItem.css";

const ProjectItem = ({ img, title, link }) => {
    return (
        <div className="projectItem-Item">
            <img src={img} alt="/" className="projectImg" />
            <div className="projectDetailContainer">
                <h3 className="projectTitle">{title}</h3>
                <a href={link} className="projectLink">LIVE DEMO</a>
            </div>
        </div>
    );
};

export default ProjectItem;
