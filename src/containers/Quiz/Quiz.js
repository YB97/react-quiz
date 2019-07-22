import React from "react"
import classes from "./Quiz.css"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"

class Quiz extends React.Component {

    state = {
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: 'Who is the cat?',
                rightAnswerId: 3,
                answers: [
                    { text: 'ans 1', id: 1 },
                    { text: 'ans 2', id: 2 },
                    { text: 'ans 3', id: 3 },
                    { text: 'ans 4', id: 4 }
                ],
            },
            {
                id: 2,
                question: 'Who is the dog?',
                rightAnswerId: 2,
                answers: [
                    { text: 'ans 5', id: 1 },
                    { text: 'ans 6', id: 2 },
                    { text: 'ans 3', id: 3 },
                    { text: 'ans 4', id: 4 }
                ],
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === "success") {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {

            this.setState({
                answerState: {
                    [answerId]: 'success'
                }
            })
            const timeout = window.setTimeout(() => {

                if (this.isQuizFinished()) {
                    console.log('finish')
                } else {
                    this.setState((prevState) => {
                        return ({
                            activeQuestion: prevState.activeQuestion + 1,
                            answerState: null
                        })
                    })
                }

                window.clearTimeout(timeout);
            }, 1000)


        } else {
            this.setState({
                answerState: {
                    [answerId]: 'error'
                }
            })
        }


    }

    isQuizFinished() {
        return this.state.quiz.length === this.state.activeQuestion + 1
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz
                        answers = {this.state.quiz[this.state.activeQuestion].answers}
                        question = {this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick = {this.onAnswerClickHandler}
                        quizLength = {this.state.quiz.length}
                        answerNumber = {this.state.activeQuestion+1}
                        state = {this.state.answerState}
                    />
                </div>
            </div>
        )

    }
}


export default Quiz