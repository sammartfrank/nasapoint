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
<<<<<<< HEAD
    showPanels: false

=======
    showPanel: false
>>>>>>> 26cfd84498b88f1e11b71c78944c5099cc21f51c
  }
  this.handleScroll = this.handleScroll.bind(this);
 }

 componentDidMount() {
  window.addEventListener('scroll', this.handleScroll)
 }
<<<<<<< HEAD

 shouldComponentUpdate(newProps, newState) {
    // only render if the state has changed
    return this.state.showPanels !== newState.showPanels;
}
componentWillUnmount(){
  window.removeEventListener('scroll', this.handleScroll)
}




 handleScroll(e) {
  e.preventDefault();
  // console.log('[e Scroll Target body]', e.currentTarget.pageYOffset)
  this.setState({
    showPanels: e.currentTarget.pageYOffset > 200
  })
  }
=======
 componentDidMount() {
  window.addEventListener('scroll', this.handleScroll);
 }

 shouldComponentUpdate(nextProps, newState) {
  return this.state.showPanel !== newState.showPanel;
 }

 componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll)
 }

 handleScroll(e) {
  e.preventDefault();
  this.setState({
    showPanel: e.currentTarget.pageYOffset > 200
  })
 }
>>>>>>> 26cfd84498b88f1e11b71c78944c5099cc21f51c
  // TODO:
    // MODALS for Image Library
    // Image Description to long, view more button.
    //padding on modals

 render() {
<<<<<<< HEAD
  const { showPanels } = this.state
  return (
    <div className="container">
      <div>
          <Header state={showPanels}/>
          <Apod/>
          <Rover />
          <ImComp />
       { showPanels && <ScrollBut />} 
      </div>
=======
  const { showPanel } = this.state
  {console.log('[App Rendering]')}
  return (
    <div className="container">
        <Header state={showPanel}/>
        <Apod />
        <Rover />
        <ImComp />
       { showPanel && <ScrollBut state={showPanel}/>} 
>>>>>>> 26cfd84498b88f1e11b71c78944c5099cc21f51c
    </div>
   )
 }
}
export default App;