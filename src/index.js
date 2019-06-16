import React from 'react';
import ReactDOM from 'react-dom';
// import anime from 'animejs';
import './index.css';
import NavigationBar from './components/navigationbar/navigationbar.js';
import Home from './components/home/home.js';
import Logo from './components/logo/logo.js';



ReactDOM.render(<NavigationBar />, document.getElementById('nav'));
ReactDOM.render(<Logo />, document.getElementById('logo'));
ReactDOM.render(<Home />, document.getElementById('home'));
