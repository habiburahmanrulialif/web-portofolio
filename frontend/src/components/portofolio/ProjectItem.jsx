import React from "react";
import "./projectItem.css";

const ProjectItem = ({ img, title }) => {
    return (
        <div className="projectItem-Item">
            <img src={img} alt="/" className="projectImg" />
            <div>
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default ProjectItem;
