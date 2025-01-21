import React from "react"

function Modal(props){
  let d = props.data;
  let c = props.index

  return(
    <div className="modal-bl">
    <div className="modal">
      <img src={d[c].image}></img>
      <h4>{d[c].content}</h4>
      <p>{d[c].price}</p>
      <button onClick={()=>{
        props.setShowModal(false)
      }}>닫기</button>
    </div>
    </div>
  );
}

export default Modal;