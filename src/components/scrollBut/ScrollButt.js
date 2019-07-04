import React, { Component } from 'react';
import './sty.css';


const handleClick = () => {
 window.scrollTo({
  top: 0,
  behavior: 'smooth'
 })
}

const ScrollBut = ({state}) => {
  return <button className="scrollBut" onClick={handleClick}>Top</button>
}

export default ScrollBut;