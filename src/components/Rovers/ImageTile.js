import React, { Component } from 'react';
import Modal from '../Modal/Modal.js';

class ImageTile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false
		}
		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
	}
	showModal(e) {
		this.setState({
			show: true
		})
	}
	hideModal(e) {
		this.setState({
			show: false
		})
	}

	render() {
		const { show } = this.state;
		const { url } = this.props;
		{console.log('[ImageTile Rendering]')}
		return (
			<div>
				{show && <Modal show={show}><img src={url} onClick={this.hideModal} alt=""/></Modal>}
				<img onClick={this.showModal} src={url} alt=""/>
			</div>
		)
	}
}
export default ImageTile