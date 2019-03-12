import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProsAndCons from './prosAndCons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ProsAndCons />, document.getElementById('root'));
serviceWorker.register();
