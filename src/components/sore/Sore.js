import React from 'react';
import { Link } from 'react-router-dom';

import './sore.css'


function Sore(props){
    return(
        <div className="childrenInlineBlock">
            <div className="leftArm">
                <div className="leftForearmFistContainer">
                    <div className="leftFist"></div>
                    <div className="leftForearm"></div>
                </div>
                <div className="leftBicep"></div>
            </div>
            <div className="soreTitle">
                <Link to ="/">
                    <button><h1>SORE</h1></button>
                </Link>
            </div>
            <div className="rightArm">
                <div className="rightBicep"></div>
                <div className="rightForearmFistContainer">
                    <div className="rightForearm"></div>
                    <div className="rightFist"></div>
                </div>
            </div>
        </div>
    )
}
export default Sore;




