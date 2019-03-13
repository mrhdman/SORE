import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './thefuturefooter.css';

class TheFutureFooter extends Component{
    render(){
        return(
            <div className="theFutureFooterContainer">
                <div className="theFutureFooterRow">
                    <div className="workoutButtonContainer">
                        <Link to="/workouts"><button className="workoutButton"><h2>WORKOUTS</h2></button></Link>
                    </div>
                    <div className="timerButtonContainer">
                        <Link to="/timer"><button className="timerButton"><h2>TIMER</h2></button></Link>
                    </div>
                </div>
                <div className="theFutureFooterRow">
                    <div className="logButtonContainer">
                        <Link to="/log"><button className="logButton"><h2>LOG</h2></button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;