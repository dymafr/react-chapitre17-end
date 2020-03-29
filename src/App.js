import React, { Component, lazy, Suspense } from "react";
import { Route } from "react-router-dom";

const LazyTodos = lazy(() => import("./features/todos"));

class App extends Component {
  render() {
    return (
      <div className="container p-5">
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Route path="/" component={LazyTodos} />
        </Suspense>
      </div>
    );
  }
}

export default App;
