// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
// Materialize
import { Navbar } from 'react-materialize';

// display logo
const name= <img className="main-logo" src={require("./../img/muscle.png")} alt="bicep flexing"/>

const Header = () => (
  <Navbar brand={name} right>
    <li><NavLink exact to="/">Home</NavLink></li>
    <li><NavLink to="/bmr">BMR</NavLink></li>
    <li><NavLink to="/nutrition">Nutrition</NavLink></li>
  </Navbar>
);

export default Header;