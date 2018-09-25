import React from 'react';
import styles from './MainLayout.css';
import { Tabs } from 'antd';
import { connect } from 'dva';

const TabPane = Tabs.TabPane;


function MainLayout(props) {

  const {dispatch}=props;

  function handleChange() {

  //  const {num} = props.Header;

  
  //  dispatch({ type: 'Header/getChildren',param:props.Header.num })

    //  dispatch 
    
  }

  return (
    <Tabs defaultActiveKey="1" onChange={handleChange}>
    <TabPane tab="元数据" key="1">{props.MainLayout.data1}</TabPane>
    <TabPane tab="内容" key="2">{props.MainLayout.data2}</TabPane>
  
  </Tabs>
  );
}

// 监听属性，建立组件和数据的映射关系
function mapStateToProps(state) {
  const {data1}=state.MainLayout;
  console.log(data1);

  return {
    MainLayout:state.MainLayout
  
  };
  }

export default connect(mapStateToProps)(MainLayout);
