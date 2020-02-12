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
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styled from "styled-components";


export default function Dashboard({ history }) {
  const { user, logoutUser } = useContext(AuthContext);
  const headerProps = { text: 'I\'m styled' };
  const scope = {styled, headerProps};
  const code = `
  const Header = styled.div\`
    color: palevioletred;
    font-size: 18px;
    \`
    render(<Header>{headerProps.text}</Header>)
    `
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
     <LiveProvider code={code} scope={scope} noInline={true}>
       <LiveEditor style={{
       backgroundColor: "#2e2d2d",
       height: 400,
       width: 600,
       marginTop: 50,
       marginLeft: 100,
       borderRadius: 4
       
     }}/>
       <LiveError />
       <LivePreview />
     </LiveProvider>
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

