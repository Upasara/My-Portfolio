import React from 'react'
import './about.css'
import AME from '../../assets/1.jpg'
import { FaAward } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id='about' className='about_section'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">

        <div className="about_me">
          <div className="about_me-image">
            <img src={AME} alt="About Image" className='about_image' />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Education</h5>
              <small>BSc (Hons) Software Engineering</small>
            </article>
            
            

            <article className="about_card">
              <FaFolderOpen  className='about_icon'/>
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>
          <p>
          👋Hello! I’m S.A. Mihiranga Upasara, a passionate <b>Software Engineer</b> specializing in <b>web development</b> from Homagama Sri Lanka. 
          I graduated from NSBM Green University with a Bachelor’s degree in Software Engineering, achieving a second class upper division. 
          My academic and project experiences have honed my skills in a diverse set of 🌐 technologies including JavaScript, ReactJS, NextJS,Angular JS, HTML/CSS, Bootstrap,Node JS, MongoDB, Firebase, and even Arduino and Flutter.
          <br></br><br></br>

          🔍I thrive on creating elegant, efficient web solutions, and I'm enthusiastic about using technology to solve real-world problems. 
          With a strong foundation in both front-end and back-end development, I aim to deliver seamless user experiences that are both functional and visually appealing.
          <br></br><br></br>
          🌟I am currently seeking opportunities to bring my unique background and skill set to a dynamic team. Let’s connect and explore how we can create something amazing together!
          </p>
            <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>

      </div>
    </section>
  )
}

export default About