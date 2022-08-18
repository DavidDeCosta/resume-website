import React from 'react';
import '../pages/about.css';


const About=()=>{
    return(
        <body id='aboutContainer'>
            <video src='/videos/video-2.mp4' loop autoPlay muted playsinline="true" disablePictureInPicture="true" autoplay="autoplay" />
        <div className='inside'>
            <i></i>
            My name is David DeCosta and I want to make the world a better place for my family.<br></br>
            Technology has many pros and cons but the pros far outweigh the cons.<br></br>
            Software has and will continue to be an amazing solution to many problems and I want to be part of the solution.<br></br>
            After years of working various jobs including being a personal Trainer, Manager of a Mobile detailing company,
             CDL Truck driver, and working at several different restaurants I have found my passion.
        </div>
        </body>
    );
}

export default About;