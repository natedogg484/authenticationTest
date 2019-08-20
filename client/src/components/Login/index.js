import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

export default class Login extends Component {
    render() {
        return (
            <Row className='text-center'>
            <Col sm={4}></Col>
            <Col sm={4}>Welcome to the Login page!!</Col>
            <Col sm={4}></Col>
            </Row>
        )
    }
}