import React, { Component } from 'react';
import LoadingApod from '../Loading/LoadingApod.js';
import { getApod } from '../../utils/Nasapi.js';
import Modal from '../Modal/Modal.js';
import './Apod.css';


class Apod extends Component {
 constructor(props) {
  super(props);
  this.state = {
   apod: {},
   loading: true,
   show:false
  }
  this.handleModal = this.handleModal.bind(this);
  this.hideModal = this.hideModal.bind(this);
 }

 handleModal(e) {
  this.setState({
    show: true
  })
 }
 hideModal() {
    this.setState({
      show: false
    })
  }
 }
 componentDidMount() {
  getApod().then( data => {
   this.setState({
     apod: data,
     loading: false
   });
  });
 }
 showModal() {
  this.setState({
    show: true
  })
 }
  hideModal() {
  this.setState({
    show: false
  })
 }
 render() {
  {console.log('[Apod Rendering]')}
  const { apod, loading, visible, show } = this.state;
  return (
   <div className='apod-container'>
      {loading && <LoadingApod  />}
      <h1>{apod.title}</h1>
      <div className="imge">
        {show && <Modal show={show} hidemodal={this.hideModal} url={apod.hdurl}></Modal>}
        {apod.media_type === 'video' ? <iframe src={apod.url}></iframe> : <img onClick={this.showModal} src={apod.hdurl} alt=""/>}
      </div>
      <p>{apod.explanation}</p>
   </div>
   )
 }
}

export default Apod;