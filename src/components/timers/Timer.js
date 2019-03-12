import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './stopwatch.css';

import StopWatch from './StopWatch';
import Countdown from './Countdown';

class Timer extends Component{
    render() {
        return (
            <Router>
                <div className="quadChildrenContainer">
                    <h1 className="TITLE">TIMER</h1>
                    <div className="timerButtons">
                        <Link to="/timer/stopwatch"><button className="stopwatchButton"><h2>STOPWATCH</h2></button></Link>
                        <Link to="/timer/countdown"><button className="countdownButton"><h2>COUNTDOWN</h2></button></Link>
                    </div>
                    <div className="timerRoutes">
                        <Route exact path="/timer/stopwatch" component={StopWatch} />
                        <Route exact path="/timer/countdown" component={Countdown} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default Timer;