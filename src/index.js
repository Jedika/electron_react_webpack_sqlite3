import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

ReactDOM.render(
  <div>
    <Home />
  </div>,
  document.getElementById('app')
);

module.hot.accept();