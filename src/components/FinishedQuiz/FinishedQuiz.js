import React from "react"
import classes from "./FinishedQuiz.css"
import Button from "../UI/Button/Button"

function FinishedQuiz(props) {

    const successCount = Object.keys(props.results).reduce((count, item) => {
            if (props.results[item] === 'success') {
                count++
            }
            return count
        }, 0
    )

    return (
        <div className={classes.FinishedQuiz}>
            <ul>

                {
                    props.quiz.map((quizItem, index) => {
                        const cls = [
                            'fa',
                            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                            classes[props.results[quizItem.id]]
                        ]
                        return (
                            <li key={index}>
                                <strong>{index + 1} </strong>
                                {quizItem.question}
                                <i className={cls.join(' ')}/>
                            </li>
                        )
                    })
                }
                {/*<li>*/}
                {/*    <strong>1. </strong> Some text*/}
                {/*    <i className={'fa fa-times ' + classes.error} />*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <strong>1. </strong> Some text*/}
                {/*    <i className={'fa fa-check ' + classes.success} />*/}
                {/*</li>*/}
                {/*<li></li>*/}
            </ul>
            <p>Correct {successCount}/{props.quiz.length}</p>

            <div>
                <Button
                    onClick={props.onRetry}
                    type="primary"
                >
                    Try Again
                </Button>
                <Button
                    type="success"
                >
                    Go to quiz list
                </Button>
            </div>
        </div>
    )
}

export default FinishedQuiz

