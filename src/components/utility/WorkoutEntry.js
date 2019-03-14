import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getPersonalWorkouts from '../../actions/getPersonalWorkouts';

class WorkoutEntry extends Component{
    constructor(){
        super();
        this.state={
            workouts: []
        }
    }

    trash = (e)=>{
        // console.dir(e.target);
        axios.get(`${window.apiHost}/personalworkouts/trash/${e.target.id}`).then((response)=>{
            if(response.data.msg === "deleted"){
                this.props.getPersonalWorkouts(this.props.auth.token)
            }
        })
    }

    render(){
    const start = ""
    const stop = ""
    const time = "00:00:00"
    const row = this.props.row;
    return(
        <tr>
            <th className="nameRow">{row.name}</th>
            <th className="setsRow">{row.sets}</th>
            <th className="repsRow">{row.reps}</th>
            <th className="weightRow">{row.weight}</th>
            <th className="notesRow">{row.notes}</th>
            <th className="startRow">{start}</th>
            <th className="timeRow">{time}</th>
            <th className="stopRow">{stop}</th>
            <th className="deleteRow" id={row.id} onClick={this.trash} >DEL</th>
        </tr>
        )
    }
}

function mapStateToProps(state){
    return {
        auth: state.auth,
    }
}
function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        getPersonalWorkouts: getPersonalWorkouts
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkoutEntry);
