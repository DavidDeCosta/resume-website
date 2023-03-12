import React from 'react';
import '../pages/about.css';


const About=()=>{
    return(
        <body id='aboutContainer'>
            <video src='/videos/video-2.mp4' loop autoPlay muted playsinline="true" disablePictureInPicture="true" autoplay="autoplay" />
        <div className='inside'>
            <i></i>
            My name is David DeCosta and my aspiration is to achieve positive change in society for the benefit of my family and the world at large.The software industry has <br />
             demonstrated its potential as an effective means of addressing critical challenges, and I am eager to contribute to this cause. <br />
            Drawing from my diverse work experience, which encompasses jobs as a personal trainer, a mobile detailing company manager, a CDL truck driver, and employment in <br />
            several restaurants, I have determined that this is the path I wish to pursue.
        </div>
        </body>
    );
}

export default About;