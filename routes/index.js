import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Form, Question } from '../components';

const routes = (
  <Router history={browserHistory}>
    <Route path="/form/:question_id" component={Form} />
  </Router>
);

export default routes;
