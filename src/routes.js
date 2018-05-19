import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import NewsContainer from "./container/newsContainer";
import sourceContainer from "./container/sourceContainer";

export default () =>
  (<BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />} />
      <Route path="/news" exact component={NewsContainer} />
      <Route path="/news/:source" component={sourceContainer}/>
    </Switch>
  </BrowserRouter>);