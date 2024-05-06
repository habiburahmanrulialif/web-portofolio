import React from "react";
import "./education.css";
import EducationItem from "./EducationItem";

const data = [
    {
        year: 2013,
        title: "Plus Senior High School of Riau Province",
        details:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam labore aspernatur eligendi nostrum quas! Doloribus iste reiciendis similique facere illo, accusamus dicta nobis, illum labore fugiat ipsa. Odio, inventore ut.",
        durations: "3 years",
    },
    {
        year: 2016,
        title: "Electrical Engineering - Andalas University, BA",
        details:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam labore aspernatur eligendi nostrum quas! Doloribus iste reiciendis similique facere illo, accusamus dicta nobis, illum labore fugiat ipsa. Odio, inventore ut.",
        durations: "7 years",
    },
    {
        year: 2023,
        title: "Harvard Conputer Science - CS50x and CS50w",
        details:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam labore aspernatur eligendi nostrum quas! Doloribus iste reiciendis similique facere illo, accusamus dicta nobis, illum labore fugiat ipsa. Odio, inventore ut.",
        durations: "1 years",
    },
];

const Education = () => {
    return (
        <div id="education" className="education">
            <h1 className="title">WORK</h1>
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
