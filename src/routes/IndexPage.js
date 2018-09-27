import React from 'react';
import {connect} from 'dva';
import styles from './IndexPage.css';
import stylesLeft from '../components/Left.css';
import Left from '../components/Left'
import MainLayout from '../components/MainLayout';
import AddNodeModal from '../components/AddNodeModal';


import {Layout, Menu, Breadcrumb} from 'antd';

const {SubMenu} = Menu;
const {Header, Content,Sider} = Layout;

function IndexPage(props) {
  const {dispatch} = props;

  function handleAddnode()
  {
    dispatch({type: 'AddNodeModal/show'})

  }
  return (
    <Layout>
       <AddNodeModal />
         <br />
      <Header className="header">
        <div className={styles.logo}/>
       
        <Menu
          theme="dark"
          mode="horizontal"
         
          style={{lineHeight: '64px'}}
        >
        <Menu.Item key="1" onClick={handleAddnode}>Add Node</Menu.Item>
        <Menu.Item key="2">Add Property</Menu.Item>
        <Menu.Item key="3">Delete</Menu.Item>

        </Menu>

      </Header>
      <Layout>
        <Sider   style={{ overflow:"auto"}} className={stylesLeft.normal}>
          <Left/>

        </Sider>
        <Layout style={{padding: '0 24px 24px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          {/* <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
            Content
          </Content> */}
          <MainLayout/>
      
    
        </Layout>
      </Layout>
    </Layout>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
