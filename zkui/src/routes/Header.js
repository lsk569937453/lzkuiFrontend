import React from 'react';
import { connect } from 'dva';
import styles from './Header.css';

function Header() {
  return (
    <div className={styles.normal}>
      Route Component: Header
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Header);
