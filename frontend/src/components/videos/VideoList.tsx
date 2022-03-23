import React, { useEffect ,useState }from 'react'
import Videos from '../interfaces/Videos'
import * as videoService from '../services/VideoService'
import VideoItem from './VideoItem'




const VideoList = () => {

    const [videos, setVideos] = useState<Videos[]>([])

    const loadVideos = async () => {
       const res = await videoService.getVideos()

       const formatedVideos = res.data.map(video => {
          return {
             ...video,
             createdAt: video.createdAt? new Date(video.createdAt) : new Date(),
             updatedAt :video.updatedAt ? new Date(video.updatedAt): new Date() 
          }
       })
       .sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime() );
        setVideos(formatedVideos);
    }

 useEffect(() => {
    loadVideos()
 
   return () => {
    
   }
 }, [])
 

  return (
   <>
<div className="row">
{videos.map((videos) => {
    return <VideoItem  video={videos} key={videos._id} loadVideos ={loadVideos}/>
 })}
</div>
   </>
  )
}

export default VideoList