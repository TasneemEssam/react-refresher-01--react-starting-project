//Here's how we import React library from our package 
import React from 'react';
import ReactDOM from 'react-dom';

//Here's we import from our files 
import './index.css';
import App from './App';

//Renders this strange thing which is not regular Javascript into this place of our HTML page
//This is regular Javascript and here we are selecting the element with ID and root 
ReactDOM.render(<App />, document.getElementById('root'));
