import React, { ChangeEvent, useState ,  FormEvent , useEffect} from 'react'
import Videos from '../interfaces/Videos'
import * as videoService from '../services/VideoService'
import { toast } from 'react-toastify';
import {useNavigate , useParams} from 'react-router-dom'
 

interface Params {
  id?: string;
}

function VideoForm() {
  
const history = useNavigate()  
const params = useParams();

const initialState = {title: '', description:'',url:''}

const [video, setVideo] = useState<Videos>(initialState)

const handleInputChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setVideo({
    ...video,
    [e.target.name]:e.target.value
  })
}


const handleSubmit = async (e : FormEvent<HTMLFormElement>) =>{
e.preventDefault();

if(!params.id) {
  const resp = await videoService.createVideo(video);
toast.success('New Video added');
setVideo(initialState)
}
else{
  await videoService.updateVideo(params.id,video)
}

history('/')

}

const getVideo = async (id:string) => {
 const resp= await videoService.getVideo(id)
const {title , description , url} = resp.data;
setVideo({title,description,url})
}

useEffect(()=>{
  if(params.id) getVideo(params.id)
},[])

  return (
  <div className="row">
    <div className="col-md-4 offset-md-4">
     <div className="card">
       <div className="card-body">
         <h3>New Video</h3>

         <form onSubmit={handleSubmit}>

          <div className="input-group mb-3">  
          <input type="text" 
           name='title' 
           placeholder='White a title for this video' 
           className='form-control' 
           onChange={handleInputChange}
           value={video.title}
           autoFocus
           />
           
           </div>

           <div className="input-group mb-3">  
          <input type="text" 
           name='url' 
           onChange={handleInputChange}
           value={video.url}
           placeholder='https://somesite.com' 
           className='form-control' 
           />
           
           </div>

           <div className="input-group mb-3">
             <textarea
              name="description" 
              rows={3}
              value={video.description}
              className="form-control"
              placeholder='white description'
              onChange={handleInputChange}
              >

              </textarea>
           </div>
    {
      params.id ? (
      <button className='btn btn-info'> Update Video </button>
      ):(
      <button className='btn btn-primary'> Create Video </button>
      )}

         </form>
       </div>
     </div>
    </div>
  </div>
  )
}

export default VideoForm