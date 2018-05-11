import React from "react";

const Question = props => {
  let quizzes = props.allQuestions.results;

  return (
    <div>
      <h1>Questions</h1>
      {/* short circuit, props has not arrived yet because it is re rendering */}
      <ul>
        {quizzes &&
          quizzes.map((question, index) => (
            <li key={index}>
              {question.question}
              <br />
              {question.correct_answer}
            </li>
          ))}
        {console.log(quizzes)}
      </ul>
    </div>
  );
};

export default Question;

// {quizzes &&
//   quizzes.map((question, index) => (
//     <li key={index}>{console.log(question)}</li>
//   ))}
