import React from 'react'
import './Post.css';
import Mashina from '../img/mashina.jpg';

function Post() {
  return (
    <div className='post'>
      <img className='postImg' src={Mashina} alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quo dolorem aspernatur rem voluptatem impedit libero fugit hic autem aliquid.</span>
        <br/>
        <span className="postDate">1 Soat Oldin</span>
      </div>
      <p className='postDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, tempora amet! Nisi minus pariatur maxime doloribus ab id ea velit exercitationem provident minima, facere, distinctio eos aut veniam ex est.</p>
    </div>
  )
}

export default Post
