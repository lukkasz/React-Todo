import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App';

//Load bootstrap css
require('style!css!bootstrap/dist/css/bootstrap.min.css');

//Load Custom App Style
import 'style!css!sass!applicationStyles';

ReactDOM.render(
  <App />
  , document.querySelector('.container'));
