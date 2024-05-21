import React from "react";
import "./education.css";
import EducationItem from "./EducationItem";

const data = [
    {
        year: 2013,
        title: "Plus Senior High School of Riau Province",
        details:
            "Natural Science's",
        durations: "3 years",
    },
    {
        year: 2016,
        title: "Andalas University",
        details:
            "Bachelor’s Degree in Electrical Engineering - GPA 3.17",
        durations: "7 years",
    },
    {
        year: 2023,
        title: "Harvard Conputer Science",
        details:
            "Harvard computer science CS50x and CS50w classes",
        durations: "1 years",
    },
];

const Education = () => {
    return (
        <div id="education" className="education">
            <h1 className="title">EDUCATION</h1>
            {data.map((item, idx) => (
                <EducationItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.durations}
                    details={item.details}
                />
            ))}
        </div>
    );
};

export default Education;
