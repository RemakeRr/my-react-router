import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Home from "./Home";
import Subpage from "./Subpage";

const firstChild = props => {
  const ChildrenArray = React.Children.toArray(props.children);
  return ChildrenArray[0] || null;
};

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="TopBar">
            <Link to="/">Home</Link>
            <Link to="/subpage">Subpage</Link>
          </div>
            <Route exact path="/" component={Home}/>
            <Route path="/subpage" component={Subpage}/>
        </div>
    );
  }
}

export default App;