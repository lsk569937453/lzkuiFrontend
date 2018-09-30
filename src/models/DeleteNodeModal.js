import *as MainLayoutService from "../services/mainLayout"
export default {
  namespace: 'DeleteNodeModal',
  state: {},
  reducers: {
    show(state, action) { //这里的state是当前总的state，这里的action包含了上面传递的参数和type

      return { ...state, visible: true };


    },
    savePath(state,action)
    {
      let currentPath=action.path;

      return {...state,path:currentPath}
    },hide(state, action)
    {
    
      return { ...state, visible: false };
    },
    deleteNodeReducer(state, action)
    {
   
      return { ...state, visible: false };
    }
  },
  effects: {
    *deleteNode({ path }, { call, put, select }) {
      const json=yield call(MainLayoutService.deleteNode,{path})

      if(json.data.code===0)
      {
      
      }
      console.log(json)

      yield put({ //派发 action 让reducers 接收 存储 在model 里面 type 属性不需要加 Login/ 在组件中如果你dispatch派发action 需要加Login/
        type: 'deleteNodeReducer'

      })

    }
  },
  subscriptions: {},
};
