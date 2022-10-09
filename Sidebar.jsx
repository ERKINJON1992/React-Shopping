import React from 'react'
import './Sidebar.css';
import Uzbek from '../img/uzbek.jpg';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className='sidebarTitle'>About Me</span>
        <img src={Uzbek} alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque dolorum error temporibus magnam, similique alias facilis voluptatum inventore! Repudiandae amet laudantium ad temporibus magnam iusto quis quo rem doloribus nemo.</p>
      </div>
      <div className="sidebarItem">
      <span className='sidebarTitle'>CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinama</li>
      </ul>
      </div>
      <div className="sidebarItem">
      <span className='sidebarTitle'>Follow Us</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
      </div>
      </div>
    </div>
  )
}

export default Sidebar
