import React, { Component, PropTypes } from 'react';
import Radio from '../Radio';
import styles from './styles.css';

function RadioGroup({ inputs }) {
  console.log(arguments);
  return (
    <div className={styles.root}>
      {inputs.map((input, key) =>
        <div key={key} className={styles.item}>
          <Radio {...input} />
        </div>
      )}
    </div>
  );
}

RadioGroup.propTypes = {
  inputs: PropTypes.array.isRequired,
};

export default RadioGroup;
