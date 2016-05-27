import React, { Component, PropTypes } from 'react';
import Radio from '../Radio';
import styles from './styles.css';

function RadioGroup({ input }) {
  const options = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Doesn\'t apply', value: 'not_applicable' },
  ];

  console.log(input);
  return (
    <div className={styles.root}>
      {options.map((option, key) =>
        <div key={key} className={styles.item}>
          <Radio
            {...input}
            value={option.value}
            label={option.label}
            checked={option.value === input.value}
          />
        </div>
      )}
    </div>
  );
}

RadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
};

export default RadioGroup;
