import React, { Component } from 'react';
import img from '../img/nasa.png';
import './modasty.css'


const Modal = ({show, children}) => {
	const showHideClassName = show ? 'modal display-block' : 'modal display-none';
	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				{children}
				<p>[ Click in the image to Exit ]</p>
			</section>
		</div>
		)
}
export default Modal;