import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router'
import { reduxForm } from 'redux-form';

import styles from './Form.css';

import AnimatedQuestions from '../AnimatedQuestions';
import QuestionTimeline from '../QuestionTimeline';
import QuestionContext from '../QuestionContext';

class Form extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    params: PropTypes.shape({
      question_id: PropTypes.string.isRequired,
    }),
  }

  get current() {
    return parseInt(this.props.params.question_id, 10);
  }

  get total() {
    return 10;
  }

  handleSelect = (num) => {
    browserHistory.push(`/form/${num}`);
  }

  render() {
    return (
      <section className={styles.root}>
        <h1 className={styles.title}>
          Are you <span className={styles.titleHighlight}>HIPAA</span> compliant?
        </h1>
        <div className={styles.timeline}>
          <QuestionTimeline
            current={this.current}
            total={this.total}
            onClick={this.handleSelect}
            name="timeline"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.context}>
            <QuestionContext
              {...this.props}
              total={this.total}
              current={this.current}
              category="Technical Requirements"
            />
          </div>
          <form className={styles.form}>
            <AnimatedQuestions
              {...this.props}
              total={this.total}
              current={this.current}
            />
          </form>
        </div>
      </section>
    );
  }
}

export default reduxForm({
  form: 'answers',
  fields: [
    'question1',
    'question2',
    'question3',
  ],
})(Form);
