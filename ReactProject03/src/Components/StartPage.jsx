export default function StartPage(props) {
    return (
        <div className="main">
            <h1>Quizzical</h1>
            <p className="para">
                Quizzical is an engaging and interactive quiz-taking web application designed to help users practice their knowledge in various subjects.Quizzical provides a fun way to test your understanding and track your progress. Dive into the world of quizzes with Quizzical today!
            </p>
            <button className="start-butt" onClick={props.starting}><p>Start Quiz</p></button>
        </div>
    )
}