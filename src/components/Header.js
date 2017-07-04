import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    // <header>
    //     <ul>
    //         <li><NavLink exact to="/">Home</NavLink></li>
    //         <li><NavLink to="/bmr">BMR</NavLink></li>
    //         <li><NavLink to="/nutrition">Nutrition</NavLink></li>
    //     </ul>
    // </header>

  <nav>
    <div className="nav-wrapper">
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/bmr">BMR</NavLink></li>
        <li><NavLink to="/nutrition">Nutrition</NavLink></li>
      </ul>
    </div>
  </nav>

);

export default Header;