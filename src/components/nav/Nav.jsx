import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { SiGooglemessages } from "react-icons/si";
import { useState } from 'react';

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser /></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><RiComputerFill /></a>
      <a href='#proj' onClick={() => setActiveNav('#proj')} className={activeNav === '#proj' ? 'active' : ''}><AiFillProject /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><SiGooglemessages /></a>
    </nav>
  )
}

export default Nav