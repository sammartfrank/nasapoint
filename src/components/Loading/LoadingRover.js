import React from 'react';
const LoadingRover = (props) => {
 return (
   <div className="loader">
    <h1>Talking To Rover <span style={{color:'darkred'}}>{(props.rover).toUpperCase()}</span></h1>
   </div>
  )
}

export default LoadingRover;