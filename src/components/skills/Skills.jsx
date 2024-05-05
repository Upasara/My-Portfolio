import React from 'react'
import './skills.css'
import { FaCheckCircle } from "react-icons/fa";
import { PiSealCheckFill } from "react-icons/pi";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { IoShieldCheckmark } from "react-icons/io5";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Experince</h2>

      <div className="container skills_container">

        <div className="skills_frontend">
          <h3>Web-Frontend Development</h3>
          <div className="skills_content">

            <article className="skills_details">
              <TbDiscountCheckFilled className='skills_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-small">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <TbDiscountCheckFilled className='skills_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-small">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <TbDiscountCheckFilled className='skills_details-icon' />
              <div>
                <h4>Boostrap</h4>
                <small className="text-small">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <TbDiscountCheckFilled className='skills_details-icon' />
              <div>
                <h4>Java Script</h4>
                <small className="text-small">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <TbDiscountCheckFilled className='skills_details-icon' />
              <div>
                <h4>React JS</h4>
                <small className="text-small">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <TbDiscountCheckFilled className='skills_details-icon' />
              <div>
                <h4>Angular JS</h4>
                <small className="text-small">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <TbDiscountCheckFilled className='skills_details-icon' />
              <div>
                <h4>TypeScript</h4>
                <small className="text-small">Intermediate</small>
              </div>
            </article>

          </div>
        </div>
        {/* End of Frontend */}

        <div className="skills_backend">
          <h3>Web-Backend Development</h3>
          <div className="skills_content">

            <article className="skills_details">
              <TbDiscountCheckFilled className='skills_details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className="text-small">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <TbDiscountCheckFilled className='skills_details-icon' />
              <div>
                <h4>PHP</h4>
                <small className="text-small">Intermediate</small>
              </div>
            </article>  
            <article className="skills_details">
              <TbDiscountCheckFilled className='skills_details-icon' />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-small">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <TbDiscountCheckFilled className='skills_details-icon' />
              <div>
                <h4>FireBase</h4>
                <small className="text-small">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <TbDiscountCheckFilled className='skills_details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className="text-small">Basic</small>
              </div>
            </article>

          </div>
        </div>
        {/* End of Backend */}

        <div className="skills_frontend">
          <h3>Other Development</h3>
          <div className="skills_content">

            <article className="skills_details">
              <TbDiscountCheckFilled className='skills_details-icon' />
              <div>
                <h4>Flutter</h4>
                <small className="text-small">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <TbDiscountCheckFilled className='skills_details-icon' />
              <div>
                <h4>Arduino</h4>
                <small className="text-small">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <TbDiscountCheckFilled className='skills_details-icon' />
              <div>
                <h4>C#</h4>
                <small className="text-small">Intermediate</small>
              </div>
            </article>
            

          </div>
        </div>
        {/* End of other */}

      </div>

    </section>
  )
}

export default Skills