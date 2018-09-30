
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
    }

  },
  effects: {},
  subscriptions: {},
};
