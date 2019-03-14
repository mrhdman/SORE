import React, { Component } from 'react';
// import loginTab from '../../misc/openWindow';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginNavBar extends Component{
    constructor(){
        super();
    }
    testAuth = (event)=>{
        ('/login').then((jwt)=>{
            console.log(jwt)
        }).catch((error)=>{
            console.log(error)
        })
    }
    render(){
        let rightNavBar = "";
        if(this.props.auth.username !== undefined){
            // user is logged in
            rightNavBar = <span>Hello, {this.props.auth.username}.</span>
        }else{
            // user is not logged in
            rightNavBar = <span className="loginOrRegister">
                <Link to="/login">login</Link> or <Link to="/register">register</Link>
            </span>
        }
        return(
            <div className="login-nav-bar">
                {rightNavBar}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(LoginNavBar);