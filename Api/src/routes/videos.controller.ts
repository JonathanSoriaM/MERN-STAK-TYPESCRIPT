import { RequestHandler, Response} from "express"
import Video from './Video'

// retorna todos los videos
export const getVideos : RequestHandler = async (req,res) => {
   try {
       const videos = await Video.find();
       return res.json(videos);
   } catch (error) {
       res.json(error)
   }
}

// retorna un video en especifico
export const getVideo : RequestHandler = async (req,res) => {
    const videoFound = await Video.findById(req.params.id);
    if(!videoFound) return res.status(204).json();
 
    return res.json(videoFound);
}


//borra un video en especifico
export const deleteVideo : RequestHandler = async (req,res) => {
   const videoFound = await Video.findByIdAndDelete(req.params.id);
   if(!videoFound) return res.status(204).json();
   return res.status(204).json();
}


//actualiza un video
export const updateVideo : RequestHandler = async (req,res):
Promise<Response> => {
    const videoUpdated = await Video.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
    })
    if(!videoUpdated) return res.status(204).json();
    return res.json(videoUpdated);
}
   



//crea un video
export const createVideo : RequestHandler = async (req,res) => {   
    const video = new Video(req.body);
    const savedVideo = await video.save()
    res.json({
        message: 'Video Saved',
        datos: savedVideo
    })
}