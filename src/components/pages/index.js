import React from 'react';
import '../pages/home.css';
  
const Home = () => {
  return (
    <body id='homeContainer'>
      <video src='.../videos/video-1.mp4' autoPlay loop muted />
        <div className='insideHome'>
            There is No Place Like Home<br></br>
            But get out and Travel!
        </div> 
    </body>
  );
};
  
export default Home;