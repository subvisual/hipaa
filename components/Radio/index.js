import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import styles from './Radio.css';

function Radio(props) {
  const { checked, label, ...rest } = props;

  const className = classNames({
    [styles.root]: true,
    [styles.checked]: checked,
  });

  return (
    <label className={className}>
      <inut {...props} className={styles.input} />
      {label}
    </label>
  );
}

export default Radio;
