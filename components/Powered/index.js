import React, { Component } from 'react';

import styles from './Powered.css';


class Powered extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h1 className={styles.title}>Powered by</h1>
        <div className={styles.image}>
          <img src='/powered.png' className={styles.hidden} />
        </div>
      </div>
    )
  }
}

export default Powered;
