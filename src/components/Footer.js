import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer class="page-footer">
        <div class="container">
        <div class="row">
            <div class="col l4 offset-l2 s12">
                <ul>
                    <li><Link class="grey-text text-lighten-3" to="/">Home</Link></li>
                    <li><Link class="grey-text text-lighten-3" to="/bmr">BMR</Link></li>
                    <li><Link class="grey-text text-lighten-3" to="/nutrition">Nutrition</Link></li>
                </ul>
            </div>
        </div>
        </div>
        <div class="footer-copyright">
        <div class="container">
        &copy; { new Date().getFullYear() } <a href="https://alegre.herokuapp.com/" target="_blank">Alexander Alegre</a>
        </div>
        </div>
    </footer>
);

export default Footer;