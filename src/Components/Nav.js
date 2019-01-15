import React, { Component } from 'react';
import '../Styles/App.css';
import { Nav, NavLink, Navbar, Collapse,NavbarToggler,NavItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (


     <div className="navigation">

     <Navbar color="light" light expand="md">
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              <NavItem><NavLink tag={RRNavLink} exact to="/" >Home</NavLink></NavItem>
              <NavItem><NavLink tag={RRNavLink} exact to="/history">History</NavLink></NavItem>
              <NavItem> <NavLink tag={RRNavLink} exact to="/report">Report</NavLink></NavItem>
              <NavItem><NavLink tag={RRNavLink} exact to="/mlreport">Multiplereport</NavLink></NavItem>
            
            
              </Nav>
          </Collapse>
        </Navbar>

{/*      
     <Navbar color="light" light expand="md">
     <NavbarToggler onClick={this.toggle} />
     <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" tabs>
      
      <NavLink tag={RRNavLink} exact to="/" >Home</NavLink>
      <NavLink tag={RRNavLink} exact to="/history">History</NavLink>
      <NavLink tag={RRNavLink} exact to="/report">Report</NavLink>
      <NavLink tag={RRNavLink} exact to="/mlreport">Multiplereport</NavLink>
      </Nav>
      </Collapse>
      </Navbar> */}
      </div>
      
     

    );
  }
}

export default Navigation;
