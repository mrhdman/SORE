import React, { Component } from 'react';
import WorkoutEntry from '../utility/WorkoutEntry';
import axios from 'axios';
import './workout.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getPersonalWorkouts from '../../actions/getPersonalWorkouts';


class PersonalWorkouts extends Component{
    constructor(){
        super();
        this.state = {
            workouts: []
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
                            <th>DELETE</th>
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


function mapStateToProps(state){
    return {
        auth: state.auth,
        workouts: state.personalWorkouts
    }
}
function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        getPersonalWorkouts: getPersonalWorkouts
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(PersonalWorkouts);