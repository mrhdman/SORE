import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getPersonalLog from '../../actions/getPersonalLog';

class LogEntry extends Component{
    constructor(){
        super();
        this.state={
            log: []
        }
    }

    trash = (e)=>{
        // console.dir(e.target);
        axios.get(`${window.apiHost}/personallog/trash/${e.target.id}`).then((response)=>{
            if(response.data.msg === "deleted"){
                this.props.getPersonalLog(this.props.auth.token)
            }
        })
    }

    render(){
    const row = this.props.row;
    return(
        <tr>
            <th className="nameRow">{row.name}</th>
            <th className="timeRow">{row.llength}</th>
            <th className="dateRow">{row.date}</th>
            <th className="setsRow">{row.sets}</th>
            <th className="repsRow">{row.reps}</th>
            <th className="weightRow">{row.weight}</th>
            <th className="notesRow">{row.notes}</th>
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
        getPersonalLog: getPersonalLog
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(LogEntry);