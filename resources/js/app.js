import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';

// require('./bootstrap')

if (document.getElementById('root')) {
    ReactDOM.render(<Application />, document.getElementById('root'));
}

