/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../../../src/App.css';
import profilePic from '../../assets/Profile Photo.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profilePic} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm a 3rd year Computer Science
                            undergraduate at University of Westminster who is passionate
                            about the tech industry. During my
                            studies, I participated in tech
                            events to learn and collaborate with
                            like- minded individuals. I also
                            gained experience as a TechBee at
                            HCLTech (Pvt) Ltd. I'm committed
                            to making a positive impact through
                            my work and contributing to the
                            growth of the industry</p>
                        <p>Having 18 months of experience in Software
                            Development, posesses technical expertise in:
                            Java, HTML,CSS,JS,React JS,C#, MySQL, ASP.NET MVC.Currently learning about Android App Development.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Java</p><hr style={{ width: "75%" }} /></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "85%" }} /></div>
                        <div className="about-skill"><p>C#</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>JS & React JS</p><hr style={{ width: "40%" }} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About