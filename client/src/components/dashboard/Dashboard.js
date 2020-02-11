import React, { useContext } from "react";
import { Box, Button } from "grommet";
import PropTypes from "prop-types";
import NoteForm from "../notes/NoteForm";
import NoteCard from "../notes/NoteCard";
import Resources from "../resources/Resources";
import Coffee from "../coffee/Coffee";
import { StateProvider } from "../utils/StateContext";
// import * as Animatable from "react-native-animatable";
// import styled from "styled-components/native";
import "./App.css";
import "bulma/css/bulma.css";
import { AuthContext } from "../../auth/auth";



export default function Dashboard({ history }) {
  const { user, logoutUser } = useContext(AuthContext);
  // const StyledText = Animatable.createAnimatableComponent(styled.Text);

  return (
    <>
                  <h1 className="brand">Spit Bawlin</h1>

      <div
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
                  

        <Box direction="row" align="center" justify="center">
          <div>
            
            
          </div>
        </Box>
      </div>
      <div className="App">
      <StateProvider>
      <h4>
              <b>OH HEY,</b> {user.name.split(" ")[0]}
              <p>
                GET READY TO SPIT BAWL...{" "}
              </p>
            </h4>
        <br></br>
        <div className="columns form-coffee">
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
        <Resources />

        <br></br>
      </StateProvider>
      <Button
              onClick={e => {
                e.preventDefault();
                logoutUser();
              }}
              label="Logout"
            />
    </div>
    
    </>
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

