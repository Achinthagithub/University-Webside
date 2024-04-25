import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Narturing Tomorrow's Leader Today</h2>
                <p>Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Laborum in molestias
                    suscipit asperiores maiores consequatur
                    repellat, veritatis porro ea id cumque
                    aspernatur laboriosam?
                </p>
                <p>Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Laborum in molestias
                    suscipit asperiores maiores consequatur
                    repellat, veritatis porro ea id cumque
                    aspernatur laboriosam?
                </p>

                <p>Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Laborum in molestias
                    suscipit asperiores maiores consequatur
                    repellat, veritatis porro ea id cumque
                    aspernatur laboriosam?
                </p>


            </div>

        </div>
    )
}

export default About