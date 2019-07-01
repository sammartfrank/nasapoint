import React from 'react'

const ImageTile = ({url, hidemodal }) => {
 return <img onClick={hidemodal} src={url}></img>
}
export default ImageTile