import React, { useState, useEffect } from "react";
import { useStateValue } from "../utils/StateContext";
import { CONSTANTS } from "../utils/CONSTANTS";
import "bulma/css/bulma.css";
import Modal from "./Modal";

import link from "../../assets/link.png";



export default function Resources() {

    const [show, setShow] = useState(false);
    
    function showModal() {
        setShow(true);
    };

    function hideModal() {
        setShow(false);
    };
    const [globalState, dispatch] = useStateValue();
  const [state, setState] = useState({
    title: "",
    url: ""
  });

  useEffect(() => {
    // make API call to get all notes
    // dispatch notes to global state
  }, []);

  const changeState = (key, value) => {
    setState({ ...state, [key]: value });
  };
  const submitResource = () => {
    dispatch({
      type: CONSTANTS.APPEND_RESOURCE,
      payload: state
    });
  };
        
   
    
        return (
            <>
            <div className="resource-form">
        <br></br>
        <h1 className="resource-form-title">Add a resource!</h1>
        <br></br>
        <br></br>
        <div className="field-create-resource">
          <div className="control">
            <input
              className="input resource-title"
              type="text"
              value={state.title}
              onChange={e => changeState("title", e.target.value)}
              placeholder="TITLE OF YOUR RESOURCE"
            ></input>
          </div>
        </div>
        <div className="field-create-resource">
          <div className="control">
            <input
              className="input resource-url"
              type="url"
              value={state.url}
              onChange={({ target }) => changeState("url", target.value)}
              placeholder="RESOURCE LINK"
            ></input>
          </div>
        </div>
        <div className="field-create-resource">
          <div className="control">
            <button
              className="button resource-submit-btn is-black"
              onClick={submitResource}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
            
            <div className="resource-icon">
            <h1 className="resource-icon-title">YOUR RESOURCES</h1>
            <img src={link} onClick={showModal} alt="HTML" />
            </div>
            {/* <div className="columns">
            <div className="column resource-icon">
            <img src={htmlIcon} onClick={showModal} alt="HTML" />
            </div>
            <div className="column resource-icon">
            <img src={cssIcon} onClick={showModal} alt="HTML" />
            </div>
            <div className="column resource-icon">
            <img src={jsIcon} onClick={showModal} alt="HTML" />
            </div>
            <div> */}
                <Modal show={show} handleClose={hideModal}>
                </Modal>
                
            {/* </div>
            </div> */}
            </>
        )
    }

    // Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>


//     const Modal = ({ children, closeModal, modalState, title }) => {
//         if(!modalState) {
//           return null;
//         }
        
//     return (
//         <>
//         <div className="columns">
        
// <div className="modal">
//   <div className="modal-background" onClick={closeModal} />
//   <div className="modal-card">
//     <header className="modal-card-head">
//       <p className="modal-card-title">{title}</p>
//       <button className="delete" onClick={closeModal} />
//     </header>
//     <section className="modal-card-body">
//     <div className="content">
//         {children}
//     </div>
//     </section>
//     <footer className="modal-card-foot"> 
//       {/* <button class="button is-success">Save changes</button>
//       <button class="button">Cancel</button> */}
//     </footer> 
//   </div>
// </div>
        
// <br></br>
// <div className="column resource-icon">
//   <img src={cssIcon} alt="CSS" />
// </div>
// <div className="modal">
//   <div className="modal-background" onClick={closeModal} />
//   <div className="modal-card">
//     <header className="modal-card-head">
//       <p className="modal-card-title">{title}</p>
//       <button className="delete" onClick={closeModal} />
//     </header>
//     <section className="modal-card-body">
//     <div className="content">
//         {children}
//     </div>
//     </section>
//     <footer className="modal-card-foot"> 
//       {/* <button class="button is-success">Save changes</button>
//       <button class="button">Cancel</button> */}
//     </footer> 
//   </div>
// </div>
// <br></br>
// <div className="column resource-icon">
//   <img src={jsIcon} alt="JS" />
// </div>
// <div className="modal">
//   <div className="modal-background" onClick={closeModal} />
//   <div className="modal-card">
//     <header className="modal-card-head">
//       <p className="modal-card-title">{title}</p>
//       <button className="delete" onClick={closeModal} />
//     </header>
//     <section className="modal-card-body">
//     <div className="content">
//         {children}
//     </div>
//     </section>
//     <footer className="modal-card-foot"> 
//       {/* <button class="button is-success">Save changes</button>
//       <button class="button">Cancel</button> */}
//     </footer> 
//   </div>
// </div>
// </div>
// </>
//     );
// }


  
  
  
  

