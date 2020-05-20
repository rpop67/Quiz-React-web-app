import React, { useState } from "react";
import "./questionBox.css";

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="card">
      <div className="questions">{question}</div>
      <div className="optionsBody">
        {answer.map((text, index) => (
          <button
            className="optionButton"
            key={index}
            onClick={() => {
              setAnswer([text]);
              selected(text);
            }}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionBox;
