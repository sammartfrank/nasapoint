import React from 'react'


const LoadingImgs = (props) => {
 return (
   <div className="loader">
    <h1>Talking to Nasa using keyword:
    	<span style={{color: 'darkred'}}>
    		{props.keyword ? (props.keyword).toUpperCase() : 'No keyword provided'}
     </span>
    </h1>
   </div>
  )
}
export default LoadingImgs;