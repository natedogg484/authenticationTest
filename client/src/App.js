import React from 'react';
// react router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// wrapper
import Wrapper from './components/Wrapper'
// jumbotron
import Jumbotron from 'react-bootstrap/Jumbotron'
// Navbar
import { Navbar, Nav } from 'react-bootstrap'
// grid overlay
import { Container } from 'react-bootstrap'
// routes
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Movies from './components/Movies';

function App() {
  return (
    <Router>
      <Wrapper>
        <Container>
          {/* Navbar */}
          <Navbar bg="dark">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
          </Navbar>
          {/* Jumbotron */}
          <Jumbotron className='text-center'>
            <h1>Auth Test</h1>
          </Jumbotron>
          {/* pathing pulls up the page specific components, layouts, and functions */}
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/movies' component={Movies} />
        </Container>
      </Wrapper>
    </Router >
  );
}

export default App;
