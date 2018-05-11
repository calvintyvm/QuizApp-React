import React, { Component } from "react";
import Question from "./containers/Question/";
import Question2 from "./containers/Question-2/";
import Question3 from "./containers/Question-3/";
import Question4 from "./containers/Question-4/";
import HomePage from "./containers/HomePage";
import Score from "./containers/Score";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainMenu from "./components/MainMenu";

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
        <Router>
          <div>
            <MainMenu />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/Film" component={Question} />
              <Route exact path="/Sports" component={Question2} />
              <Route exact path="/Mythology" component={Question3} />
              <Route exact path="/History" component={Question4} />
              {/* <Route exact path="/Score" component={Score} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
