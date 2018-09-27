import React from 'react';
import { connect } from 'dva';
import styles from './ZKchildren.css';

function ZKchildren() {
  return (
    <div className={styles.normal}>
      Route Component: ZKchildren
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ZKchildren);
