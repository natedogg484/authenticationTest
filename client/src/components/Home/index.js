import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <Row className='text-center'>
            <Col sm={4}></Col>
            <Col sm={4}>Welcome to the Home page!!</Col>
            <Col sm={4}></Col>
            </Row>
        )
    }
}