import React, { useEffect ,useState }from 'react'

import axios from 'axios'
import Videos from '../interfaces/Videos'

const API = 'http://localhost:5000'

export const getVideos = async () => {
   return await axios.get<Videos[]>(`${API}/videos`)
    
}
export const createVideo = async (video: Videos) => {
   return await axios.post(`${API}/videos`,video)
    
}
export const getVideo = async (id:string) => {
   return await axios.get(`${API}/videos/${id}`)
    
}
export const updateVideo = async (id:string, video:Videos) => {
   return await axios.put(`${API}/videos/${id}`,video)
    
}

export const deleteVideo = async (id:string) => {
   return await axios.delete(`${API}/videos/${id}`)
    
}