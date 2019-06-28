import React, { Component } from 'react';
import '../public/favicon.ico';
import 'babel-polyfill';
import Header from './components/Header/Header.js';
import Apod from './components/Apod/Apod.js';
import Rover from './components/Rovers/Rovers.js';
import ImComp from './components/ImComp/ImComp.js';
import ScrollBut from './components/scrollBut/ScrollButt.js';
import './App.css';


class App extends Component {
 constructor(props) {
  super(props)
  this.state = {
    visible: false
  }
  this.handleScroll = this.handleScroll.bind(this)
 }
 handleScroll() {
   if (window.scrollY > 350) {
    this.setState({
      visible: true
    })
   }
   else {
    this.setState({
      visible: false
    })
   }
  }
  // TODO:
  // MODALS
  // DYNAMIC STICKY HEADER

 render() {
  document.body.onscroll = this.handleScroll;
  const { visible } = this.state
  return (
    <div className="container">
      <div>
       <Header state={visible}/>
       <div>
        <Apod />
        <Rover />
        <ImComp />
       </div>
       { visible && <ScrollBut />} 
      </div>
    </div>
   )
 }
}
export default App;