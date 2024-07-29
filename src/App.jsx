import { useState,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Data from './Data'
import Response from './Response'
import AfterTranslate from './AfterTranslate'

function App() {
  const videoRef = useRef(null)

  const video = 'https://cdn.dribbble.com/userupload/13531242/file/original-d3f7f8e6e1f7a4e148909f15fbeb5b37.mp4'
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.1;
     } 
  }, [videoRef])
  
  return (
    <div className="app-container ">
      <video autoPlay loop ref={videoRef}  className="background-video"  >
        <source src={video}  type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <Navbar /> <br /><br />
        <Response />
        {/* <Data /> */}
      </div>
    </div>
  )
}

export default App
