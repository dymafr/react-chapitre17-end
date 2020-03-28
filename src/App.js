import React, { Component, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const LazyTodos = lazy(() =>
  import(/* webpackChunkName: "todos" */ "./features/todos")
);

class App extends Component {
  render() {
    return (
      <div className="container p-5">
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Switch>
            <Route path="/todos" component={LazyTodos} />
            <Redirect to="/todos" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
