import React, { Component } from 'react'
import NavBar from './component/NavBar'
import News from './component/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

pageSize = 6; country = 'in'; apiKey="f011d18a507a48fcb063644ac134a24c"

  render() {
    return (
      <div>
        {/*have to provide a uniques key for everyone to jump from one category to another category if wrapped in a single <Routes> func otherwise can use multiple routes to work with.*/}
        <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<News pageSize={this.pageSize} country={this.country} category='general' apiKey={this.apiKey} />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/business" element={<News pageSize={this.pageSize} country={this.country} category='business' apiKey={this.apiKey} />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/entertainment" element={<News pageSize={this.pageSize} country={this.country} category='entertainment' apiKey={this.apiKey} />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/health" element={<News pageSize={this.pageSize} country={this.country} category='health' apiKey={this.apiKey} />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/science" element={<News pageSize={this.pageSize} country={this.country} category='science' apiKey={this.apiKey} />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/sports" element={<News pageSize={this.pageSize} country={this.country} category='sports' apiKey={this.apiKey} />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/technology" element={<News pageSize={this.pageSize} country={this.country} category='technology' apiKey={this.apiKey} />}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
