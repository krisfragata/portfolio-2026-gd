import React from "react";
import { Education, educationList } from "./education_list";

const About: React.FC = () => {
    const renderEducationInfo = () => {
            return educationList.map((edu:Education, index) => {
            return (<div className="education-item" key={index}>
                        <div className="about-name">{edu.schoolName}</div>
                        <div className="details">{edu.years}</div>
                        {/* <div className="description">{edu.description}</div> */}
                    </div>);
        });
    }
    return (
        <div className="about-container">
            <div className="section">
                <div className="header">
                    About Me
                </div>
                <p className="summary">
                    Enjoyer of music, literature, climbing. Skilled in photography, film, software engineering, design, music making.
                </p>
            </div>
            <div className="section">
                <div className="header">
                    Education
                </div>
                <div className="education">
                    {renderEducationInfo()}
                </div>
            </div>
        </div>
    );
};

export default About;