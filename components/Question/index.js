import React, { Component, PropTypes } from 'react';
import RadioGroup from '../RadioGroup';
import styles from './Question.css';

class Question extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
  }

  render() {
    const { title, children, ...input} = this.props;

    return (
      <div className={styles.question}>
        <div className={styles.modal}>
          <div className={styles.title}>
            {title}
          </div>
          <div className={styles.explainer}>
            {children}
          </div>
          <RadioGroup {...input} />
        </div>
      </div>
    );
  }
}

export default Question;
