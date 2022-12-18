import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './application/Router';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Router/>);

reportWebVitals();
