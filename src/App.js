import './App.css';
import './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {BsFacebook} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import { motion } from "framer-motion";
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function App() {
  
  return (
    <div className="App">
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
            <Route path='/Contact' element={<Contact />} />
          </Routes>
          <Routes>
            <Route path='/Home' element={<Home />} />
          </Routes>
          <Routes>
            <Route path='/About' element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  const myName = "Hi, I'm Bence."

  const sentence = {
    hidden: {opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  }

  const letter = {
    hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return(
    <div>
      <motion.h1 
        className="load-screen--message"
        variants={sentence}
        initial="hidden"
        animate="visible"
        >
          {myName.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            )
          })}
        </motion.h1>
      <ul>
        <li><a href="https://www.facebook.com/profile.php?id=100010851407178"><BsFacebook /></a></li>
        <li><a href="https://www.linkedin.com/in/bence-kolozsi-t%C3%B3th-4940b2138/"><BsLinkedin /></a></li>
      </ul>
      <div>
        <Stack direction="row" spacing={2}>
          <Button href='./Contact' variant="outlined" color='inherit' >Contact me</Button> 
        </Stack>
      </div>
    </div>
  );
}

export default App;
