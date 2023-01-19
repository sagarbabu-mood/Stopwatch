import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {seconds: 0}

  onStartTimer = () => {
    this.timerId = setInterval(this.runClock, 1000)
  }

  runClock = () => {
    const {seconds} = this.state
    const isOverSeconds = seconds === 60 * 60
    if (isOverSeconds) {
      this.onStopTimer()
    }
    this.setState({
      seconds: isOverSeconds ? 0 : seconds + 1,
    })
  }

  onStopTimer = () => {
    console.log('cleared')
    clearInterval(this.timerId)
  }

  onResetTimer = () => {
    clearInterval(this.timerId)
    this.setState({seconds: 0})
  }

  getMinutes = () => {
    const {seconds} = this.state
    const minute = Math.floor(seconds / 60)
    if (minute < 10) {
      return `0${minute}`
    }
    return minute
  }

  getSeconds = () => {
    const {seconds} = this.state
    const second = Math.floor(seconds % 60)
    if (second < 10) {
      return `0${second}`
    }
    return second
  }

  render() {
    const timeDisplay = `${this.getMinutes()}:${this.getSeconds()}`
    return (
      <>
        <div className="bg-container">
          <h1>Stopwatch</h1>
          <div className="stopwatch-container">
            <div className="timer-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1>{timeDisplay}</h1>
            <div>
              <button
                type="button"
                className="button-green"
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="button-red"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="button-yellow"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Stopwatch
