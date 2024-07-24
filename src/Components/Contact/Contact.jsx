/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../../../src/App.css';
import './Contact.css';
import linkedinImg from '../../assets/linkedin.png';
import emailImg from '../../assets/mail.png';
import phoneImg from '../../assets/telephone.png';
import locationImg from '../../assets/location.png';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'm currently looking for a project to be part of within my skills. I would love to work with potential peers and
                        expand my knowledge. So feel free to contact me through my e-mail or LinkedIn profile.
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={emailImg} alt="" /><p>tweerasooriya032@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={phoneImg} alt="" /><p>+94-76-403-1384</p>
                        </div>
                        <div className="contact-detail">
                            <img src={locationImg} alt="" /><p>Galle, Sri Lanka</p>
                        </div>
                        <div className="contact-detail">
                            <img src={linkedinImg} alt="" /><p>https://www.linkedin.com/in/tashini-weerasooriya-784003239/</p>
                        </div>
                    </div>
                </div>
                <form action="post" className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name="name" id="name" />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your mail' name="mail" id="mail" />
                    <label htmlFor="">Write your Message Here</label>
                    <textarea placeholder='Enter your message' rows={6} name="message" id="message"></textarea>
                    <button type="submit" className='contact-submit'>Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact