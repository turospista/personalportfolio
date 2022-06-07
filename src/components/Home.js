import React from "react";
import { motion } from "framer-motion";
import {Button, Stack} from '@mui/material/';

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
  
    return (
        <div className="App">
  
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
        <div>
            <Stack direction="row" spacing={2}>
                <Button href='./Contact' variant="outlined" color='inherit' >Contact me</Button> 
            </Stack>
        </div>
    </div>
  );
}

export default Home;