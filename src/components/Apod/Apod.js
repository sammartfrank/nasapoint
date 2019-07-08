import React, { Component } from 'react';
import Loading from '../Loading/Loader.js';
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
  this.showModal = this.showModal.bind(this);
  this.hideModal = this.hideModal.bind(this);
 }
 componentDidMount() {
  getApod().then( data => {
   this.setState({
     apod: data,
     loading: false
   });
  });
 }
 showModal(e) {
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
  const { apod, loading, show } = this.state;
  return (
   <div className='apod-container'>
      {loading && <Loading text='Taking a Picture' speed={200} />}
      <h1>{apod.title}</h1>
      <div className="imge">
        {show && <Modal show={show} hidemodal={this.hideModal}><img  style={{width: '100%'}} src={apod.hdurl} onClick={this.hideModal} alt=""/></Modal>}
        {apod.media_type === 'video' ? <iframe src={apod.url}></iframe> : <img onClick={this.showModal} src={apod.hdurl} alt=""/>}
      </div>
      <p>{apod.explanation}</p>
   </div>
   )
 }
}
export default Apod;