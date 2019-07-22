import React from "react"
import classes from "./ActiveQuiz.css"
import AnswersList from "./AnswersList/AnswersList";

function ActiveQuiz(props) {
    return(
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>{props.answerNumber} </strong>
                    {props.question}
                </span>
                <small>{props.answerNumber}/{props.quizLength}</small>
            </p>
            <AnswersList
                answers={props.answers}
                onAnswerClick = {props.onAnswerClick}
                state = {props.state}
            />
        </div>
    )
}
export default ActiveQuiz