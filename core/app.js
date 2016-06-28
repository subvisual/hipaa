import React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import store from './store';
import routes from '../routes';

import './reset.css';

render((
  <Provider store={store}>{routes}</Provider>
), document.getElementById('container'));
