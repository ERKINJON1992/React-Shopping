import React from 'react'
import './Heander.css';
import Xol from '../img/xol.jpg';


function Heander() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className='headerTitleSm'>React & Vue.JS</span>
        <span className='headerTitleLg'>Erkin Yusupov</span>
      </div>
      <img className='headerImg' src={Xol} alt="" />
    </div>
  )
}

export default Heander
