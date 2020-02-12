import React, { useContext } from "react";
import { Box, Button } from "grommet";
import PropTypes from "prop-types";
import NoteForm from "../notes/NoteForm";
import NoteCard from "../notes/NoteCard";
import Resources from "../resources/Resources";
import Coffee from "../coffee/Coffee";
import { StateProvider } from "../utils/StateContext";

import "./App.css";
import "bulma/css/bulma.css";
import { AuthContext } from "../../auth/auth";

export default function Dashboard({ history }) {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <>
      <div
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
         <h1 className="brand">Spit Bawlin</h1>
        <Box direction="row" align="center" justify="center">
       
          <div>
            <div className="welcome">
              OH HEY, {user.name.split(" ")[0]}
              
                GET READY TO SPIT BAWL...{" "}
              
            </div>
            
          </div>
        </Box>
      </div>
      <div className="App">
      <StateProvider>
        
        <br></br>
        <div className="columns">
          <NoteForm
            // state={state}
            // changeState={changeState}
            // submitNote={submitNote}
          />
          <div className="columns form-coffee">
          <Coffee />
        </div>
        </div>
        <br></br>
        <NoteCard />
        <br></br>
        <Box direction="row" align="center" justify="center">

        <Resources />
        <Button primary
              onClick={e => {
                e.preventDefault();
                logoutUser();
              }}
              label="Logout"
            />
        </Box>
        <br></br>
      </StateProvider>
 
    </div>
      
    </>
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

