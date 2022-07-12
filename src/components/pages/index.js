import React from 'react';
import '../pages/home.css';

import homeBackround from '../pics/Arenal_Volcano.jpg';
  
const Home = () => {
  return (
    <body id='homeContainer'>
      <img id='homePic' src={homeBackround} alt="theBackround"/>
        <div className='insideHome'>
            There is No Place Like Home<br></br>
            But get out and Travel!
        </div> 
    </body>
  );
};
  
export default Home;