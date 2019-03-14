import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import authAction from '../../actions/authAction';
import { connect } from 'react-redux'
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import './register.css';

class Register extends Component{
    constructor(){
        super();
        this.state = {
            msg: "",
            showAlert: false
        }
    }

    componentWillReceiveProps(newProps){
        console.log(newProps);
        if(newProps.auth.msg === 'userExists'){
            this.setState({
                showAlert: true,
                // title: "Error",
                // text: "Email is already registered."
            })
        }else if(newProps.auth.msg === 'userAdded'){
            // this.setState({
            //     showAlert: true,
            //     title: "Account Registered",
            //     text: "You are registered."
            // })
            this.props.history.push('/');
        }
    }

    registerSubmit = (event)=>{
        event.preventDefault();
        // console.dir(event.target);
        const username = event.target[0].value;
        // const username = document.getElementById('email).value;
        const password = event.target[1].value;
        // console.log(username);
        // console.log(password);
        this.props.authAction({
            username,
            password,
        })
    }

    render(){
        const msg = this.state.msg
        return(
            <main>
                <SweetAlert
                    show={this.state.showAlert}
                    title="Error"
                    text="This Email is already registered. Login or choose a different email."
                    onConfirm={() => this.setState({ showAlert: false })}
                    />
                <div className="registerContainer">
                    <h3>{msg}</h3>
                    <form onSubmit={this.registerSubmit}>
                        <div className='email-input-field'>
                            <input className='validate' type='email' name='email' id='email' defaultValue="email"/>
                        </div>
                        <div className='password-input-field'>
                            <input className='validate' type='password' name='password' id='password' defaultValue="****"/>
                        </div>
                        <div className="createAccountButtonContainer">
                            <button type='submit' name='createAccountButton'>create account</button>
                        </div>
                    </form>
                </div>
            </main>
        )
    }
}

function mapStateToProps(state){
    return {
        auth: state.auth,
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        authAction: authAction
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);