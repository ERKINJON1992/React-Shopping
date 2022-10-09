import React from 'react';

import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Heander from './Components/Heander/Heander';
import Home from './Components/pages/Home/Home';
import Login from './Components/pages/Home/login/Login';
import Register from './Components/pages/Home/login/register/Register';
import Settings from './Components/pages/Home/settings/Settings';
import Single from './Components/pages/Home/single/Single';
import Write from './Components/pages/Home/Write/Write';
import Post from './Components/Post/Post';
import Topbar from './Components/Topbar/Topbar';



function App() {
  const user = false;
  return (
    <div className="App">
    <Topbar />
    <Routes>
      <Route path="/"exact element={<Home />} />
     
    </Routes>
    <Routes>
      <Route path="/Register" element={user ? <Home/> : <Register />} />
     
    </Routes>
    <Routes>
      <Route path="/login"element={user ? <Home/> : <Login />} />
     
    </Routes>
    <Routes>
      <Route path="/settings" element={user ? <Settings /> : <Register />} />
     
    </Routes>
    <Routes>
      <Route path="/post/:postId" element={<Single />} />
     
    
    </Routes>
    <Routes>
      <Route path="/write" element={user ? <Write/> :<Single />} />
     
    </Routes>
  </div>
  
  
  );
}

export default App;
