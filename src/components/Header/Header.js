import React from 'react'
import ig from '../img/nasa.png';
import './Header.css'

const Header = ({state}) => {
 return (
  <div className={ `header  ${ state ? 'sticky' : '' }` }>
  	<div className={`redline ${ state ? 'go' : ''}`}></div>
  	<div className={`darksq ${ state ? 'fish' : ''}`}></div>
    <img className="logo" src={ig} alt=""/>
   <h1>NASA API POINT</h1>
  </div>
  )
}
export default Header;