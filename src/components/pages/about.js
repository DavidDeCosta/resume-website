import React from 'react';
import '../pages/about.css';


const About=()=>{
    return(
        <body id='aboutContainer'>
            <video src='/videos/video-2.mp4' loop autoPlay playsinline="true" disablePictureInPicture="true" autoplay="autoplay" />
        <div className='inside'>
            <i></i>
            My name is David DeCosta and I want to make the world a better place for my Family.<br></br>
            Technology has alot of pro's and con's but the pro's far outweigh the cons.<br></br>
            Software has and will continue to be an amazing solution to many problems and I want to be part of the solution.<br></br>
            After years of working various job including being: A personal Trainer, Manager of a Mobile detailing company, CDL Truck driver,
            and working at a number of different restraunts I have found my passion.
        </div>
        </body>
    );
}

export default About;