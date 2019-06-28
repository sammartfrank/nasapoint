import React, { Component } from 'react';
import LoadingApod from '../Loading/LoadingApod.js';
import { getApod } from '../../utils/Nasapi.js';
import './Apod.css';


class Apod extends Component {
 constructor(props) {
  super(props);
  this.state = {
   apod: {},
   loading: true,
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
 render() {
  const { apod, loading, visible } = this.state;
  return (
   <div className="apod-container">
      {loading && <LoadingApod  />}
      <h1>{apod.title}</h1>
      <div>
       <img src={apod.hdurl} alt=""/>
      </div>
      <p>{apod.explanation}</p>
   </div>
   )
 }
}

export default Apod;