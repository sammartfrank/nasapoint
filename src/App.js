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
  this.handleScroll = this.handleScroll.bind(this)
 }
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
  // TODO:
  // MODALS
  // DYNAMIC STICKY HEADER

 render() {
  const { showPanel } = this.state
  {console.log('[App Rendering]')}
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