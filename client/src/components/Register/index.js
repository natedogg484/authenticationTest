import React, { Component } from 'react';
import './index.css'
import axios from 'axios'

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '', email: '', password: '' }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    handleSubmit = event => {
        event.preventDefault();

        const obj = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://localhost:8080/users/register', obj)
            .then(res => console.log(res.data))

            this.setState({
                name: '',
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
                                    <label htmlFor='name'>Name</label>
                                    <input type='text' className='form-control' id='nameInput' placeholder='Enter Your Name' name='name' value={this.state.name} onChange={this.handleChange}></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='email'>Email</label>
                                    <input type='email' className='form-control' id='emailInput' placeholder='Enter E-mail' name='email' value={this.state.email} onChange={this.handleChange}></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="passowrd">Password</label>
                                    <input type='password' className='form-control' id='passwordInput' placeholder="Enter Password" name='password' value={this.state.password} onChange={this.handleChange}></input>
                                </div>
                                <button type='submit' className='btn btn-dark'>Register</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
                <div className='col-md-3'></div>
            </div>
        )
    }
}