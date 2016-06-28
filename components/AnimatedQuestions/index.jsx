import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import Question from '../Question';

import styles from './AnimatedQuestions.css';

class AnimatedQuestions extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }

  constructor() {
    super();
    this.state = { windowWidth: window.innerWidth * .9 };
  }

  renderQuestion = (num) => {
    const className = classNames({
      [styles.question]: true,
    });

    const inlineStyles = {
      transform: `translateX(${this.state.windowWidth * num}px)`
    };

    return (
      <div key={num} className={className} style={inlineStyles}>
        <Question
          title="DO YOU HAVE A UNIQUE USER IDENTIFICATION?"
          input={this.props.fields.question1}
          category="Technical Requirements"
          current={num}
          total={this.props.total}
        >
          This applies specifically to clearinghouses that are part of
          larger organizations. In that case, make sure the clearinghouse
          has policies that ensure its ePHI isn’t compromised by unauthorized
          members of the broader organization.
        </Question>
      </div>
    );
  }

  render() {
    console.log(this.state)
    const style = {
      transform: `translateX(-${(this.props.current - 1) * this.state.windowWidth}px)`,
    };
    console.log(style)

    return (
      <div className={styles.root} style={style}>
        {_.range(0, this.props.total).map(this.renderQuestion)}
      </div>
    );
  }
}

export default AnimatedQuestions;
