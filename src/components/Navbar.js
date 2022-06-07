import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Contact from './Contact';
import About from './About';
import Home from './Home';


export default function Navbar() {
    return(
        <Router>
        <div className='Navbar'>
          <nav>
            <ul>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/Home' element={<Home />} />
          </Routes>
          <Routes>
            <Route path='/Contact' element={<Contact />} />
          </Routes>
          <Routes>
            <Route path='/About' element={<About />} />
          </Routes>
        </div>
      </Router>
    );
};