import React, { PropTypes, Component } from 'react';

import styles from './QuestionContext.css';

class QuestionContext extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.current !== this.props.current;
  }

  render() {
    const [categoryFirstWord, ...categoryLastWords] = this.props.category.split(' ');

    return (
      <div className={styles.context}>
        <div className={styles.categoryFirstWord}>
          {categoryFirstWord}
        </div>
        <div className={styles.categoryLastWords}>
          {categoryLastWords.join(' ')}
        </div>
        <div className={styles.count}>
          <span className={styles.current}>
            {this.props.current}
          </span>
          <span className={styles.total}>
            /{this.props.total}
          </span>
        </div>
      </div>
    );
  }

}

export default QuestionContext;
