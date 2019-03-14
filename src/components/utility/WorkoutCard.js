import React from 'react';
import { Link } from 'react-router-dom';

function WorkoutCard(props){
    console.log(props);
    const name = props.data.name;
    const sets = props.data.sets;
    const reps = props.data.weight;
    const notes = props.data.notes;
}

return(
    <div className="workoutCardContainer">
        <h1 className="titleOfWorkoutCardContainer"><Link to={`/workouts/${props.data.id}`}></Link></h1>
        <div className ="workoutCardTableContainer">
            <table>
                <thead>
                    <th>NAME</th>
                    <th>SETS</th>
                    <th>REPS</th>
                    <th>WEIGHT</th>
                    <th>NOTES</th>
                    <th>START</th>
                    <th>STOP</th>
                    <th>TIME</th>
                </thead>
                <tbody>
                    <th>{name}</th>
                    <th>{sets}</th>
                    <th>{reps}</th>
                    <th>{notes}</th>
                </tbody>
            </table>
        </div>
    </div>

)