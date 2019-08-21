import React, { Component } from 'react';
import './index.css'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', passowrd: '' }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.email)
        console.log(this.state.password)
        console.log(this.state.name)
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
                                <button type='submit' className='btn btn-dark'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'></div>
            </div>
        )
    }
}