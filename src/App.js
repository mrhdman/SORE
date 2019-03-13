import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './App.css';

import Sore from './components/sore/Sore';
import Headers from './components/usernameNavBar/Headers';
import TitleBanner from './components/title/TitleBanner';
import Navbar from './components/navbar/Navbar';

import Register from './components/register/Register';
import Login from './components/login/Login';

import Workout from './components/workout/Workout';
import Timer from './components/timers/Timer';
import Planner from './components/planner/Planner';
import Log from './components/log/Log';

import LogEntry from './components/utility/LogEntry';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Sore />
          <Headers />
          {/* <TitleBanner /> */}
          <Navbar />
          <div className="container">
            <Route exact path="/" />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/workout" component={Workout} />
            <Route exact path="/timer" component={Timer} />
            <Route exact path="/planner" component={Planner} />
            <Route exact path="/log" component={Log} />
            <Route exact path="/log/logentry" component={LogEntry} />
            {/* <Route exact path="/log/:id" component={Log} /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
