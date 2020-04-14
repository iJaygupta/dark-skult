import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Home from './pages/HomePage'
import DisplayMsg from './pages/NotFound';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App" >
        <Switch>
          <Route exact path="/" component={Home} />
           <Route path="*" component={DisplayMsg} />
        </Switch>
      </div>
    );
  }

}

export default App;
