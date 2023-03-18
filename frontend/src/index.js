import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from "../src/components/Index";
import App from './App';
import MainShop from './components/MainShop';
import ProductDetails from './components/productDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <App></App>
  </React.StrictMode>
);

