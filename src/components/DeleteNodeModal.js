import React from 'react';
import { Modal } from 'antd';
import { connect } from 'dva';

function DeleteNodeModal({ dispatch, path: srcPath, visible: visible }) {

  function handleOnOk() {
    dispatch({ type: 'DeleteNodeModal/deleteNode',path:srcPath })

  }

  function hideModal() {

    dispatch({ type: 'DeleteNodeModal/hide' })

  }

  return (
    <Modal
      title="Delete Node"
      visible={visible}
      onOk={handleOnOk}
      onCancel={hideModal}
    >
      <p>do you want do dele the node:</p>
      <p>{srcPath}</p>

    </Modal>
  );

}
function mapStateToProps(state) {
  const { path, visible } = state.DeleteNodeModal;


  return {
    path, visible

  };
}


export default connect(mapStateToProps)(DeleteNodeModal);

