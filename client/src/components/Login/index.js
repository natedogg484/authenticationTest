import React, { Component } from 'react';
import './index.css'
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', password: '' }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    handleSubmit = event => {
        event.preventDefault();

        const obj = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://localhost:8080/users/authenticate', obj)
            .then( res => console.log(res.data));

        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6 text-center'>
                    <div className='card'>
                        <div className='card-header'>Login</div>
                        <div className='card-body'>
                            <form onSubmit={this.handleSubmit}>
                                <div className='form-group'>
                                    <label htmlFor='email'>Email</label>
                                    <input type='email' className='form-control' id='emailInput' placeholder='Enter E-mail' name='email' value={this.state.email} onChange={this.handleChange}></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="passowrd">Password</label>
                                    <input type='password' className='form-control' id='passwordInput' placeholder="Enter Password" name='password' value={this.state.password} onChange={this.handleChange}></input>
                                </div>
                                <button type='submit' className='btn btn-dark'>Login</button>
                            </form>
                        </div>
                    </div>
                    <a href='/register'>To register for an account click here</a>
                </div>
                <div className='col-md-3'></div>
            </div>
        )
    }
}