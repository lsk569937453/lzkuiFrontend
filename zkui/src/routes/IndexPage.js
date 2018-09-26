import React from 'react';
import {connect} from 'dva';
import styles from './IndexPage.css';
import stylesLeft from '../components/Left.css';
import Left from '../components/Left'
import MainLayout from '../components/MainLayout';


import {Layout, Menu, Breadcrumb} from 'antd';

const {SubMenu} = Menu;
const {Header, Content,Sider} = Layout;

function IndexPage() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{lineHeight: '64px'}}
        >

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
