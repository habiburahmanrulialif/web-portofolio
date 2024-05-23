import React from "react";
import "./certificationItem.css";

function CertificationItem({ title, image, link }) {
    return (
        <div className="projectItem-Item">
            <img src={image} alt="/" className="projectImg" />
            <div className="projectDetailContainer">
                <h3 className="projectTitle">{title}</h3>
                <a href={link} target="_blank" className="projectLink">
                    Open
                </a>
            </div>
        </div>
    );
}

export default CertificationItem;
