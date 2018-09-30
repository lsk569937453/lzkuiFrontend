import React from 'react';
import styles from './NodeProperty.css';
import { Skeleton, Switch, Card, Icon, Avatar, Badge, Layout, Menu, Button, Divider, Input, Progress } from 'antd';
import { connect } from 'dva';
const { TextArea } = Input;

const { Meta } = Card;
class NodePropertyCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // list: this.props.List
      showOther:false

  }
}


  onChange = (checked) => {
    this.setState({ loading: !checked });
  }

  handleEdit = () => {
    this.props.dispatch({type:'MainLayout/setEditButtonHide'})

  }
  handleSave = () => {
  

    this.props.dispatch({ type: 'MainLayout/saveNodePropertyTobackend', nodeProperty: this.props.nodeProperty })
  }
  handleCancel = () => {
    this.setState({ showOther: false })
  }
  handleChange = (e) => {

    this.props.dispatch({ type: 'MainLayout/saveNodeData', nodeProperty: e.target.value });
    console.log(this)

  }


  render() {


    const { nodeProperty, progress,showOther } = this.props;
    

    return (
      <div>
        {
          !showOther &&
          <div>
            <Button type="primary" onClick={this.handleEdit} className={styles.saveCannelButton}>Edit</Button>
          </div>
        }
        {
          showOther &&
          <div>
            <Button type="primary" onClick={this.handleSave} className={styles.saveCannelButton} onClick={this.handleSave}>Save</Button>
            <Button type="primary" onClick={this.handleEdit} className={styles.saveCannelButton} onClick={this.handleCancel}>Cancel</Button>
          </div>
        }
        { progress.show&& <Progress percent={progress.percent} status={progress.status} />}

        <Divider></Divider>

        {
          showOther && <TextArea onChange={this.handleChange} value={nodeProperty} />
        }
        {
          !showOther && nodeProperty
        }
      </div>
    );
  }
}




function NodeProperty({ dispatch, nodeProperty: nodeProperty, progress: progress }) {
  return (
    <div className={styles.normal}>
      <NodePropertyCard nodeProperty={nodeProperty} progress={progress} />
    </div>
  );
}
function mapStateToProps(state) {
  let { nodeData, progress ,showOther} = state.MainLayout;


  return {
    nodeProperty: nodeData,
    progress: progress,
    showOther:showOther

  };
}


export default connect(mapStateToProps)(NodePropertyCard);
