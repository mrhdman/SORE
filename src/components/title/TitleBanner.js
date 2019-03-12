import React from 'react';
import { Link } from 'react-router-dom';

import './title.css'


function TitleBanner(props){
    return(
        <div className="titleGoesHere">
            <div className="loginGoesHere">
                <Link to ="/login">
                    <button><h1>login</h1></button>
                </Link>
            </div>
            <div className="registerGoesHere">
                <Link to ="/register">
                    <button><h1>register</h1></button>
                </Link>
            </div>
        </div>
    )
}
export default TitleBanner;