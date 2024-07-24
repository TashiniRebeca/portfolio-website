/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../../../src/App.css';
import profilePhoto from '../../assets/Profile Photo.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profilePhoto} alt="" />
      <h1><span>I'm Tashini Weerasooriya,</span> intern IT based in Sri Lanka.</h1>
      <p>I'm a Computer Science undergraduate who is passionate about the tech industry. I also gained experience as a TechBee at
        HCLTech SL (Pvt) Ltd. I've knowledge in Java, HTML,CSS,JS,React JS, C#,.NET,MySQL.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero