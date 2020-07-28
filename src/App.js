import React, { Component } from "react"
import "./App.css"
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Home from "./pages/Home";
import Support from "./pages/Support";
 
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/support" component={Support} />
          </Switch>
          <br />
          <hr style={{width: '60%'}}/>
          <nav>
            <ul class="nav-ul">
              <li class="nav-li"><Link to="/">Home</Link></li>
              <li class="nav-li"><Link to="support">Support</Link></li>
            </ul>
          </nav>
          <br />
          <br />
          <h6>©2020 Aladin Bilalagic</h6>
          </header>
      </div>
      </Router>
    )
  }
}

export default App
