import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './stopwatch.css';
import addToLogFromStopwatchAction from '../../actions/addToLogFromStopwatchAction';

class StopWatch extends Component{
    constructor(){
        super();
        this.state = {
            count: 0,
            stopWatchOn: false,
            interval: null
        }
    }
    stopWatch=()=>{
        if(this.state.count > -1){
            this.setState({
                count: this.state.count + 1,
            })
        }
    }
    startButtonClicked = e=>{
        if (!this.state.stopWatchOn){
            let interval = setInterval(this.stopWatch, 1000);
            this.setState({
                stopWatchOn : true,
            })
            this.setState({
                interval: interval,
            })
        }
    }
    stopButtonClicked = e =>{
        this.setState({
            stopWatchOn : false,
        })
        clearInterval(this.state.interval);
    }
    logButtonClicked = e =>{
        this.setState({
            stopWatchOn : false,
        })
        clearInterval(this.state.interval);
    }
    submitToLog = (event)=>{
        event.preventDefault();
        const name = document.getElementById('name').value;
        const hours = document.querySelector('.hours').innerText;
        const minutes = document.querySelector('.minutes').innerText;
        const seconds = document.querySelector('.seconds').innerText;
        const llength = hours + minutes + seconds; 
        let date = new Date();
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();
        let todaysDate = mm + "/" + dd + "/" + yyyy;
        todaysDate=todaysDate.replace(/\//g,'-');
        const notes = event.target[3].value;
        this.props.addToLogFromStopwatchAction({
            name,
            llength,
            todaysDate,
            notes,
            username: this.props.auth.username
        })
    }
    resetButtonClicked = e =>{
        this.setState({
            stopWatchOn : false,
            count : 0,
        })
        clearInterval(this.state.interval);
    }


    render(){
        let count = this.state.count;
        let hours = Math.floor(count / 3600);
        let minutes = Math.floor((count-hours*3600) / 60);
        let seconds = Math.floor(count-hours*3600 - minutes*60);
        let time = hours + ":" + minutes + ":" + seconds;
        let date = new Date();
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();
        let todaysDate = mm + "/" + dd + "/" + yyyy;
        // console.log(this.props.auth)

        return(
        <div className="stopwatchContainer">
            <h1 className="TITLE">STOPWATCH</h1>
            <form onSubmit={this.submitToLog}>
                <div>
                    <input type='name' name='name' id='name' maxlength="21" defaultValue='Name' />
                </div>
                <div className="buttonsAndClockContainer">
                    <div className="top-button-container">
                        <div className="button-container">
                            <div className="start-button">
                                <button className="start-btn" type='button' onClick={this.startButtonClicked}></button>
                            </div>
                        </div>
                        {/* <div className="button-container">
                            <div className="log-button">
                                <button className="log-btn" type='submit' onClick={this.logButtonClicked}>LOG</button>
                            </div>
                        </div> */}
                    </div>

                        <div className="clock-container" type='llength' id='llength'>
                            <span className="hours">{(hours < 10)
                                ?
                                `0${hours}`
                                :
                                `${hours}`}
                            </span>
                            <span className="minutes">{(minutes < 10)
                                ?
                                `:0${minutes}:`
                                :
                                `:${minutes}:`}
                            </span>
                            <span className="seconds">{(seconds < 10)
                                ?
                                `0${seconds}`
                                :
                                `${seconds}`}
                            </span>
                        </div>
                    <div className="bottom-button-container">
                        {/* <div className="button-container">
                            <div className="reset-button">
                                <button className="reset-btn" type='button' onClick={this.resetButtonClicked}>RESET</button>
                            </div>
                        </div> */}
                    

                        <div className="button-container">
                            <div className="stop-button">
                                <button className="stop-btn" type='submit' onClick={this.stopButtonClicked}></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <input type='text' name='notes' id='notes' maxlength="31" defaultValue='notes' />
                </div>
            </form>
                <div className="button-container">
                    <div className="reset-button">
                        <button className="reset-btn" type='button' onClick={this.resetButtonClicked}>RESET</button>
                    </div>
                </div>
        </div>
        )
    }
}

function mapStateToProps(state){
    return {
        addToLog: state.addToLog,
        auth: state.auth
    }
}
function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        addToLogFromStopwatchAction: addToLogFromStopwatchAction
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(StopWatch);