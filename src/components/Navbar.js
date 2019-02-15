import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import "../../src/App.css"
import styled from 'styled-components'
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
  render() {
    return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to = '/'><img src={logo} className="navbar-brand" alt="Logo"/></Link>
        <ul className="navbar-nav d-flex align-items-center w-100">
          <li className="nav-item mr-auto">
              <Link to ='/' className="nav-link">products</Link>
          </li>
          <li className="nav-item ml-5">
              <Link to ='/cart' className="ml-auto nav-link">
              <ButtonContainer className="white-font"><i className="fa fa-shopping-cart"></i> My Cart</ButtonContainer>
              </Link>
          </li>
         </ul>
    </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: #007fda !important;
  .nav-link {
    color :#ffffff !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
`

