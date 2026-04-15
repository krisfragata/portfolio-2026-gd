import React from "react";
import { Education, educationList } from "./education_list";
import { Work, works } from "./work_list";

const About: React.FC = () => {
    /**
     * @description renders education list items
     * @returns JSX component
     */
    const renderEducationInfo = () => {
            return educationList.map((edu:Education, index) => {
            return (<div className="education-item" key={index}>
                        <div className="about-name">{edu.schoolName}</div>
                        <div className="details italics">{edu.description}</div>
                        <div className="details">{edu.years}</div>
                    </div>);
        });
    }

    /**
     * @description renders work list items
     * @returns JSX component
     */
    const renderWorkInfo = () => {
        return works.map((work, index) => {
            return (
                <div className="work-item" key={work.id}> 
                    <div className="about-name">{work.companyName}</div>
                    <div className="details italics">{work.position}</div>
                    <div className="details">{work.years}</div>
                </div>
            )
        })
    }
    
    return (
        <div className="about-container">
            <div className="section">
                <div className="header">
                    About Me
                </div>
                <p className="summary">
                    Enjoyer of music, literature, snowboarding, and climbing. Skilled in photography, film, software engineering, design, music, and teaching cats tricks (mainly of the high-five variety).
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
            <div className="section">
                <div className="header">
                    Employment
                </div>
                <div className="education">
                    {renderWorkInfo()}
                </div>
            </div>
        </div>
    );
};

export default About;