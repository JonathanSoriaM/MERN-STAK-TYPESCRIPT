import React from 'react'
import Videos from '../interfaces/Videos'
import ReactPlayer from 'react-player'
import './VIdeoItem.css'
import {useNavigate} from 'react-router-dom'
import * as videoService from '../services/VideoService'


interface Props {
    video: Videos;
    loadVideos :() => void;
}


function VideoItem({video,loadVideos} : Props) {

  const handleDelete = async (id:string) =>{
    await videoService.deleteVideo(id)
    loadVideos();
    }
    
  const history = useNavigate()  
  return (
    <div className='col-md-4'>
         <div 
         className="card card-body video-card"
        
         >
       
       <div className='d-flex justify-content-between'>
       <h1  onClick={()=> history(`/update/${video._id}`)}>{video.title}</h1>
          <span className='text-danger' onClick={()=> video._id && handleDelete(video._id)}> x</span>
          
       </div>
          <h3>{video.description}</h3>
        
          <div className="embed-reponsive embed-responsive-16by9">
          <ReactPlayer  url={video.url}/>
          </div>
         </div>
     </div>
  )
}

export default VideoItem