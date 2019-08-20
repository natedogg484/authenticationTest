import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

export default class Movies extends Component {
    render() {
        return (
            <Row className='text-center'>
            <Col sm={4}></Col>
            <Col sm={4}>Welcome to the Movies page!!</Col>
            <Col sm={4}></Col>
            </Row>
        )
    }
}