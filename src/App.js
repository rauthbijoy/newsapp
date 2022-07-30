import React, { Component } from 'react'
import NavBar from './component/NavBar'
import News from './component/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  constructor(){
    super();
    console.log('this is the constructor from app.js')
    this.state = {
      pageSize: 4,
      country: 'in'    //setting the state for country and pagesize
    }
  }
  render() {
    return (
      <div>
        {/*have to provide a uniques key for everyone to jump from one category to another category if wrapped in a single <Routes> func otherwise can use multiple routes to work with.*/}
        <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<News pageSize={this.state.pageSize} country={this.state.country} category='general'/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/business" element={<News pageSize={this.state.pageSize} country={this.state.country} category='business'/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/entertainment" element={<News pageSize={this.state.pageSize} country={this.state.country} category='entertainment'/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/health" element={<News pageSize={this.state.pageSize} country={this.state.country} category='health'/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/science" element={<News pageSize={this.state.pageSize} country={this.state.country} category='science'/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/sports" element={<News pageSize={this.state.pageSize} country={this.state.country} category='sports'/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/technology" element={<News pageSize={this.state.pageSize} country={this.state.country} category='technology'/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
