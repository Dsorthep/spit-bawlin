import React from "react";
import { Link } from "react-router-dom";
import { Box } from "grommet";
import "./Landing.css"

export default function() {
  return (
    <div className= "landing">
    <div style={{ height: "75vh" }}>
      <Box align="center" justify="center">
        
          <span style={{ fontFamily: 'Exo, sans-serif' , fontSize: "50px", paddingTop: "20px", color: "black", paddingTop: "90px" }}>
  
        
        <br />
        <br />
        Welcome to 
        </span>
       <br />
       <br />
        <span style={{ fontFamily: 'Damion, cursive' , fontSize: "75px", paddingTop: "20px", color: "black", textShadow: "white -1px 1px 2px" }}>

        Spit Bawlin!
       </span>   
        
       
        </Box>
        <br />
        <Box align="center" justify="center">
        <div>
            <br />
            <br />
            <br />
          
          <Link
            to="/register"
            style={{
              width: "140px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              fontSize: "50px",
              color: "white",
              textShadow: "black -1px 1px 2px"
              
            }}
          >
            Register
           
          </Link>
        </div>
        <div>
            <br />
            <br />
            <br />
          <Link
            to="/login"
            style={{
              width: "140px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              fontSize: "50px",
              color: "white",
              textShadow: "black -1px 1px 2px",
              fontFamily: 'Exo, sans-serif'
            }}
          >
            Log In
          </Link>
        </div>
      </Box>
    </div>
    </div>
  );
}
