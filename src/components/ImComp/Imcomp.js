import React, { Component } from 'react'
import axios from 'axios';
import { getQuery } from '../../utils/Nasapi.js';
import LoadingImgs from '../Loading/LoadingImgs.js';
import ScrollBut from '../scrollBut/ScrollButt.js';
import './sty.css';


class ImComp extends Component {
 constructor(props) {
    super(props);
    this.state = {
     q: '',
     queryRes: [],
     loading: false,
    }
    this.handleQuery = this.handleQuery.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
 }
 handleQuery(e) {
    e.preventDefault()
    const {q, queryRes} = this.state;
    this.setState({
     loading: true
    })
    getQuery(q).then(data => {
     this.setState({
      queryRes: data.collection,
      loading: false
     })
    })
 }
 handleQueryChange(e){
    this.setState({
     q: e.target.value
    })
 }
 render() {
    const {loading, q, queryRes } = this.state;
    return (
    <div className="search-container">
      <h1>Image Search Engine</h1>
      <form>
       <label style={{fontSize:'1.4em'}} htmlFor="input">Search Images by keyword: </label>
       <input type="text" onChange={this.handleQueryChange} required value={q}/>
       <br/>
       <br/>
       <button onClick={this.handleQuery}>Search</button>
      </form>
      {loading && <LoadingImgs keyword={q}/> }
      <div className="queryImg">
       {queryRes.items && queryRes.items.map(item => <div key={item.data[0].nasa_id}>
          <h2>Results: </h2>
          <h2>{item.data[0].title}</h2>
          {item.links && <img src={item.links[0].href}></img>}
          <p>{(item.data[0].description).replace(/^(?:[a-z]*?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/gi, "")}</p>
         </div>
       )}
      </div>
     </div>
   )
 }
}
export default ImComp;
