import React, { Component, PropTypes } from 'react';
import Radio from '../Radio';
import styles from './styles.css';

class RadioGroup extends Component {
  static   propTypes = {
    value: PropTypes.string,
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }

  render() {
    const options = [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
      { label: 'Doesn\'t apply', value: 'not_applicable' },
    ];

    return (
      <div className={styles.root}>
        {options.map((option, key) =>
          <div key={key} className={styles.item}>
            <Radio
              {...this.props}
              value={option.value}
              label={option.label}
              checked={option.value === this.props.value}
            />
          </div>
        )}
      </div>
    );
  }
}

export default RadioGroup;
