import React from 'react';
import { connect } from 'dva';
import styles from './Left.css';

function Left() {
  return (
    <div className={styles.normal}>
      Route Component: Header
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Left);
