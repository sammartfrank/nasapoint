import React, { Component } from 'react';
import Modal from '../Modal/Modal.js';
import LoadingApod from '../Loading/LoadingApod.js';
import { getApod } from '../../utils/Nasapi.js';
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
 componentDidMount() {
  getApod().then( data => {
   this.setState({
     apod: data,
     loading: false
   });
  });
 }
 render() {
  const { apod, loading, show } = this.state;
  {console.log('[Apod Rendering')}
  return (
   <div className="apod-container">
      {loading && <LoadingApod  />}
      <h1>{apod.title}</h1>
      <div>
      <div className="video">
        {apod.media_type === 'video' && <iframe src={apod.url} frameBorder="0"></iframe>}  
      </div>  
      {show ? <Modal show={show} handleClose={this.hideModal}>
        <img onClick={this.hideModal}  src={apod.hdurl} alt=""/> 
      </Modal> :  <img onClick={this.handleModal} src={apod.hdurl} alt=""/> } 
      </div>
      <p>{apod.explanation}</p>
   </div>
   )
 }
}

export default Apod;