import React, { Component } from 'react';
import LoginNavBar from './LoginNavBar';
import './Nav.css'

function Headers(props){
    return (
        <div className="header">
            <LoginNavBar />
        </div>
    )
}

export default Headers;