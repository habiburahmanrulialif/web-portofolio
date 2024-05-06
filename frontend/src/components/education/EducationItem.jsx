import React from "react";
import "./educationItem.css";

const EducationItem = ({year, title, duration, details}) => {
    return (
        <ul className="educationList">
            <li className="educationListItem">
                <div className="bulletin"/>
                <p className="itemTitle">
                    <span className="itemTitle-Year">{year}</span>
                    <span className="itemTitle-Title">{title}</span>
                    <span className="itemTitle-Duration">{duration}</span>
                </p>
                <p>
                    <span className="itemDetails">{details}</span>
                </p>
            </li>
        </ul>
    );
};

export default EducationItem;
