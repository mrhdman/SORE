import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div className="navbarContainer">
                <div className="navbarRow">
                    <div className="workoutButtonContainer">
                        <Link to="/workout"><button className="workoutButton"><h2>WORKOUTS</h2></button></Link>
                    </div>
                    <div className="timerButtonContainer">
                        <Link to="/timer"><button className="timerButton"><h2>TIMER</h2></button></Link>
                    </div>
                </div>
                <div className="navbarRow">
                    {/* <div className="plannerButtonContainer">
                        <Link to="/planner"><button className="plannerButton"><h2>PLANNER</h2></button></Link>
                    </div> */}
                    <div className="logButtonContainer">
                        <Link to="/log"><button className="logButton"><h2>LOG</h2></button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;