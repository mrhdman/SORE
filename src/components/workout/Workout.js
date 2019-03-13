import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './workout.css';

import BrowseWorkouts from './BrowseWorkouts';
import CreateWorkout from './CreateWorkout';

class Workout extends Component{
    render(){
        return(
            <Router>
            <div className="quadChildrenContainer">
                <h1 className="TITLE">WORKOUTS</h1>
                <div className="workoutButtons">
                    <Link to="/workout/browse"><button className="browseButton"><h2>BROWSE</h2></button></Link>
                    <Link to="/workout/create"><button className="createButton"><h2>CREATE</h2></button></Link>
                </div>
                <div className="workoutRoutes">
                    <Route exact path="/workout/browse" component={BrowseWorkouts} />
                    <Route exact path="/workout/create" component={CreateWorkout} />
                </div>
            </div>
            </Router>           
        );
    }
}

export default Workout;