import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">Mihiranga</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skils</a></li>
        <li><a href="#proj">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/mihiranga-upasara/"><FaLinkedin/></a>
        <a href="https://github.com/Upasara"><FaSquareGithub /></a>
      </div>
    </footer>
  )
}

export default Footer