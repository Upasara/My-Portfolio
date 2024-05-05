import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/3.jpg'
import HeaderSoc from './HeaderSoc'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Header = () => {

  const [typeEffect] = useTypewriter({
    words: ['Web Application Developer','Mobile Application Developer', 'Project Manager'],
    loop:{},
    typeSpeed: 50,
    deleteSpeed: 40
  })

  return (
    <header>
      <div className="container header_container">
        
        <h4>Hello I am</h4>
        <h1>S.A.Mihiranga Upasara</h1>
        <h2 className="sub-text">&nbsp;{typeEffect}</h2>
        
        <CTA/>
        <HeaderSoc/>
        
        <div className="me">
          <img src={ME} alt="me" className='header_image' />
        </div>

        

      </div>
    </header>
  )
}

export default Header