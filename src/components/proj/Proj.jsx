import React, { useState } from 'react'
import './proj.css'
import IMG11 from '../../assets/mobile12.jpg'
import IMG12 from '../../assets/mobile11.jpg'
import IMG13 from '../../assets/mobile13.png'
import IMG2 from '../../assets/swing.jpg'
import IMG3 from '../../assets/IOT2.jpg'


// display th list of article using array
const list = [
  {
    id: 1,
    title:'TeFMaSys (Mobile App)',
    image: IMG13,
    des: ' Empowering Sri Lankan tea farmers with technology! This mobile app revolutionizes how tea leaf data is managed and communicated. Farmers can view weekly leaf collections, pricing, and total earnings right from their smartphones. 📈 Features include real-time price updates, historical earnings graphs, and a responsive chatbot for instant queries. 🤖 Designed using Flutter, with Firebase handling database and push notifications, this app ensures seamless, up-to-date information flow between tea farmers and factories, boosting efficiency and transparency. 📊 A modern solution for a traditional industry!',
    github: 'https://github.com/Upasara/Upasara-Upasara-Upasara-Tea_Farmer_Management_System-Mobile_App-user_panel.git',
    demo: 'https://www.facebook.com'
  },
  {
    id: 1,
    title:'TeFMaSys (Web App)',
    image: IMG13,
    des: 'A dynamic web application built with React JS designed to bridge the gap between tea factories and local farmers in Sri Lanka. This admin panel facilitates efficient management of user data 📊, processes farmers complaints 📝, and publishes crucial updates 📢. Utilizing Firebase for seamless real-time data syncing, authentication, and push notifications, the dashboard ensures timely communication and operational efficiency. Perfect for streamlining workflows and enhancing the tea collection process, making it easier for administrators to maintain high levels of productivity and engagement. 🌱🚚💼',
    github: 'https://github.com/Upasara/Upasara-Upasara-Upasara-Tea_Farmer_Management_System-Web_App.git',
    demo: 'https://www.facebook.com'
  },
  {
    id: 1,
    title:'Shape Learner',
    image: IMG2,
    des: '🔵🟥 "Shape Explorer" is an interactive Java Swing application designed to teach pre-schoolers basic geometric shapes like circles, squares, rectangles, and triangles. Utilizing vibrant animations and engaging sound effects, this tool not only makes learning fun but also interactive, with features such as drag-and-drop shape matching and voice narrations to guide young learners. Developed with accessibility and user-friendliness in mind, "Shape Explorer" aims to enhance early educational experiences through technology. Perfect for integrating into pre-school curriculums or for at-home learning. 🎓💡',
    github: 'https://github.com/Upasara/PUSL3122_Coursework_HCI',
    demo: 'https://www.facebook.com'
  },
  {
    id: 1,
    title:'Smart Irrigation System',
    image: IMG3,
    des: 'Harnessing the power of IoT, this project introduces a cutting-edge irrigation management system designed to enhance agricultural efficiency. Featuring sensors for soil moisture 🌧️, temperature 🌡️, humidity 💧, and sunlight ☀️, the system connects via an ESP8266 WiFi module to a Firebase Realtime Database. Users can monitor environmental conditions and manage irrigation through a bespoke mobile app, ensuring crops receive the precise care they need. This initiative not only conserves water but also supports optimal crop growth 🌾, showcasing the practical application of technology in sustainable farming.',
    github: 'https://github.com/Upasara/Smart-Irrigation-System_IOT',
    demo: 'https://www.facebook.com'
  },
  {
    id: 1,
    title:'RATHAYA (User Panel)',
    image: IMG3,
    des: 'Explore the future of vehicle maintenance with Rathaya, an innovative web app designed to streamline the process of purchasing auto parts. 🌐 Users can register to discover and order the exact parts they need from a trusted auto shop, all within a few clicks. Our unique features include real-time chat for instant verification 📲, post-delivery payment options for guaranteed satisfaction 💸, and an intuitive admin panel for seamless management. 🖥️ Rathaya ensures a hassle-free shopping experience, delivering reliability right to your doorstep. 🏡',
    github: 'https://github.com/Upasara/auto_part.git',
    demo: 'https://www.facebook.com'
  },
  {
    id: 1,
    title:'RATHAYA (Admin Panel)',
    image: IMG3,
    des: 'Take control of your auto parts business with Rathaya’s Admin Panel, engineered to simplify inventory and order management. 📊 This robust backend interface lets shop owners effortlessly input new parts, update details, and monitor stock levels. 🔄 Real-time order tracking ensures that every customer request is met promptly and accurately. 📦 With intuitive controls and a clear dashboard, the Rathaya Admin Panel transforms the complexities of business operations into a streamlined, user-friendly experience. Enhance your shop’s efficiency and customer satisfaction with just a few clicks! 🌟',
    github: 'https://github.com/Upasara/auto_part.git',
    demo: 'https://www.facebook.com'
  },

]

const paragraphStyles = {
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box'
}

const Proj = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="proj">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project_container">

        {
          list.map(({ id, title, image, des, github, demo }) => {
            return (
              <article key={id} className="project_item">
                <div className="project_title"><h3>{title}</h3></div>
                <div className="project_item-image">
                  <img src={image} alt= {des} />
                </div>
                <p
                  style={isOpen ? null: paragraphStyles}
                >{des}</p>
                <div className="project_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href='#0' className='btn btn-primary' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'Read Less...' : 'Read More...'}</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Proj
