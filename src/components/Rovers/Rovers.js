import React, { Component } from 'react';
import { getImags } from '../../utils/Nasapi.js';
import LoadingRover from '../Loading/LoadingRover.js';
import './rovers.css';

class Rovers extends Component {
  constructor(props) {
  super(props);
  this.state = {
   rover: 'curiosity',
   sol: 0,
   camera: 'fhaz',
   loadingB: false,
   values: {}
  }

  this.handleChange = this.handleChange.bind(this);
  this.handleCamera = this.handleCamera.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this)
  this.handleClick = this.handleClick.bind(this);
  }

  handleCamera(e) {
   this.setState({
    camera: e.target.value
   })
  }
  handleChange(e) {
   this.setState({
    rover: e.target.value
   })
  }
  handleInputChange(e){
   this.setState({
    sol: e.target.value
   })
  }
  handleClick(e) {
   const { rover, sol, camera } = this.state;
   e.preventDefault()
   this.setState({
    loadingB: true
   })
   getImags(rover, sol, camera).then(data => {
    this.setState({
     values: data,
     loadingB: false
    })
   })
  }
  render() {
   console.log('[DATA ON ROVER]', this.state);
   const { rover, sol, camera, loadingB, values } = this.state;
   return (
    <div className="rover-container">
     <h1>Rover Photos</h1>
     <h2>Select Rover</h2>
     <select value={rover} onChange={this.handleChange} name="rovers" id="rovers">
      <option value="curiosity">Curiosity</option>
      <option value="opportunity">Opportunity</option>
      <option value="spirit">Spirit</option>
     </select>
     <h2>Select Camera</h2>
     <select  value={camera} onChange={this.handleCamera} name="cameras" id="cameras">
      <option value="fhaz">Front Hazard Avoidance Camera</option>
      <option value="rhaz">Rear Hazard Avoidance Camera</option>
      <option value="mast">Mast Camera</option>
      <option value="chemcam">Chemistry and Camera Complex</option>
      <option value="mahli">Mars Hand Lens Imager</option>
      <option value="mardi">Mars Descen Imager</option>
      <option value="navcam">Navigation Camera</option>
      <option value="pancam">Panoramic Camera</option>
      <option value="minites">Miniature Thermal Emission Spectrometer</option>
     </select>
     <h2>Set Martian Sol: (0-4000)</h2>
      <input onChange={this.handleInputChange} value={sol} type="number"/>
      <br/>
      <br/>
      <button onClick={this.handleClick}>Search Images</button>
      <br/>
       {loadingB && <LoadingRover rover={this.state.rover}/>}
      <div className="images">
       {values.photos && values.photos.map(p=> <div key={p.id} className="roverimg">
        <img src={p.img_src} alt=""/>
       </div>)}
       {values.photos < 1 && <div>
         <h3>No Photos to show</h3>
       </div>}
      </div>
    </div>
  );
  }
 }

export default Rovers;