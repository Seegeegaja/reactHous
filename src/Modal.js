import React from "react"

function Modal(props){
  let d = props.data;
  let c = props.index

  return(
    <div className="modal">
      <img src={d[c].image}></img>
      <h4>{d[c].content}</h4>
      <p>{d[c].price}</p>
    </div>
  );
}

export default Modal;