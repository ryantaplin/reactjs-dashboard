import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import * as serviceWorker from './serviceWorker';
import Router from './web/router/Router';

ReactDOM.render(<Router/>, document.getElementById('root'));

serviceWorker.unregister();