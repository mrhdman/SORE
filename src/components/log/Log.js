import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './log.css'
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import updateLog from '../../actions/updateLog';

class Log extends Component{
    constructor(){
        super()
        this.state = {
            log: {}
        }
    }

    componentWillReceiveProps(newProps){
        if(newProps.log.length !== this.props.log.length){
            this.props.history.push('/?added=item')
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id);
        const lid = this.props.match.params.id;
        const logResponse = axios.get(`${window.apiHost}/log/${lid}`);
        logResponse.then((response)=>{
            const logData = response.data[0];
            this.setState({
                log: logData
            })
        })
    }

    addToLog = (event)=>{
        const token = this.props.auth.token;
        this.props.updateLog(token,this.state.log.id)
    }

    render(){
        console.log(this.state.log);
        let nameRow = "";
        let llengthRow = "";
        let dateRow = "";
        let notesRow = "";
        if(this.state.log.name){
            nameRow = this.state.log.name.split(',')[0];
            nameRow = nameRow.replace('')
        }
        if(this.state.log.llength){
            llengthRow = this.state.log.llength.split(',')[0];
            llengthRow = llengthRow.replace('')
        }
        if(this.state.log.date){
            dateRow = this.state.log.date.split(',')[0];
            dateRow = dateRow.replace('')
        }
        if(this.state.log.notes){
            notesRow = this.state.log.notes.split(',')[0];
            notesRow = notesRow.replace('')
        }

        return(
            <div className="quadChildrenContainer">
                    <h1 className ="TITLE">LOG</h1>
                    <table className ="logTable">
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>LENGTH</th>
                                <th>DATE</th>
                                <th>NOTES</th>
                            </tr>
                            <tr>
                                <td>{this.state.log.name}</td>
                                <td>{this.state.log.llength}</td>
                                <td>{this.state.log.date}</td>
                                <td>{this.state.log.notes}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth,
        log: state.log
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        // updateLog: updateLog
    },dispatcher)
};

export default connect(mapStateToProps,mapDispatchToProps)(Log);