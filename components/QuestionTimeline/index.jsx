import _ from 'lodash';
import classNames from 'classnames';
import React, { PropTypes, Component } from 'react';
import styles from './QuestionTimeline.css';

class QuestionTimeline extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  }

  handleClick = (num) => {
    this.props.onClick(num);
  }

  renderItem = (num) => {
    const className = classNames({
      [styles.item]: num !== this.props.current,
      [styles.itemSelected]: num === this.props.current,
    });

    return (
      <label key={num} className={className}>
        <input
          className={styles.input}
          type="radio"
          name={this.props.name}
          value={num}
          onChange={() => this.handleClick(num)}
        />
      </label>
    );
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.line} />
        {_.range(1, this.props.total + 1).map(this.renderItem)}
      </div>
    );
  }
}

export default QuestionTimeline;
