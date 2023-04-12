
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [quizData, setQuizData] = useState([]);
  const [isClickedWrong, setIsClickedWrong] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  /*
  const handleClick = () => {
    setIsClickedWrong(true);
  };

  const buttonColor = {
    backgroundColor: isClickedWrong ? 'red' : 'white'
  } */
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple');
      const data = await response.json();
      setQuizData(data.results);
    }
    fetchData();
  }, []);

  const handleAnswer = (answer) => {
    if (answer === quizData[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  const currentQuestion = quizData[currentQuestionIndex];
/*
Possible other button changing colors: <button style={buttonColor} onClick={handleClick}>{question.correct_answer}</button>
*/

return (
  <div>
    <h1>Welcome to Alex's History Trivia Quiz!</h1>
    {currentQuestionIndex === quizData.length ? (
      <h2>Game Over. You Scored {score} out of {quizData.length}. Good Job!</h2>
    ) : (
      <div>
        <h3>Score: {score}</h3>
        {currentQuestion && (
          <div>
            <h2>{currentQuestion.question}</h2>
            <ul>
              {[...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort().map((answer, index) => (
                <li key={index}>
                  <button onClick={() => handleAnswer(answer)}>{answer}</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )}
  </div>
);
}


export default App;
