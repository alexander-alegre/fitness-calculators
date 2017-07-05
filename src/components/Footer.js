import React from 'react';
import { Link } from 'react-router-dom';

import { Footer } from 'react-materialize';

const SiteFooter = () => (
    <Footer copyrights={" © " + new Date().getFullYear()}
        moreLinks={
            <a className="grey-text text-lighten-4 right" rel="noopener noreferrer" href="https://alegre.herokuapp.com/" target="_blank">Alexander Alegre</a>
        }
        links={
            <ul>
                <li><Link className="grey-text text-lighten-3" to="/">Home</Link></li>
                <li><Link className="grey-text text-lighten-3" to="/bmr">BMR</Link></li>
                <li><Link className="grey-text text-lighten-3" to="/nutrition">Nutrition</Link></li>
            </ul>
        }
        className='example'
    >
            <h5 className="white-text">Fitness Calculator</h5>
            <p className="grey-text text-lighten-4">This is meant for informational purposes only. This is not personalized advice.</p>
    </Footer>
);

export default SiteFooter;