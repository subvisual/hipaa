import React, { Component, PropTypes } from 'react';
import RadioGroup from '../RadioGroup';
import styles from './styles.css';

class Question extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    currentQuestion: PropTypes.string.isRequired,
    totalQuestions: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    children: PropTypes.node,
  }

  get questionModal() {
    return (
      <div className={styles.questionModal}>
        <div className={styles.questionTitle}>
          {this.props.title}
        </div>

        <div className={styles.questionExplainer}>
          {this.props.children}
        </div>

        <RadioGroup input={this.props.input} />
      </div>
    );
  }

  get questionContext() {
    return (
      <div className={styles.context}>
        <span className={styles.category}>
          {this.props.category}
        </span>
        <div className={styles.questionCount}>
          <span className={styles.currentQuestion}>
            {this.props.currentQuestion}
          </span>
          <span className={styles.totalQuestions}>
            /{this.props.totalQuestions}
          </span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.question}>
        {this.questionModal}
        {this.questionContext}
      </div>
    );
  }
}

export default Question;
