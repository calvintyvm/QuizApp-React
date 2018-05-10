import React, { Component } from "react";
import Questions from "./Questions";

class HouseContainer extends Component {
  constructor() {
    super();
    this.state = {
      allQuestions: [],
      isLoading: false,
      isClicked: false
    };
  }
  //film
  componentDidMount() {
    const questionLink =
      "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple";
    this.setState({ isLoading: true });
    fetch(questionLink)
      .then(allQuestions => allQuestions.json())
      .then(allQuestions => this.setState({ allQuestions }))
      .then(() => this.setState({ isLoading: false }))
      .catch(error => console.log(error));
  }

  render() {
    let buttonClicked = () =>
      this.setState({ isClicked: !this.state.isClicked });
    return (
      <div>
        {this.state.isLoading ? (
          <p>It is Loading</p>
        ) : (
          <div>
            {/* <button onClick={buttonClicked}>Get Questions</button>
            {this.state.isClicked ? ( */}
            <Questions allQuestions={this.state.allQuestions} />
            {/* ) : null} */}
          </div>
        )}
      </div>
    );
  }
}

export default HouseContainer;