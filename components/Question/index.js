import React, { Component, PropTypes } from 'react';
import styles from './styles.css';

class Question extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    currentQuestion: PropTypes.string.isRequired,
    totalQuestions: PropTypes.string.isRequired,
  }

  id(originalId) {
    return `${this.props.name}-${originalId}`;
  }

  get questionModal() {
    return (
      <div className={styles.questionModal}>
        <div className={styles.questionTitle}>
          { this.props.title }
        </div>

        <div className={styles.questionExplainer}>
          { this.props.children }
        </div>

        <div className={styles.questionAnswer}>
          <input className={styles.hidden} type="radio" name={ this.props.name } id={ this.id('yes') } value="Yes"/>
          <label className={styles.radio} htmlFor={ this.id('yes') }>
            Yes
          </label>

          <input className={styles.hidden} id={ this.id('no') } name={ this.props.name } type="radio" value="No"/>
          <label className={styles.radio} htmlFor={ this.id('no') }>
            No
          </label>

          <input className={styles.hidden} id={ this.id('undefined') }  name={ this.props.name } type="radio" value="Don't Apply"/>
          <label className={styles.radio} htmlFor={ this.id('undefined') }>
            Don't Apply
          </label>
        </div>
      </div>
    );
  }

  get questionContext() {
    return (
      <div className={styles.context}>
        <span className={styles.category}>
          { this.props.category }
        </span>
        <div className={styles.questionCount}>
          <span className={styles.currentQuestion}>
            { this.props.currentQuestion }
          </span>
          <span className={styles.totalQuestions}>
            /{ this.props.totalQuestions }
          </span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.question}>
        { this.questionModal }
        { this.questionContext }
      </div>
    );
  }
}

export default Question;
