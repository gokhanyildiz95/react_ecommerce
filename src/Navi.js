import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import CardSummary from './CartSummary';
import {Link} from 'react-router-dom'

export default class Navi extends React.Component {
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: this.state.isOpen
    });
  }
  render() {
    return(
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Nortwind</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
          <NavLink>
            <Link to="/FormDemo1">FormDemo1</Link>
            </NavLink>
          </NavItem>
          <NavItem>
          <NavLink>
            <Link to="/FormDemo2">FormDemo2</Link>
            </NavLink>
          </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <CardSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
  }
}
  