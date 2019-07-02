import React, { Component } from 'react';
import img from '../img/nasa.png';
import './modasty.css'


const Modal = ({show, children}) => {
	const showHideClassName = show ? 'modal display-block' : 'modal display-none';
	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				{console.log('[Modal Rendering]')}
				{children}
			</section>
		</div>
		)
}
export default Modal;