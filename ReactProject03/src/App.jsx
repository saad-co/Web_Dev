import { useState } from 'react'
import StartPage from './Components/StartPage'
import QuizPage from './Components/QuizPage'

function App() {
  const [startQuiz, setStartQuiz] = useState(true);
  function changeQuizState() {
    setStartQuiz(false);
  }
  return (
    <>
      {
        startQuiz ? <StartPage starting={changeQuizState} /> : <QuizPage />
      }
    </>
  )
}
export default App
