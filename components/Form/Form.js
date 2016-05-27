import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import styles from './Form.css';
import Question from '../Question';

function Form({ fields }) {
  return (
    <div>
      <header />
      <section className={styles.content}>
        <h1 className={styles.title}>
          Are you <span className={styles.titleHighlight}>HIPAA</span> compliant?
        </h1>
        <div className={styles.timeline}>
        </div>
        <form className={ styles.form }>
          <Question
            title="Testing this sheeeet"
            input={fields.question1}
            category="Technical Requirements"
            currentQuestion="1"
            totalQuestions="10"
          >
            This is a dummy-proof explanation of the question.
          </Question>
        </form>
      </section>
    </div>
  );
}

Form.propTypes = {
  fields: PropTypes.object.isRequired
};

export default reduxForm({
  form: 'answers',
  fields: [
    'question1',
    'question2',
    'question3',
  ],
})(Form);
