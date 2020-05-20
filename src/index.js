import React, { Component } from "react";
import QuizService from "./quizService";
import ReactDOM from "react-dom";
import App from "./App";
import quizService from "./quizService";
import QuestionBox from "./component/questionBox";
import "bootstrap/dist/css/bootstrap.min.css";
import Result from "./component/result.jsx";
class QuizBee extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
  };

  getQuestions = () => {
    quizService().then((question) => {
      this.setState({
        questionBank: question,
      });
      console.log("questionBank: ", this.state.questionBank);
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  computeAnswer = (answer, correct) => {
    if (answer == correct) {
      this.setState({
        score: this.state.score + 1,
      });
    }

    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };

  playAgainFunc = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                key={questionId}
                selected={(answer) => this.computeAnswer(answer, correct)}
              />
            )
          )}

        {this.state.responses === 5 ? (
          <Result score={this.state.score} playAgain={this.playAgainFunc} />
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <QuizBee />
  </React.StrictMode>,
  document.getElementById("root")
);
