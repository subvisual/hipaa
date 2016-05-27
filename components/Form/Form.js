import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import styles from './Form.css';

function onClick () {
}
function Form() {
  return (
    <div>
      <header />
      <section className={styles.content}>
        <h1 className={styles.title}>
          Are you <span className={styles.titleHighlight}>HIPAA</span> compliant?
        </h1>
        <div className={styles.timeline}>
          <HorizontalTimeline values={['1', '2', '3', '4']} indexClick={onClick} />
        </div>
        <div className={styles.question}>
          <div className={styles.questionModal}>
              <div className={styles.questionTitle}>
                Testing this sheeeet
              </div>
              <div className={styles.questionExplainer}>
                This is a dummy-proof explanation of the question.
              </div>
              <div className={styles.questionAnswer}>
                <form>
                  <input className={styles.hidden} type="radio" name="question1" id="yes" value="Yes"/>
                  <label className={styles.radio} htmlFor="yes">
                    Yes
                  </label>
                  <input className={styles.hidden} id="no"  name="question1" type="radio" value="No"/>
                  <label className={styles.radio} htmlFor="no">
                    No
                  </label>
                  <input className={styles.hidden} id="undefined"  name="question1" type="radio" value="Don't Apply"/>
                  <label className={styles.radio} htmlFor="undefined">
                    Don't Apply
                  </label>
                </form>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;
