import { useEffect, useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {

  const [diceNumbers, setDiceNumbers] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

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
    }
  }

  return (
    <main className="main">
      {tenzies ? <Confetti /> : ""}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="container">
        {elem}
      </div>
      <button className="butt" onClick={changeDiceNumbers}>{tenzies ? "RESET" : "ROLL"}</button>
    </main>

  );
}