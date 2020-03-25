import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loadable from "react-loadable";

const LazyTodos = Loadable({
  loader: () => import(/* webpackChunkName: 'todos' */ "./features/todos"),
  loading: () => <h1> Loading ... </h1>
});

class App extends Component {
  render() {
    return (
      <div className="container p-5">
        <Switch>
          <Route path="/todos" component={LazyTodos} />
          <Redirect to="/todos" />
        </Switch>
      </div>
    );
  }
}

export default App;
