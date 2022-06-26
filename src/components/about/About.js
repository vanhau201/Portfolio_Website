import React from 'react'
import "./About.css"
import avatar from "../../assets/avatar02.png"
const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='about__header'>
                    <h2>About Me</h2>

                </div>

                <div className='about__content row'>
                    <div className='wrap__avatar col-md-12 col-lg-5'>
                        <div className='about__content-avatar'>
                            <img src={avatar} alt="None" />
                        </div>
                    </div>
                    <div className='col-md-12 col-lg-7'>
                        <div className='about__content-intro'>
                            <h3>Hi there</h3>
                            <p>My name To Van Hau is a 4th year student of Industrial University of Ho Chi Minh City. My major is computer science and I'm currently doing my graduation project at the school.</p>
                            <p>I like to play football, listen to music and hang out with friends.</p>
                        </div>
                        <div className='about__content-info'>
                            <div>
                                <span>Name:</span>
                                <p>To Van Hau</p>
                            </div>
                            <div>
                                <span>Gender:</span>
                                <p>Male</p>
                            </div>
                            <div>
                                <span>Date of birth:</span>
                                <p>January 20, 2000</p>
                            </div>
                            <div>
                                <span>Phone:</span>
                                <p>0326031916</p>
                            </div>
                            <div>
                                <span>Email:</span>
                                <p>vanhau200100@gmail.com</p>
                            </div>
                            <div>
                                <span>Adress:</span>
                                <p>Go Vap, Ho Chi Minh City</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About