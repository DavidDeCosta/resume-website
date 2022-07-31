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
                  <h3>Bachelors Degree Computer Science</h3>
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
              <p>Programming is not only interesting, but also important for the future. I have always been competitive
                 due to growing up playing sports. Chess and puzzles have been a lifelong hobby. Software development is like
                  a puzzle the way you must get all the pieces together to form the whole product.</p>
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
                <div style={{width: '75%'}}></div>
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
                <div style={{width: '60%'}}></div>
                </div>
              </div>
              <div className='box'>
                <h4>Java</h4>
                <div className='percent'>
                <div style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
            
            <div className='projects'>
              <h2 className='title3'>Projects</h2>
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
                    This program utilizes different insertion techniques into a Hashtable that deals with Collision. The user
                    types in a name and a 3 digit key to either be inserted, deleted, or searched. The different techniques are
                    Linear probing, Quadratic probing, and Double hashing.
                  </p>
              </div>
              <div className='box'>
                <h4>Data Mining</h4>
                  <p>
                    Worked in a team of 3 where we found a large dataset containing over 80,000 rows. Using excel and
                    python scripts we cleaned the noisy data and created more attributes for each tuple. Using the application
                    WEKA we ran different datamining techniques to classify missing data, generate association rules, 
                    and cluster instances.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    )
};

export default Resume;