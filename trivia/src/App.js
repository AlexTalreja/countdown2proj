import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [quizData, setQuizData] = useState([]);
  const [isClickedWrong, setIsClickedWrong] = useState(false);
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setIsClickedWrong(true);
  };

  const buttonColor = {
    backgroundColor: isClickedWrong ? 'red' : 'white'
  }
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple');
      const data = await response.json();
      setQuizData(data.results);
    }
    fetchData();
  }, []);

/*
Possible other button changing colors: <button style={buttonColor} onClick={handleClick}>{question.correct_answer}</button>
*/

  return (
    
    <ul>
      <h1> Welcome to Alex's History Trivia Quiz! </h1>
      <h3> Score: {score}</h3>
      {quizData.map((question, index) => (
        <li key={index}>
          <h2>{question.question}</h2>
          <ul>
            <li>
            <button onClick={() => setScore(score + 1)}>{question.correct_answer}</button>
            </li>
            <li>
            <button >{question.incorrect_answers[0]}</button>
            </li>
            <li>
            <button >{question.incorrect_answers[1]}</button>
            </li>
            <li>
            <button >{question.incorrect_answers[2]}</button>
            </li>
           
            
          </ul>
        </li>
      ))}
    </ul>
  );
}
/*
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple');
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {data}
    </div>
  );
}
*/

export default App;
