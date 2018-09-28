import React from 'react';
import styles from './AddNodeModal.css';
import { Modal, Button, Input, Radio ,Form} from 'antd';
import { connect } from 'dva';

const FormItem = Form.Item;


  class FancySearchForm extends React.Component {
   
    render() {
      const {  path, form } = this.props;
      const { getFieldDecorator } = form;
      return (
      
          <Form layout="vertical">
          
            <FormItem label={'the current  path is:'+this.props.path}>
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </FormItem>
          
          </Form>
      
      );
    }
  }
;
const CollectionCreateForm = Form.create()(FancySearchForm);


function AddNodeModal({ dispatch, path:srcPath,visible:visible})  {
  
  

  function showModal() {

    dispatch({ type: 'AddNodeModal/show' })

  }

  function hideModal() {

    dispatch({ type: 'AddNodeModal/hide' })

  }


  return (
    


      <Modal
        title="addNode"
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        okText="confirm"
        cancelText="cancel"
      >
        <CollectionCreateForm
      
          visible={visible}
          onCancel={true}
          path={srcPath}
          
        />
      </Modal>
    
  );
}

function mapStateToProps(state) {
  const { path,visible } = state.AddNodeModal;
  console.log(path);

  return {
    path,visible

  };
}


export default connect(mapStateToProps)(AddNodeModal);
