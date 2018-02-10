import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var element = React.createElement('h1', { className: 'greeting' }, 'I will fail again and again, but never give up.');
ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
