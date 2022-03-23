import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import 'bootswatch/dist/pulse/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import VideoList from './components/videos/VideoList';
import VideoForm from './components/videos/VideoForm';
import Navbar from './components/navbar/Navbar';
import  'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

ReactDOM.render(

 
  <BrowserRouter>
      <Navbar />
      <div className="container p-4">
      <Routes>
        <Route path = "/" element={<VideoList />} />  
        <Route path = "/newVideo" element={<VideoForm />} /> 
        <Route path = "/update/:id" element={<VideoForm />} /> 
      </Routes>
      <ToastContainer />
      </div>
     
     
   
  </BrowserRouter>,

 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
