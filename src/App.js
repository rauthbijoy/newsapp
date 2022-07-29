import React, { Component } from 'react'
import NavBar from './component/NavBar'
import News from './component/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <News
        pageSize={5}
        country='in'
        category='general'
        />
        <Routes>
          <Route path="/" element={<News pageSize={5} country='in' category='general'/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
