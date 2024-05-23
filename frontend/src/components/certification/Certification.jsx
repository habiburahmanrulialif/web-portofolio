import React from "react";
import "./certification.css";
import CS50x from "../../assets/CS50x.png";
import CS50w from "../../assets/CS50W.png";
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
];

function Certification() {
    return (
        <div className="project">
            <div id="certificate">
                <h1 className="title">CERTIFICATE</h1>
                <p className="titleDescription">
                    Here are some of my certificate that i have accieve in my
                    pursue if learning programming
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
