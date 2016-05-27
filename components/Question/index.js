import React, { Component, PropTypes } from 'react';
import styles from './styles.css';

class Question extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }

  id(originalId) {
    return `${this.props.name}-${originalId}`;
  }

  render() {
    return (
      <div className={styles.question}>
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
      </div>
    );
  }
}

export default Question;
