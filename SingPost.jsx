import React from 'react'
import './SingPost.css';
import Zamin from '../img/zamin.jpg';

function SingPost() {
  return (
    <div className='singPost'>
      <div className="singlePostWrapper">
        <img src={Zamin} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        <div className="singlePostEdit">
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon far fa-trash-alt'></i>
        </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Safak</b></span>
            <span className="singlePostDate">1 Soat Oldin</span>
            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem numquam harum ex maxime, ut facere reiciendis ipsa fugiat voluptates nisi culpa dolor ad recusandae quibusdam? Laboriosam et culpa a nulla quasi, neque ipsum repellat temporibus nihil totam impedit, sunt accusamus fuga mollitia odit inventore cumque quisquam aut officia accusantium corporis itaque. Sed reiciendis corporis vel, distinctio consequuntur fuga recusandae dolorem esse voluptates perspiciatis tempore ex. Unde harum reprehenderit culpa aliquid assumenda repellat nulla molestias repudiandae expedita commodi? Omnis, tempore?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem numquam harum ex maxime, ut facere reiciendis ipsa fugiat voluptates nisi culpa dolor ad recusandae quibusdam? Laboriosam et culpa a nulla quasi, neque ipsum repellat temporibus nihil totam impedit, sunt accusamus fuga mollitia odit inventore cumque quisquam aut officia accusantium corporis itaque. Sed reiciendis corporis vel, distinctio consequuntur fuga recusandae dolorem esse voluptates perspiciatis tempore ex. Unde harum reprehenderit culpa aliquid assumenda repellat nulla molestias repudiandae expedita commodi? Omnis, tempore?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem numquam harum ex maxime, ut facere reiciendis ipsa fugiat voluptates nisi culpa dolor ad recusandae quibusdam? Laboriosam et culpa a nulla quasi, neque ipsum repellat temporibus nihil totam impedit, sunt accusamus fuga mollitia odit inventore cumque quisquam aut officia accusantium corporis itaque. Sed reiciendis corporis vel, distinctio consequuntur fuga recusandae dolorem esse voluptates perspiciatis tempore ex. Unde harum reprehenderit culpa aliquid assumenda repellat nulla molestias repudiandae expedita commodi? Omnis, tempore?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem numquam harum ex maxime, ut facere reiciendis ipsa fugiat voluptates nisi culpa dolor ad recusandae quibusdam? Laboriosam et culpa a nulla quasi, neque ipsum repellat temporibus nihil totam impedit, sunt accusamus fuga mollitia odit inventore cumque quisquam aut officia accusantium corporis itaque. Sed reiciendis corporis vel, distinctio consequuntur fuga recusandae dolorem esse voluptates perspiciatis tempore ex. Unde harum reprehenderit culpa aliquid assumenda repellat nulla molestias repudiandae expedita commodi? Omnis, tempore?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem numquam harum ex maxime, ut facere reiciendis ipsa fugiat voluptates nisi culpa dolor ad recusandae quibusdam? Laboriosam et culpa a nulla quasi, neque ipsum repellat temporibus nihil totam impedit, sunt accusamus fuga mollitia odit inventore cumque quisquam aut officia accusantium corporis itaque. Sed reiciendis corporis vel, distinctio consequuntur fuga recusandae dolorem esse voluptates perspiciatis tempore ex. Unde harum reprehenderit culpa aliquid assumenda repellat nulla molestias repudiandae expedita commodi? Omnis, tempore?
                </p>
        </div>
      </div>
    </div>
  )
}

export default SingPost
