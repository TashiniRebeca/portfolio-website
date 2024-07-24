/* eslint-disable no-unused-vars */
import React from 'react'
import '../../../src/App.css';
import { MyWorkData } from '../../assets/MyWorkData';
import rightArrow from '../../assets/right-arrow.png';

const Work = () => {
    return (
        <div className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
            </div>
            <div className="mywork-container">
                {MyWorkData.map((work, index_no) => {
                    return (
                        <div className="mywork-box" key={index_no}>
                            <img src={work.w_img} alt="" />
                        </div>
                    )
                })}
            </div>
            <div className="work-showmore">
                <img src={rightArrow} alt="" />
            </div>
        </div>
    )
}

export default Work