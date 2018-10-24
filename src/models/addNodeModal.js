import *as MainLayoutService from "../services/mainLayout"
export default {
  namespace: 'AddNodeModal',
  state: {
    visible:false,
    path:"st"
  },
  reducers: {
    show(state, action) { //这里的state是当前总的state，这里的action包含了上面传递的参数和type

      return { ...state, visible: true };


    },hide(state, action)
    {
      return { ...state, visible: false };
    },savePath(state,action)
    {
      let currentPath=action.path;

      return {...state,path:currentPath}
    },setModelNodeValue(state,action)
    {
      let currentNodeValue=action.nodeValue;

      return {...state,nodeValue:currentNodeValue};
    }

  },
  effects: {
    *addNode({ path,nodeValue }, { call, put, select }) {
    const json=yield call(MainLayoutService.addNode,{path,nodeValue})

    if(json.data.code===0)
    {
    
    }
    console.log(json)

    yield put({ //派发 action 让reducers 接收 存储 在model 里面 type 属性不需要加 Login/ 在组件中如果你dispatch派发action 需要加Login/
      type: 'hide'

    })

  }
}
,
  subscriptions: {},
};
