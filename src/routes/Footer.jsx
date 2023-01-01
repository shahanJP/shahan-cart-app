import React from 'react'
import {FacebookLogo,LinkedinLogo,InstagramLogo   } from "phosphor-react";
import './footer.css'
const Footer = () => {
    return (
        <div className='footer'>
        <FacebookLogo size={35} className="logo" />
        <LinkedinLogo size={35} className="logo"  />
        <InstagramLogo size={35} className="logo" />
        </div>
    )
}

export default Footer
