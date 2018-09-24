import React from 'react';
import styles from './Header.css';
import { connect } from 'dva';



function Header(props){
  const {dispatch}=props;
  function handleClick() {

    const {num} = props.Header;

  
    dispatch({ type: 'Header/save',param:props.Header.num })
    
  }
  return (
    <h1 onClick={handleClick} className={styles.normal}>
      0{props.Header.num}
    </h1>
  );
}

// 监听属性，建立组件和数据的映射关系
function mapStateToProps(state) {
  const {data}=state.Header;
  console.log(data);

  return {
    Header:state.Header
  
  };
  }



export default connect(mapStateToProps)(Header);
