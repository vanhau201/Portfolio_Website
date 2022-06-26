import React from 'react'
import "./Footer.css"
import { FaFacebookF, FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__social">
                <ul>
                    <li><a href="https://www.facebook.com/uahnav/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
                    <li><a href="https://www.youtube.com/channel/UC7xB-HhP6m5z3zfxz9eayaQ" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
                    <li><a href="https://www.instagram.com/hau.2000/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                    <li><a href="https://github.com/vanhau201/" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
                </ul>
            </div>
            <div className='footer__title'>
                Copyright by Hau © 2022
            </div>

        </div>
    )
}

export default Footer