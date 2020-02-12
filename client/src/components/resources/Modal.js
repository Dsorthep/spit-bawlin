import React from "react";
import "bulma/css/bulma.css";
import { useStateValue } from "../utils/StateContext";
import Linkify from "react-linkify";
import { Link } from "react-router-dom";

// import htmlIcon from "../assets/html-icon.png";

export default function Modal({ handleClose, show }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [globalState, dispatch] = useStateValue();

  return (
    <div className={showHideClassName}>
      <section className="modal-main" >
        <ul>
          {globalState.resources.map((resource, i) => (
            <li key={i + "-resource"}>
              <p className="title">{resource.title}</p>
              <Linkify className="subtitle">{resource.url}</Linkify>
            </li>
          ))}
        </ul>
        <button className="modal-close-btn" onClick={handleClose}>
          close
        </button>
      </section>
    </div>
  );
}
