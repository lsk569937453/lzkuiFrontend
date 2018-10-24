import React from 'react';

import { Modal, Input ,Form} from 'antd';
import { connect } from 'dva';

const FormItem = Form.Item;


  class FancySearchForm extends React.Component {
   



    render() {
      const {   form } = this.props;
      const { getFieldDecorator } = form;
      return (
      
          <Form layout="vertical" >
          
            <FormItem label={'the current  path is:'+this.props.path}>
              {getFieldDecorator('description')(<Input type="textarea" onChange={this.props.inputChange}/>)}
            </FormItem>
          
          </Form>
      
      );
    }
  }
;
const CollectionCreateForm = Form.create()(FancySearchForm);


function AddNodeModal({ dispatch, path:srcPath,visible:visible,nodeValue:currentNodeValue})  {
  


  function hideModal() {

    dispatch({ type: 'AddNodeModal/hide' })

  }
  function addNode()
  {
    dispatch({type:'AddNodeModal/addNode',path:srcPath,nodeValue:currentNodeValue})
  }
  function changeInput(event)
  {
  
    dispatch({type:'AddNodeModal/setModelNodeValue',nodeValue:event.target.value})
    
  }

  return (
    


      <Modal
        title="addNode"
        visible={visible}
        onOk={addNode}
        onCancel={hideModal}
        okText="confirm"
        cancelText="cancel"
      >
        <CollectionCreateForm
      
          visible={visible}
          onCancel={true}
          path={srcPath}
          inputChange={changeInput.bind(this)}
          
        />
      </Modal>
    
  );
}

function mapStateToProps(state) {
  const { path,visible ,nodeValue} = state.AddNodeModal;


  return {
    path,visible,nodeValue

  };
}


export default connect(mapStateToProps)(AddNodeModal);
