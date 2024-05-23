import React from "react";
import "./certification.css";
import CS50x from "../../assets/CS50x.png";
import CS50w from "../../assets/CS50W.png";
import AgileFundamentals from "../../assets/Agile-Fundamentals.jpg";
import SoftwareTesting from "../../assets/Software-Testing.jpg";

import CertificationItem from "./CertificationItem";

const certificate = [
    {
        title: "CS50x",
        image: CS50x,
        link: "#",
    },
    {
        title: "CS50w",
        image: CS50w,
        link: "#",
    },
    {
        title: "Agile Fundamentals: Including Scrum and Kanban 2022",
        image: AgileFundamentals,
        link: "#",
    },
    {
        title: "Software Testing, QA Testing, Manual Testing, SDLC, Test Plan",
        image: SoftwareTesting,
        link: "#",
    },
];

function Certification() {
    return (
        <div className="project">
            <div id="certificate">
                <h1 className="title">CERTIFICATE</h1>
                <p className="titleDescription">
                    Here are some of my certificate that i have acquired in my
                    pursue of learning programming
                </p>
                <div className="projectItem">
                    {certificate.map((item, index) => (
                        <CertificationItem
                            key={index}
                            title={item.title}
                            image={item.image}
                            link={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Certification;
