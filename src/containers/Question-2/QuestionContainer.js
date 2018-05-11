import React, { Component } from "react";
import Questions from "./Questions";

class QuestionContainer extends Component {
  constructor() {
    super();
    this.state = {
      allQuestions: [],
      isLoading: false,
      isClicked: false
    };
  }

  componentDidMount() {
    const questionLink =
      "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple";
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
            <Questions allQuestions={this.state.allQuestions} />
          </div>
        )}
      </div>
    );
  }
}

export default QuestionContainer;
