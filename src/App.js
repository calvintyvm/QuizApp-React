import React, { Component } from "react";
import Question from "./containers/Question/";
import Question2 from "./containers/Question-2/";
import Question3 from "./containers/Question-3/";
import Question4 from "./containers/Question-4/";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // isClicked: false
    };
  }

  render() {
    let buttonClicked = () =>
      this.setState({ isClicked: !this.state.isClicked });
    return (
      <div className="App" style={{ width: "90%" }}>
        <h1 className="App-title">Quiz</h1>
        <Router>
          <div>
            <Switch>
              <Route exact path="/Sports" component={Question} />
              {/* <Question2 />
          <Question3 />
          <Question4 /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
