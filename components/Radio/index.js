import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.css';

function Radio(props) {
  const { checked, label, onChange, value, name } = props;

  const className = classNames({
    [styles.root]: true,
    [styles.checked]: checked,
  });

  return (
    <label onClick={() => onChange(value)} className={className}>
      <inut {...props} type="radio" value={value} className={styles.input} />
      {label}
    </label>
  );
}

export default Radio;
