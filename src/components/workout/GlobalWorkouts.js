import React, { Component } from 'react';
import GlobalWorkoutEntry from '../utility/GlobalWorkoutEntry';
import axios from 'axios';
import './workout.css';

class GlobalWorkouts extends Component{
    constructor(){
        super();
        this.state = {
            workout: []
        }
    }

componentDidMount(){
    const data = axios.get(`${window.apiHost}/workoutlog/getworkouts`)
    data.then((response)=>{
        // console.log(response.data)
        this.setState({
            workout: response.data
        })
    })
}
    render(){
        const workoutRows = this.state.workout.map((row,i) => {
            return(
                <GlobalWorkoutEntry key={i} row={row} />
            )
            })
        return(
            <div className="workoutTable">
                <table>
                    <thead>
                        <tr className="firstRow">
                            <th>NAME</th>
                            <th>SETS</th>
                            <th>REPS</th>
                            <th>WEIGHT</th>
                            <th>NOTES</th>
                            <th>START</th>
                            <th>TIME</th>
                            <th>STOP</th>
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

export default GlobalWorkouts;