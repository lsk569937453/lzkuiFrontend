import React from 'react';
import styles from './AddNodeModal.css';
import { Modal, Button, Input, Radio ,Form} from 'antd';
import { connect } from 'dva';

const FormItem = Form.Item;


function AddNodeModal(props) {
  const { dispatch } = props;
  function showModal() {

    dispatch({ type: 'AddNodeModal/show' })

  }

  function hideModal() {

    dispatch({ type: 'AddNodeModal/hide' })

  }

  return (
    <div>


      <Modal
        title="addNode"
        visible={props.AddNodeModal.visible}
        onOk={hideModal}
        onCancel={hideModal}
        okText="confirm"
        cancelText="cancel"
      >
        <Form layout="vertical">
            <FormItem label="Title">
            
            </FormItem>
            <FormItem label="Description">
              
            </FormItem>
            <FormItem className="collection-create-form_last-form-item">
              
            </FormItem>
          </Form>
      </Modal>
    </div>
  );
}

function mapStateToProps(state) {
  const { data } = state.AddNodeModal;
  console.log(data);

  return {
    AddNodeModal: state.AddNodeModal

  };
}


export default connect(mapStateToProps)(AddNodeModal);
