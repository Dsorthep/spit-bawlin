import React from "react";
import { useStateValue } from "../utils/StateContext";
import "bulma/css/bulma.css";
// import PostIt from "./post-it.jpg";

export default function NoteCard() {
  const [globalState, dispatch] = useStateValue();
  return (
    <div className="tile is-ancestor">
      {globalState.notes.map((note, i) => (
        <div className="tile is-parent" key={i + "-note"}>
          <article className="tile is-child box">
            <p className="title">{note.title}</p>
            <p className="subtitle">{note.date}</p>
            <div className="content">
              <p>{note.text}</p>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
