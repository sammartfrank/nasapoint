import React from 'react'
import ig from '../img/nasa.png';
import earth from '../img/earth.png';
import './Header.css'

const Header = ({state}) => {
 return (
  <div className={ `header  ${ state ? 'sticky' : '' }` }>
  	<div className={`blueline ${ state ? 'go' : ''}`}></div>
  	<div className={`darksq ${ state ? 'fish' : ''}`}></div>
  	<div className={`stripes ${ state ? 'going' : ''}`}>
  		<div className='first'></div>
  		<div className='second'></div>
  		<div className='third'></div>
  	</div>
    <img  className={`earth ${ state ? 'up' : ''}`} src={earth} alt="Earth"/>
    <img className="logo" src={ig} alt="NasaLogo"/>
   <h1>NASA API POINT</h1>
  </div>
  )
}
export default Header;