import React, { Component } from "react"

class Home extends Component {
    render() {
      return (
        <div>
            <h1>NotSoFast Studio</h1>
            <h5 style={{color: '#00cdcd'}}>Developing hyper-casual mobile games</h5>
            <br />
            <h5>Games</h5>
            <ul>
            <li><a href="https://apps.apple.com/us/developer/aladin-bilalagic/id1463842782" style={{fontSize: '1em', color: '#00cdcd'}}>SpinLeague.io</a></li>
            <li><a href="https://apps.apple.com/us/app/fire-cannon-3d/id1517233502" style={{fontSize: '1em', color: '#00cdcd'}}>Fire Cannon 3D</a></li>
            <li><a href="https://apps.apple.com/us/app/swifty-ball-3d/id1510668418" style={{fontSize: '1em', color: '#00cdcd'}}>Swifty Ball 3D</a></li>
            </ul>
            <br />
            <small>For any inquries, contact us at <a class="email" href="mailto:support@notsofaststudio.com">support@notsofaststudio.com</a></small>
        </div>
      )
    }
  }
  
  export default Home