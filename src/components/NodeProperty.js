import React from 'react';
import styles from './NodeProperty.css';
import { Skeleton, Switch, Card, Icon, Avatar, Badge, Layout, Menu, Button,Divider, Input,Progress } from 'antd';
import { connect } from 'dva';
const { TextArea } = Input;

const { Meta } = Card;
class NodePropertyCard extends React.Component {
  state = {
    showOther:false,
    nodeContent:"st",
    progress:{
      show:false,
      exception:false,
      percent:0
    }
  }

  onChange = (checked) => {
    this.setState({ loading: !checked });
  }

  handleEdit=()=>{
    this.setState({showOther:true})
    
  }
  handleSave=()=>{
    this.setState({showOther:false,
      progress:{
        show:true,
        status:"active",
        percent:20
      }
    })
  
    this.props.dispatch({type:'MainLayout/saveNodePropertyTobackend',nodeProperty:this.props.nodeProperty}).then((item)=>
    {
      setTimeout(() => {

        this.setState({
          progress:{
            show:false
          }
        })

      },50000)
      
    })
  }
  handleCancel=()=>{
    this.setState({showOther:false})
  }
  handleChange=(e)=>{

    this.props.dispatch({type:'MainLayout/saveNodeData',nodeProperty:e.target.value});
  console.log(this)
   
  }
  

  render() {


    const {  nodeProperty,progress} = this.props;

    return (
      <div>
        {
         !this.state.showOther&&
         <div>
           <Button type="primary" onClick={this.handleEdit} className={styles.saveCannelButton}>Edit</Button>
           </div>
        }
        {
          this.state.showOther&&
          <div>
          <Button type="primary" onClick={this.handleOnClick} className={styles.saveCannelButton} onClick={this.handleSave}>Save</Button>
          <Button type="primary" onClick={this.handleOnClick} className={styles.saveCannelButton} onClick={this.handleCancel}>Cancel</Button>
          </div>
        }
        {this.state.progress.show&&<Progress percent={progress.percent} status={progress.status} />}

         <Divider></Divider>

        {
         this.state.showOther&&<TextArea onChange={this.handleChange} value={nodeProperty}/>
        }
        {
          !this.state.showOther&&nodeProperty
        }
      </div>
    );
  }
}




function NodeProperty({ dispatch, nodeProperty: nodeProperty }) {
  return (
    <div className={styles.normal}>
      <NodePropertyCard nodeProperty={nodeProperty} />
    </div>
  );
}
function mapStateToProps(state) {
  let { nodeData,progress } = state.MainLayout;


  return {
    nodeProperty:nodeData,
    progress:progress

  };
}


export default connect(mapStateToProps)(NodePropertyCard);
