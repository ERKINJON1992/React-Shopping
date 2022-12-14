import React from 'react'
import './Settings.css';
import Sidebar from '../../../sidebar/Sidebar';
import Qiz from '../../../img/qiz.jpg';

function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src={Qiz} alt="" />
                <label htmlFor="fileInput">
                    <i className='settingsPPIcon far fa-user-circle'></i>
                </label>
                <input type="file" id='fileInput' style={{display: "none"}}/>

            </div>
            <label>Username</label>
            <input type="text" placeholder='Erkin'/>
            <label>Email</label>
            <input type="email" placeholder='erkinyusupov502@gmail.com'/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
            
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings
