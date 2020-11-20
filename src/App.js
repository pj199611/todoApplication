import { Route, Switch } from "react-router-dom";
import welComponent from "./Components/welComponent/WelComponent";
import TodoComponent from "./Components/Todo/todo";
import React from "react";

const App = () => {
  return (
    <React.Fragment>
     
      <Switch>
        <Route exact path="/" component={welComponent} />
        <Route exact path="/todo" component={TodoComponent} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
