import React from "react";
import s from "./feedback.module.css";

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul className={s.list}>
      {options.map((el) => (
        <li key={el}>
          <button
            className={s.button}
            type="button"
            onClick={() => onLeaveFeedback(el)}
          >
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
