// Dependencies
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Bmr from './Bmr';
import Nutrition from './Nutrition';

const App = () => (
    <BrowserRouter>
        <div className="container">
            <Header />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/bmr" component={ Bmr } />
                <Route path="/nutrition" component={ Nutrition } />
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default App;