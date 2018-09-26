import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import ZKchildren from "./routes/ZKchildren.js";

import Left from "./routes/Left.js";

import MainLayout from "./routes/MainLayout.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" exact component={IndexPage} />
        </Switch>
        <Route path="/ZKchildren" component={ZKchildren} />
        <Route path="/Left" component={Left} />
        <Route path="/mainLayout" component={MainLayout} />
        </div>
    
    </Router>
  );
}

export default RouterConfig;
