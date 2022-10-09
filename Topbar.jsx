import React from 'react'
import './Topbar.css';
import { Link } from 'react-router-dom'
import Single from '../pages/Home/single/Single';
import Qiz from '.././img/qiz.jpg';

function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcons fab fa-facebook-square"></i>
        <i className="topIcons fab fa-twitter-square"></i>
        <i className="topIcons fab fa-pinterest-square"></i>
        <i className="topIcons fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
        <li className='topListItem'>
          <Link to="/"className='link'>HOME</Link>
        </li>
        <li className='topListItem'>
          <Link to="/"className='link'>ABOUT</Link>
        </li>
        <li className='topListItem'>
          <Link to="/"className='link'>CONTACT</Link>
        </li>
        <li className='topListItem'>
          <Link to="/write"className='link'>WRITE</Link>
        </li>
      <li className='topListItem'>
        {user && "LOGOUT"}
      </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img className="topImg"src="https://img3.goodfon.com/wallpaper/original/3/38/nastroenie-devushka-krasivaya-v.jpg" alt=""/>
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link className='link' to='/login'>LOGIN</Link>
              </li>
              <li className='topListItem'>
                <Link className='link' to='/register'>REGISTER</Link>
              </li>
            </ul>
          )
        }
       <img src={Qiz} alt=""className='topImg' />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}

export default Topbar
