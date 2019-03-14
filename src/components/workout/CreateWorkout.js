import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import createWorkoutAction from '../../actions/createWorkoutAction';
import { connect } from 'react-redux';
import './workout.css';
// import getPersonalWorkouts from '../../actions/getPersonalWorkouts';

class CreateWorkout extends Component{
    

    createWorkoutSubmit = (event)=>{
        event.preventDefault();
        const name = event.target[0].value;
        const sets = event.target[1].value;
        const reps = event.target[2].value;
        const weight = event.target[3].value;
        const notes = event.target[4].value;
        this.props.createWorkoutAction({
            name,
            sets,
            reps,
            weight,
            notes,
            username: this.props.auth.username
        })
    }

    render(){
        return(
            <div className ="createWorkoutContainer">
                <h1 className="TITLE">CREATE WORKOUTS</h1>
                <form onSubmit={this.createWorkoutSubmit}>
                    <table className="createWorkoutTable">
                        <tr className="notInputRow">
                            <th>name</th>
                        </tr>
                        <tr className="inputRow">
                            <th><input type='name' name='name' id='name' maxlength="21" defaultValue='Bench' /></th>
                        </tr>
                        <tr className="notInputRow">
                            <th>sets</th>
                        </tr>
                        <tr className="inputRow">
                            <th><input type='number' name='sets' id='sets' min='0' defaultValue="5" /></th>
                        </tr>
                        <tr className="notInputRow">
                            <th>reps</th>
                        </tr>
                        <tr className="inputRow">
                            <th><input type='number' name='reps' id='reps' min='0' defaultValue="5" /></th>
                        </tr>
                        <tr className="notInputRow">
                            <th>weight</th>
                        </tr>
                        <tr className="inputRow">
                            <th><input type='number' name='weight' id='weight' min='0' step='5' defaultValue="225" /></th>
                        </tr>
                        <tr className="notInputRow">
                            <th>notes</th>
                        </tr>
                        <tr className="inputRow">
                            <th><input type='text' name='notes' id='notes' maxlength="31" defaultValue='HEAVY' /></th>
                        </tr>
                    </table>
                    <div className="createWorkoutButtonContainer">
                        <button type='submit' name='createWorkoutButton'>Add Workout</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        addWorkouts: state.addWorkouts,
        auth: state.auth
    }
}
function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        createWorkoutAction: createWorkoutAction,
        // getPersonalWorkouts: getPersonalWorkouts
    },dispatcher)
}


export default connect(mapStateToProps,mapDispatchToProps)(CreateWorkout);