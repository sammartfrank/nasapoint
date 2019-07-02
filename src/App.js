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
    showPanels: false

  }
  this.handleScroll = this.handleScroll.bind(this);
 }

 componentDidMount() {
  window.addEventListener('scroll', this.handleScroll)
 }

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
  // TODO:
    // MODALS for Image Library
    // Image Description to long, view more button.
    //padding on modals

 render() {
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
    </div>
   )
 }
}
export default App;