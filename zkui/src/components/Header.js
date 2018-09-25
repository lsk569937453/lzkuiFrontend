import React from 'react';
import styles from './Header.css';
import { connect } from 'dva';



function Header(props){
  const {dispatch}=props;
  function handleClick() {

    const {num} = props.Header; 

  
    dispatch({ type: 'Header/getChildren',path:props.Header.path })
    dispatch({ type: 'Header/getNodeData',path:props.Header.path })
    
  }
  return (
    <h1 onClick={handleClick} className={styles.normal}>
      0{props.Header.path}
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
