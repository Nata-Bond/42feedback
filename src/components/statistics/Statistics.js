import React from "react";
import s from "./statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div className={s.statistics}>
      <h2>Statistics:</h2>
      <ul className={s.list}>
        <li className={s.listItem}>Good: {good}</li>
        <li className={s.listItem}>neutral: {neutral}</li>
        <li className={s.listItem}>bad: {bad}</li>
        <li className={s.listItem}>Total: {total}</li>
        <li className={s.listItem}>Positive feedback: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Statistics;
