import React, { Component } from 'react';
import './workout.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PersonalWorkouts from './PersonalWorkouts';
import GlobalWorkouts from './GlobalWorkouts';

class BrowseWorkouts extends Component{
    render(){
    return(
        <Router>
            <div className ="BrowseWorkoutsContainer">
                <h1 className="TITLE">BROWSE WORKOUTS</h1>
                <div className="workoutButtons">
                    <Link to="/workout/browse/personal"><button className="personalButton"><h2>PERSONAL</h2></button></Link>
                    <Link to="/workout/browse/global"><button className="globalButton"><h2>GLOBAL</h2></button></Link>
                </div>
                <div className="workoutRoutes">
                    <Route exact path="/workout/browse/personal" component={PersonalWorkouts} />
                    <Route exact path="/workout/browse/global" component={GlobalWorkouts} />
                </div>
            </div>
        </Router>
        )
    }
}

export default BrowseWorkouts;