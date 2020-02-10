import React, { useState, useEffect } from "react";
import { useStateValue } from "../utils/StateContext";
import { CONSTANTS } from "../utils/CONSTANTS";
import "bulma/css/bulma.css";

export default function NoteForm(props) {
  const [globalState, dispatch] = useStateValue();
  const [state, setState] = useState({
    title: "",
    date: "",
    text: ""
  });

  useEffect(() => {
    // make API call to get all notes
    // dispatch notes to global state
  }, []);

  const changeState = (key, value) => {
    setState({ ...state, [key]: value });
  };
  const submitNote = () => {
    dispatch({
      type: CONSTANTS.APPEND_NOTE,
      payload: state
    });
  };
  // const [noteTitle, setNoteTitle] = useState("");
  // const [noteDate, setNoteDate] = useState("");
  // const [noteText, setNoteText] = useState("");

  return (
    <>
      <div className="note-form">
        <br></br>
        <h1 className="note-form-title">Create a new note!</h1>
        <br></br>
        <br></br>
        <div className="field-create-note">
          {/* <label className="label">Name</label> */}
          <div className="control">
            <input
              className="input note-title"
              type="text"
              value={state.title}
              onChange={e => changeState("title", e.target.value)}
              placeholder="TITLE OF YOUR NOTE"
            ></input>
          </div>
        </div>
        <div className="field-create-note">
          {/* <label className="label">Name</label> */}
          <div className="control">
            <input
              className="input note-date"
              type="datetime-local"
              value={state.date}
              onChange={({ target }) => changeState("date", target.value)}
              placeholder="DATE AND TIME OF EVENT"
            ></input>
          </div>
        </div>
        <div className="field-create-note">
          {/* <label className="label"></label> */}
          <div className="control">
            <textarea
              className="textarea note-text"
              value={state.text}
              onChange={({ target }) => changeState("text", target.value)}
              placeholder="WRITE YOUR NOTE..."
            ></textarea>
          </div>
        </div>
        <div className="field-create-note">
          <div className="control">
            <button
              className="button note-submit-btn is-black"
              onClick={submitNote}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
