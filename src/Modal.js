function Modal(props){
  return(
    <div className="modal">
      <h4>{props.content}</h4>
      <p>{props.price}만원</p>
    </div>
  );
}

export default Modal;