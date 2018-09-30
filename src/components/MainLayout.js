import React from 'react';
import { Tabs, Table, Layout, Breadcrumb } from 'antd';
import { connect } from 'dva';
import NodeProperty from './NodeProperty';

const TabPane = Tabs.TabPane;


function MainLayout(props) {

  // const {dispatch}=props;

  const columns = [{
    title: 'nodekey',
    dataIndex: 'nodekey',
    key: '0',

    width: '50%',
  }, {
    title: 'value',
    dataIndex: 'value',
    key: '1',

    width: '50%',
  }];

  function handleChange() {



    //  const {num} = props.Header;


    //  dispatch({ type: 'Header/getChildren',param:props.Header.num })

    //  dispatch 

  }
  function pathItemRender(route, params, routes, paths)
  {
    return <span>{route.breadcrumbName}</span>;

  }

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb itemRender={pathItemRender} routes={props.MainLayout.routes} style={{ margin: '16px 0' }}>
       
      </Breadcrumb>
      <Tabs defaultActiveKey="2" onChange={handleChange} >
        <TabPane tab="Content" key="2">
          <NodeProperty nodeProperty={props.MainLayout.nodeData} progress={props.MainLayout.progress}/>
        </TabPane>
        <TabPane tab="Stat" key="1">

          <Table
            columns={columns}
            pagination={false}
            dataSource={props.MainLayout.statData}>
          </Table>

        </TabPane>


      </Tabs>
    </Layout>

  );
}

// 监听属性，建立组件和数据的映射关系
function mapStateToProps(state) {
  const { data1 } = state.MainLayout;
  console.log(data1);

  return {
    MainLayout: state.MainLayout

  };
}


export default connect(mapStateToProps)(MainLayout);
