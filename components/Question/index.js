import React, { Component, PropTypes } from 'react';
import RadioGroup from '../RadioGroup';
import styles from './Question.css';

class Question extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    input: PropTypes.object.isRequired,
    children: PropTypes.node,
  }

  render() {
    return (
      <div className={styles.question}>
        <div className={styles.modal}>
          <div className={styles.title}>
            {this.props.title}
          </div>
          <div className={styles.explainer}>
            {this.props.children}
          </div>
          <RadioGroup input={this.props.input} />
        </div>
      </div>
    );
  }
}

export default Question;
