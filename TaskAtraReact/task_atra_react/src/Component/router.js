

import React from "react";
import UserForm from './UserForm'
import Details from './DetailsUser'
import ListUser from './UserList'
import {Navbar, Nav,Links} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function RouterShop() {
  
  return (
    <>
    <Router>
    <div>
   <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
  <Navbar.Brand>Atra</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <LinkContainer to="/">
      <Nav.Link>Form</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/userForm">
      <Nav.Link>Form</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/detailsUser">
      <Nav.Link>Details</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/userList">
      <Nav.Link>List of users</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        <Switch>
          <Route path="/userForm">
            <UserForm />
          </Route>
          <Route path="/detailsUser">
            <Details />
          </Route>
          <Route path="/userList">
            <ListUser />
          </Route>
          <Route path="/">
            <UserForm />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

