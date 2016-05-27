import React from 'react';
import styles from './Form.css';
import Question from '../Question';

function Form() {
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
            name="question1"
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

export default Form;
