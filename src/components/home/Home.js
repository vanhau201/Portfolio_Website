import React from 'react'
import "./Home.css"
import { FaFacebookF, FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import Typed from 'react-typed';
import avatar from "../../assets/avatar01.png"

const Home = () => {
    console.log(avatar)
    return (
        <div className='home' id='home'>
            <div className="container">
                <div className='row'>
                    <div className="left col-md-12 col-lg-7">
                        <div className="left__social">
                            <ul>
                                <li><a href="https://www.facebook.com/uahnav/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
                                <li><a href="https://www.youtube.com/channel/UC7xB-HhP6m5z3zfxz9eayaQ" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
                                <li><a href="https://www.instagram.com/hau.2000/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                                <li><a href="https://github.com/vanhau201/" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
                            </ul>
                        </div>
                        <div className='left__content'>
                            <h1>Hi, i'm To Van Hau</h1>
                            <p>I'm currently studying and researching about </p>
                            <p><Typed className='tasks' typeSpeed={60} backSpeed={40} loop strings={["Reactjs", "Django Rest Framework", "AI/Machine learning"]} /></p>
                        </div>
                        <div className='left__button'>
                            <a href="../assets/CV_ToVanHau.pdf" download="CV_ToVanHau.pdf">DownLoad CV</a>
                            <a href="#about">About me</a>
                        </div>
                    </div>
                    <div className="right col-md-12 col-lg-5">
                        <div className='right__avatar'>
                            <img src={avatar} alt="None" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Home