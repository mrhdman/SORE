import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import createWorkoutAction from '../../actions/createWorkoutAction';
import { connect } from 'react-redux';
import './workout.css';

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
            notes
        })
    }

    render(){
        return(
            <div className ="createWorkoutContainer">
                <h1 className="TITLE">CREATE WORKOUTS</h1>
                <form onSubmit={this.createWorkoutSubmit}>
                    <div>
                        name-------<input type='name' name='name' id='name' placeholder='Bench Press' />
                    </div>
                    <div>
                        sets-------<input type='number' name='sets' id='sets' min='0' defaultValue="5" />
                    </div>
                    <div>
                        reps-------<input type='number' name='reps' id='reps' min='0' defaultValue="5" />
                    </div>
                    <div>
                        weight-----<input type='number' name='weight' id='weight' min='0' step='5' defaultValue="225" />
                    </div>
                    <div>
                        notes------<input type='text' name='notes' id='notes' placeholder='heavy' />
                    </div>
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
        addWorkout: state.addWorkout
    }
}
function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        createWorkoutAction: createWorkoutAction
    },dispatcher)
}


export default connect(mapStateToProps,mapDispatchToProps)(CreateWorkout);