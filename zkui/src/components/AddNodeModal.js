import React from 'react';
import styles from './AddNodeModal.css';
import { Modal, Button } from 'antd';
import {connect} from 'dva';


function AddNodeModal(props) {
  const {dispatch} = props;
  function showModal(){
   
    dispatch({type: 'AddNodeModal/show'})
    
  }

  function hideModal() {
    
    dispatch({type: 'AddNodeModal/hide'})
    
  }

  return (
    <div>
    <Modal
      title="Modal"
      visible={props.AddNodeModal.visible}
      onOk={hideModal}
      onCancel={hideModal}
      okText="确认"
      cancelText="取消"
    >
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
    </Modal>
  </div>
  );
}

function mapStateToProps(state) {
  const {data} = state.AddNodeModal;
  console.log(data);

  return {
    AddNodeModal: state.AddNodeModal

  };
}


export default connect(mapStateToProps)(AddNodeModal);
