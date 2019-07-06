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
    showPanel: false
  }
  this.handleScroll = this.handleScroll.bind(this);
 }

 componentDidMount() {
  window.addEventListener('scroll', this.handleScroll);
  console.log('%c Hello fellow programmer!!, this website was built by Franco Sammartino. Any info you need hit him up through github @sammartfrank. Cheers', 'background: #00000; color: #ffff00')
 }

 shouldComponentUpdate(newProps, newState) {
    // only render if the state has changed
    return this.state.showPanel !== newState.showPanel;
}
componentWillUnmount(){
  window.removeEventListener('scroll', this.handleScroll)
}

 handleScroll(e) {
  this.setState({
    showPanel: e.currentTarget.pageYOffset > 200
  })
  }
  // TODO:
    // MODALS for Image Library
    // Image Description to long, view more button.
    //padding on modals

 render() {
  const { showPanel } = this.state
  return (
    <div className="container">
        <Header state={showPanel}/>
        <Apod />
        <Rover />
        <ImComp />
       { showPanel && <ScrollBut state={showPanel}/>} 
    </div>
   )
 }
}
export default App;