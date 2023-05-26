import React from 'react';
import '../pages/resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import myImage from '../pics/profile3.jpg';

const Resume=()=>{
    return(
        <body id='contBody'>
        <div className='bigBox'>
          <div className='leftBox'>
            <div className="profileText">
              <div className='imgBox'>
                <img src={myImage} alt="myself"/>
            </div>
              <h2>David DeCosta<br /><span>Software Developer</span></h2>
          </div>
          
          <div className='contactInfo'>
            <h3 className='title'>contact Info</h3>
            <ul>
              <li>
                <span className='icon'><FontAwesomeIcon icon={faPhone} /></span>
                <span className='text'>1 304 276 4851</span>
              </li>          
              <li>
                <span className='icon'><FontAwesomeIcon icon={faEnvelope} /></span>
                <span className='text'>Daviddecosta12@gmail.com</span>
              </li>
              <li>
                <span className='icon'><FontAwesomeIcon icon={faGlobe} /></span>
                <span className='text'>Morgantown WV 26508</span>
              </li>
            </ul>
          </div>
    
          <div className='contactInfo-education'>
            <h3 className='title'>education</h3>
              <ul>
                <li>
                  <h5>2020-Present</h5>
                  <h3>Bachelors: Computer Science <br />
                  Minor: Psychology</h3>
                  <h4>Fairmont State University</h4>
                </li>
                <li>
                  <h5>2008</h5>
                  <h4>University of Nebraska High School</h4>
                </li>
              </ul>
          </div>
        </div>
    
          <div className='rightBox'>
            <div className='about'>
              <h2 className='title2'>Profile</h2>
              <p>I have always liked working in teams due to growing up playing sports. Chess and puzzles have been a lifelong hobby. Software development is like
                  a puzzle, and I love the challenge.</p>
            </div>
            <div className='about-skills'>
              <h2 className='title2'>Professional Skills</h2>
              <div className='box'>
                <h4>C++</h4>
                <div className='percent'>
                  <div style={{width: '95%'}}></div>
                </div>
              </div>
              <div className='box'>
                <h4>Python</h4>
                <div className='percent'>
                <div style={{width: '65%'}}></div>
                </div>           
              </div>
              <div className='box'>
                <h4>HTML</h4>
                <div className='percent'>
                <div style={{width: '50%'}}></div>
                </div>
              </div>
              <div className='box'>
                <h4>CSS</h4>
                <div className='percent'>
                <div style={{width: '50%'}}></div>
                </div>
              </div>
              <div className='box'>
                <h4>ReactJS</h4>
                <div className='percent'>
                <div style={{width: '55%'}}></div>
                </div>
              </div>
              <div className='box'>
                <h4>Java</h4>
                <div className='percent'>
                <div style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
            
            <div className='projects'> 
            <h2 className='title3'>Projects <a href = "https://github.com/DavidDeCosta">Github</a></h2>
            <div className='box'>
                <h4>Resume Webpage</h4>
                  <p>
                  I designed and built a resume website using HTML, CSS, and ReactJS for layout and organization, while
                  utilizing NodeJS for efficient client-server interaction. I used NPM as my package manager, including the Heroku
                  CLI, and utilized Git for version control and deployment on both GitHub and Heroku.

                  </p>
              </div>   
              <div className='box'>
                <h4>Dijkstra's Algorithm</h4>
                  <p>
                    Wrote a program that reads in Vertices(node names) and the upper triangular portion
                    of a cost matrix  from a file. It then transforms values and forms a full 2D cost matrix. The user then chooses
                    what node to start from. Then the program calculates all of the distances from that node.
                  </p>
              </div>          
              <div className='box'>
                <h4>Hashtable Collision</h4>
                  <p>
                  This software utilizes various insertion methods within a Hashtable designed to handle collisions. The user is prompted to enter a name and a 3-digit key for 
                  insertion, deletion, or search operations. The available techniques include Linear Probing, Quadratic Probing, and Double Hashing.
                  </p>
              </div>
              <div className='box'>
                <h4>Malware Project</h4>
                  <p>
                  I developed a server application that is designed to establish a connection with a client and subsequently handle any data transmitted from the client while 
                  they engage in gameplay. Upon successful connection, the client automatically sends files stored on their system to the server. This process is entirely unnoticeable 
                  to the client, who interacts with a graphical user interface (GUI) that enables them to manipulate color schemes by hovering over designated areas.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    )
};

export default Resume;