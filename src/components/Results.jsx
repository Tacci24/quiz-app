import React from "react";

function Results({ questionBank, userAnswers, restartQuiz }) {
  const score = userAnswers.reduce((acc, answer, index) => {
    return answer === questionBank[index].answer ? acc + 1 : acc;
  }, 0);

  return (
    <div className="results">
      <h2>Quiz Completed!</h2>
      <p className="score-text">
        Your Score: <strong>{score}</strong> / {questionBank.length}
      </p>
      
      <button className="restart-button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Results;
