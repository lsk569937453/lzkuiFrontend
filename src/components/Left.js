// import React from 'react';
// import {connect} from 'dva';
// import stylesLeft from './Left.css';


// import {Tree, Icon} from 'antd';

// const TreeNode = Tree.TreeNode;


// function Left(props) {
//   const {dispatch} = props;

//   function handleOnSelect(selectedKeys, info)
//   {
//     if(selectedKeys==='/')
//     return;
//     dispatch({type: 'MainLayout/getPathData', path: selectedKeys[0]})


//   }


//   function onLoadData(treeNode) {

//     return new Promise((resolve) => {
//       if (treeNode.props.children) {
//         resolve();
//         return;
//       }
//       // setTimeout(() => {
//       //   dispatch({ type: 'Left/getChildren',path:treeNode.props.title})
//       //   resolve();
//       // }, 1000);
//       dispatch({type: 'Left/getChildren', path: treeNode.props.dataRef.key, title: treeNode.props.title})
//       resolve();
//     });

//   }

//   function renderTreeNodes(data) {
//     console.log(data)
//     return data.map((item) => {
//       if (item.children) {
//         return (
//           <TreeNode icon={<Icon type="folder"/>} title={item.title} key={item.key} dataRef={item}>
//             {renderTreeNodes(item.children)}
//           </TreeNode>
//         )
//       }
//       return <TreeNode icon={<Icon type="folder"/>} {...item} dataRef={item} style={{color:'white'}}/>;
//     });
//   }

//   return (
//     // <h1 onClick={handleClick} className={styles.normal}>
//     //   0{props.Left.path}
//     // </h1>
//       <Tree loadData={onLoadData} showIcon onSelect={handleOnSelect} className={stylesLeft.treeBackground} >
//         {renderTreeNodes(props.Left.path)}
//       </Tree>
//   );
// }

// // 监听属性，建立组件和数据的映射关系
// function mapStateToProps(state) {
//   const {data} = state.Left;
//   console.log(data);

//   return {
//     Left: state.Left

//   };
// }


// export default connect(mapStateToProps)(Left);
import { Tree } from 'antd';
import stylesLeft from './Left.css';
import { connect } from 'dva';
var React = require("react");

const TreeNode = Tree.TreeNode;

class Left extends React.Component {
  state = {
    treeData: [
      { title: 'root', key: '/', father: '/' }
    ],
  }

  onLoadData = (treeNode) => {
    return new Promise((resolve) => {
      if (treeNode.props.children) {
        resolve();
        return;
      }

      this.props.dispatch(
        {
          type: 'Left/getChildrenNew',

          payload: {
            resolve,
            path: treeNode.props.dataRef.key,
            title: treeNode.props.title
          }
        })
        //       resolve();
        // setTimeout(() => {
        //   treeNode.props.dataRef.children = [
        //     { title: 'Child Node', key: `${treeNode.props.eventKey}-0` },
        //     { title: 'Child Node', key: `${treeNode.props.eventKey}-1` },
        //   ];
        //   this.setState({
        //     treeData: [...this.state.treeData],
        //   });
        //   resolve();
        // }, 1000);
        // resolve();
    }).then((res) => {
      treeNode.props.dataRef.children=res;
      this.setState({
        treeData:[...this.state.treeData]
      })
    });
  };

  handleOnSelect=(selectedKeys)=>
  {
    if(selectedKeys==='/')
    return;
    this.props.dispatch({type: 'MainLayout/getPathData', path: selectedKeys[0]})


  }

  renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} dataRef={item} style={{ color: 'white' }} />;
    });
  }

  render() {
    return (
      <Tree loadData={this.onLoadData} className={stylesLeft.treeBackground} onSelect={this.handleOnSelect}>
        {this.renderTreeNodes(this.state.treeData)}
      </Tree>
    );
  }
}
export default connect()(Left)
