import React, { Component } from 'react';
import LogEntry from '../utility/LogEntry';
import axios from 'axios';
import './log.css'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getPersonalLog from '../../actions/getPersonalLog';


class Log extends Component{
    constructor(){
        super();
        this.state = {
            logs: []
        }
    }

componentDidMount(){
    // console.log(this.props.auth)
    if (this.props.auth.token){
        // console.log("test2")
        const data = this.props.getPersonalLog(this.props.auth.token);
    }
}

    render(){
        console.log(this.props)
        const rows = this.props.logs.map((row,i) => {
            console.log(row)
            return(
                <LogEntry key={i} row={row} />
            )
            })
        return(
            <div className="logTable">
                <table>
                    <thead>
                        <tr className="firstRow">
                            <th>NAME</th>
                            <th>TIME</th>
                            <th>DATE</th>
                            <th>WEIGHT</th>
                            <th>SETS</th>
                            <th>REPS</th>
                            <th>NOTES</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                            {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        auth: state.auth,
        logs: state.personalLog
    }
}
function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        getPersonalLog: getPersonalLog
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Log);