/* eslint-disable no-unused-vars */
import React from 'react'
import '../../../src/App.css';
import { ServiceData } from '../../assets/ServiceData'
import arrow from '../../assets/right-arrow.png';

const Services = () => {
    return (
        <div className='service'>
            <div className="service-title">
                <h1>My Interests</h1>
            </div>
            <div className="service-container">
                {ServiceData.map((service, index_no) => {
                    return (
                        <div className="service-box" key={index_no}>
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className="service-readmore">
                                <p>Read More</p>
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Services