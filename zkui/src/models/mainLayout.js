import *as MainLayoutService from '../services/mainLayout';
export default {
  namespace: 'MainLayout',
  state: {
    data1: "st",
    data2: "st2"
  },
  reducers: {
    path(state, action) { //这里的state是当前总的state，这里的action包含了上面传递的参数和type
      const newPath = action.path + "dsa";
      return { ...state, num: newPath };


    }
  },
  effects: { //这里是做异步处理的

    *getChildren({ param }, { call, put, select }) {
  
  
      const json = yield call(MainLayoutService.fetchPath, )
      if (json.data.code) {
        localStorage.setItem('htoken', json.data.token)
        localStorage.setItem('hlogintime', json.data.loginTime)
        yield put({ //派发 action 让reducers 接收 存储 在model 里面 type 属性不需要加 Login/ 在组件中如果你dispatch派发action 需要加Login/
          type: 'save',
          payload: json.data
        })
      }

  


    }


  },
  subscriptions: {},
};
