import React, { Component } from 'react';
import ImageTile from './ImageTile.js';
import './modsty.css';

const Modal = ({ url, show, hidemodal }) => {
 const showHideClassName = show ? 'modal display-block' : 'modal display-none';
 return (
  <div className={showHideClassName}>
   <section className="modal-main">
    <ImageTile  hidemodal={hidemodal} url={url} />
   </section>
  </div>
  )
}
export default Modal;