import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getWorkoutPageAction from '../../actions/getPersonalWorkouts';

import WorkoutEntry from '../utility/WorkoutEntry';
import Stopwatch from '../timers/StopWatch';
import './workout.css';


class WorkoutPage extends Component{
    constructor(){
        super();
        this.state = {
            workoutpage: []
        }
    }
}

componentDidMount(){
    // console.log(this.props.auth)
    if (this.props.auth.token){
        // console.log("test2")
        const data = this.props.getPersonalWorkouts(this.props.auth.token);
    }
}

render(){
    console.log(this.props)
    const workoutRows = this.props.workouts.map((row,i) => {
        console.log(workoutRows)
        return(
            <WorkoutEntry key={i} row={row} />
        )
        })
    return(
        <div className="workoutTable">
            <h1>WORKOUT</h1>
            <table>
                <thead>
                    <tr className="firstRow">
                        <th>NAME</th>
                        <th>SETS</th>
                        <th>REPS</th>
                        <th>WEIGHT</th>
                        <th>NOTES</th>
                        <th>START</th>
                        <th>STOP</th>
                        <th>TIME</th>
                        <th>TRASH</th>
                    </tr>
                </thead>
                <tbody>
                    {workoutRows}
                </tbody>
            </table>
        </div>
    )
}
}