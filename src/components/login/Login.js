import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loginAction from '../../actions/loginAction';
import './login.css';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css'


class Login extends Component{
    constructor(){
        super();
        this.state = {
            showAlert: false,
            msg: "",
        }
    }
    componentWillReceiveProps(newProps){
        console.log(newProps);
        if(newProps.auth.msg === 'badPassword'){
            this.setState({
                showAlert: true,
                msg: "Please re-enter your password"
            })
        }else if(newProps.auth.msg === 'badUser'){
            this.setState({
                showAlert: true,
                msg: "Username not found"
            })
        }else if(newProps.auth.msg === 'loginSuccess'){
            this.props.history.push('/')
        }


    }

    handleLogin = (event)=>{
        event.preventDefault()
        const username = event.target[0].value
        const password = event.target[1].value
        this.props.loginAction({
            username,
            password
        })
    }

    render(){
        return(
            <main>
                <SweetAlert
                    show={this.state.showAlert}
                    title="Login Error"
                    text={this.state.msg}
                    onConfirm={() => this.setState({ showAlert: false })}
                />

                <div className="loginContainer">
                    <form onSubmit={this.handleLogin}>
                        <div className='email-input-field'>
                            <input className='validate' type='email' name='email' id='email' defaultValue="email"/>
                        </div>
                        <div className='password-input-field'>
                            <input className='validate' type='password' name='password' id='password' defaultValue="****"/>
                        </div>
                        <div className="loginButtonContainer">
                            <button type='submit' name='createAccountButton'>login</button>
                        </div>
                    </form>
                </div>
            </main>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        loginAction: loginAction
    },dispatcher)
}

// export default Login;
export default connect(mapStateToProps,mapDispatchToProps)(Login)
