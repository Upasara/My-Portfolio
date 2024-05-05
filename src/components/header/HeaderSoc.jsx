import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";


const HeaderSoc = () => {
  return (
    <div className="header_socials">
        
          <a href='https://www.linkedin.com/in/mihiranga-upasara/' target='_blank'><FaLinkedin/></a>
        
        <a href='https://github.com/Upasara' target='_blank'><FaSquareGithub /></a>
    </div>
  )
}

export default HeaderSoc