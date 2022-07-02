import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages/about';
import Resume from './components/pages/resume';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/resume' element={<Resume/>} />
    </Routes>
    </Router>
);
}
  
export default App;
