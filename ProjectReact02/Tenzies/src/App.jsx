import { useEffect, useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import Head from "./components/Head";

export default function App() {

  const [diceNumbers, setDiceNumbers] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [count, setCount] = useState(0);
  const [timer, startStopTimer] = useState(false);

  useEffect(function () {
    const allheld = diceNumbers.every(die => die.isHeld);
    const first = diceNumbers[0].number;
    const allSameNum = diceNumbers.every(die => die.number === first);
    if (allheld && allSameNum) {
      // console.log("You have won the game");
      setTenzies(true);
    }
  }, [diceNumbers])


  function allNewDice() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr[i] = { number: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid() };
    }
    return arr;
  }

  function Hold(Id) {
    startStopTimer(true);
    setDiceNumbers(
      oldArr => {
        return oldArr.map(die => {
          return die.id === Id ? { ...die, isHeld: !die.isHeld } : die
        })
      }
    )
  }


  const elem = diceNumbers.map((die) => {
    return <Die value={die.number} key={die.id} status={die.isHeld} holding={() => Hold(die.id)} />
  })

  function changeDiceNumbers() {
    if (!tenzies) {
      setCount(count + 1);
      setDiceNumbers(
        oldArr => {
          return oldArr.map(die => {
            return die.isHeld ? { ...die } : { ...die, number: Math.ceil(Math.random() * 6) }
          })
        }
      )
    }
    else {
      setTenzies(false);
      setDiceNumbers(allNewDice);
      setCount(0);
      startStopTimer(false);
    }
  }

  return (
    <main className="main">
      {tenzies ? <Confetti /> : ""}
      <Head value={count} startStop={timer} />
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="container">
        {elem}
      </div>
      <button className="butt" onClick={changeDiceNumbers}>{tenzies ? "RESET" : "ROLL"}</button>
    </main>

  );
}