import React from 'react';
import { Tabs,Table } from 'antd';
import { connect } from 'dva';

const TabPane = Tabs.TabPane;


function MainLayout(props) {

 // const {dispatch}=props;

  const columns = [{
  title: 'nodekey',
  dataIndex: 'nodekey',
  key: '0' ,

  width: '50%',
},{
  title: 'value',
  dataIndex: 'value',
  key: '1' ,

  width: '50%',
}];

  function handleChange() {



  //  const {num} = props.Header;

  
  //  dispatch({ type: 'Header/getChildren',param:props.Header.num })

    //  dispatch 
    
  }

  return (
    <Tabs defaultActiveKey="1" onChange={handleChange}>
    <TabPane tab="content" key="1">
   
    <Table
        columns={columns}
        pagination={false}
        dataSource={props.MainLayout.statData}>
      </Table>
    
    </TabPane>
    <TabPane tab="stat" key="2">{props.MainLayout.nodeData} </TabPane>
  
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
