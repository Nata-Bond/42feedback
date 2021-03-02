import React, { Component } from "react";
import Section from "./section/Section";
import FeedbackOptions from "./feedback/FeedbackOptions";
import Statistics from "./statistics/Statistics";
import Notification from "./notification/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, item) => acc + item, 0);

  countPositiveFeedbackPercentage = (sum) =>
    Math.round((this.state.good / sum) * 100);

  onLeaveFeedback = (mark) =>
    this.setState((prev) => {
      return { [mark]: prev[mark] + 1 };
    });

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage(total);
    const options = Object.keys(this.state);

    return (
      <>
        <Section title="Please, leave your feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={options}
          />
        </Section>
        <Section>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
