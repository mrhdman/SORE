import React, { Component } from 'react';
import WorkoutEntry from '../utility/WorkoutEntry';
import axios from 'axios';

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
                <WorkoutEntry key={i} row={row} />
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