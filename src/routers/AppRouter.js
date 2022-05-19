import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch
} from "react-router-dom";

import { MainTable } from '../components/main/MainTable';

import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/" component={MainTable} isAuthenticated={false} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>)
};
