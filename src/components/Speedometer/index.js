// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-bg-container">
        <div className="content-container">
          <h1 className="main-title"> SPEEDOMETER </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="speedometer-img"
            alt="speedometer"
          />
          <h1 className="sub-title"> Speed is {speed}mph </h1>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button className="accelerate-btn" onClick={this.onAccelerate}>
              Accelerate
            </button>
            <button className="brake-btn" onClick={this.onBreak}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
