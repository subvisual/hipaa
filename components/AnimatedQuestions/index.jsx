import _ from 'lodash';
import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import Question from '../Question';

import styles from './AnimatedQuestions.css';

class AnimatedQuestions extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth * .9,
      onChangeHash: _.mapValues(props.fields, field => {
        const num = parseInt(field.name.split('question')[1], 10);
        return (value) => {
          field.onChange(value);
          props.onChange(num);
        };
      }),
    };
  }

  inputFor = (num) => {
    const input = this.props.fields[`question${num}`];
    return _.extend({}, input, {
      onChange: this.state.onChangeHash[`question${num}`]
    });
  }

  renderQuestion = (num) => {
    const inlineStyles = {
      transform: `translateX(${this.state.windowWidth * (num - 1)}px)`
    };

    return (
      <div key={num} className={styles.question} style={inlineStyles}>
        <Question
          title="DO YOU HAVE A UNIQUE USER IDENTIFICATION?"
          {...this.inputFor(num)}
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
    const style = {
      transform: `translateX(-${(this.props.current - 1) * this.state.windowWidth}px)`,
    };

    return (
      <div className={styles.root} style={style}>
        {_.range(1, this.props.total + 1).map(this.renderQuestion)}
      </div>
    );
  }
}

export default AnimatedQuestions;
