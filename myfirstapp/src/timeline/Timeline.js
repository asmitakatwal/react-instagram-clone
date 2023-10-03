import React from 'react';
import "./Timeline.css"
import Suggestions from "./suggestions"
import Post from "./posts/post"

import {useState} from 'react'



function Timeline() {
    const [posts, setPosts]=useState([
        {
            user: "mbappe",
            postImage: "https://images.unsplash.com/photo-1599421498111-ad70bebb536f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
            likes:12,
            timestamp:"2d"
        },
        {
            user: "neymar",
            postImage: "https://images.unsplash.com/photo-1548291616-bfccc8db731d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1254&q=80",
            likes:56,
            timestamp:"12h"
        },
        {
            user: "messi",
            postImage: "https://media.istockphoto.com/id/1415253925/photo/beautiful-ornamental-garden.jpg?s=612x612&w=is&k=20&c=tmjUtmeBwnSBuCX3RjqoaJU4hGWf6GFzb0CdSUUAXLo=",
            likes:455,
            timestamp:"7h"
        },
        {
            user: "ronaldo",
            postImage: "https://images.unsplash.com/photo-1592339078319-1f8cc9d67888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
            likes:77,
            timestamp:"5d"
        }
    ])

    
  return (
    <div className="timeline"> 

    <div className="timeline__left">
        <div className="timeline__post">
            
        {posts.map((post, index) => (
            <Post

              user={post.user}
              postImage={post.postImage}
              like={post.likes}
              timestamp={post.timestamp}
            />
          ))}

 

        </div>
    </div>
    <div className="timeline__right">
        <Suggestions />
    </div>

    </div>
  )
}

export default Timeline

