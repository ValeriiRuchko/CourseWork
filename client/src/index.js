// our imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// react-router for handling differnet pages
//import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


// getting our root element
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
