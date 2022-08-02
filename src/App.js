import React, { useState } from "react";
import questions from "./questions";
import "./styles.css";

function App() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };

  return (
    <div className="container">
      <div className="quiz-box">
        <h1 className="quiz-title">QUIZ</h1>
        {showFinalResults ? (
          <div className="final-result">
            <h1 className="final-result-title">Final Results</h1>
            <h2 className="score-title">
              {score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </h2>
            <button onClick={() => restartGame()} className="restart-btn">
              Restart Quiz
            </button>
          </div>
        ) : (
          <div className="question-card">
            <h2 className="quiz-step-title">
              Question {currentQuestion + 1} out of {questions.length}
            </h2>
            <h3 className="questions">{questions[currentQuestion].text}</h3>

            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    onClick={() => optionClicked(option.isCorrect)}
                    key={option.id}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
