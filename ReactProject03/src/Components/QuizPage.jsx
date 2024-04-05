import React, { useState, useEffect } from 'react';
import he from 'he';

export default function QuizPage() {
    const [questionData, setQuestionData] = useState([]);
    const [correctCount, setCorrectCount] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [temp, setTemp] = useState(false);
    const [effectVal, setEffectVal] = useState(true);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => {
                const shuffledData = data.results.map(item => {
                    const choices = [...item.incorrect_answers, item.correct_answer];
                    const shuffeldChoices = shuffleArray(choices);
                    return {
                        question: he.decode(item.question),
                        choices: shuffeldChoices.map(choice => he.decode(choice)),
                        correctAns: he.decode(item.correct_answer),
                        userChecked: ""
                    };
                });
                setQuestionData(shuffledData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // Display error message to user
            });
    }, [effectVal]);

    function objectsAreEqual(obj1, obj2) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (let key in obj1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
        return true;
    }

    function handleChange(clickedItem, choiceIndex) {
        const updatedData = questionData.map((item, i) => {
            if (objectsAreEqual(clickedItem, item)) {
                return { ...item, userChecked: item.choices[choiceIndex] };
            }
            return item;
        });
        setQuestionData(updatedData);
    }

    function countCorrectAnswers() {
        return questionData.filter(item => item.correctAns === item.userChecked).length;
    }

    function checkingAnswers() {
        const allChecked = questionData.every(item => item.userChecked !== "");
        if (allChecked) {
            changingCSS();
            const correct = countCorrectAnswers();
            setCorrectCount(correct);
            setClicked(true);
        } else {
            setTemp(true);
        }
    }

    function changingCSS() {
        const updatedData = questionData.map(item => {
            if (item.userChecked !== item.correctAns) {
                return { ...item, userChecked: item.userChecked, isWrong: true };
            }
            return item;
        });
        setQuestionData(updatedData);
    }

    function playAgain() {
        setClicked(false);
        setTemp(false);
        setEffectVal(prev => !prev);
    }

    const elementsArray = questionData.map((item, index) => (
        <div key={index} className='ques-div'>
            <h1>{item.question}</h1>
            <div className='box'>
                {item.choices.map((choice, choiceIndex) => (
                    <div key={choiceIndex} className={item.isWrong && item.correctAns === choice ? "correct-button" : (item.isWrong && item.userChecked === choice ? "wronge-button" : "radio-button")} >
                        <input
                            type="radio"
                            id={`mcq-${index}-${choiceIndex}`}
                            name={`mcq-${index}`}
                            onChange={() => handleChange(item, choiceIndex)}
                            value={choice}
                            checked={item.userChecked === choice}
                        />
                        <label htmlFor={`mcq-${index}-${choiceIndex}`}>{choice}</label>
                    </div>
                ))}
            </div>
        </div >
    ));

    return (
        <div className="Quiz-Page">
            {questionData.length > 0 ? elementsArray : <h1>Loading...</h1>}
            {!clicked ?
                (<div className='checkall-but'>
                    {temp && <h1>Please Check all the Options</h1>}
                    {questionData.length > 0 && <button className='check-but' onClick={checkingAnswers}>Check Answers</button>}
                </div>)
                :
                (<div className='clicked-but'>
                    <p>You Scored {correctCount}/5 correct answers</p>
                    <button className='check-but' onClick={playAgain}>Play Again</button>
                </div>)}
        </div>
    )
}
