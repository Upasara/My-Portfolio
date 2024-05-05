import React from 'react'
import './contact.css'
import { MdEmail } from "react-icons/md";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  const form = useRef();
  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_jtawkpf', 'template_l9yls6d', form.current, 'BilGCLyaQTOLgXmNr')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    })

    toast.success('Form Submitted...!', {
      autoClose: 5000,
      theme:"light",
    });
    e.target.reset()
    
  };

  return (
    <section id='contact' >  
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">

        <div className="contact_options">

          <article className="contact_option">
          <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>mihirangaupasara2000@gmail.com</h5>
            <a href="mailto:mihirangaupasara2000@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact_option">
            <MdEmail className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>0715641280</h5>
            <a href="https://api.whatsapp.com/send?phone=940715641280" target='_blank'>Send a message</a>
          </article>

        </div>

        {/* end of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your E-mail' required />
          <textarea name="subject" rows="2" placeholder='E-mail Subject' ></textarea>
          <textarea name="message"  rows="7" placeholder='Your Message' required ></textarea>
          <button type="submit" className='btn btn-primary'>Send the Message </button>
          <ToastContainer
            autoClose = {5000}
            theme='light'/>
        </form>
      </div>
    </section>
  )
}

export default Contact