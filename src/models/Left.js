import *as MainLayoutService from "../services/mainLayout"


let leftUtils = {
  findFather(oldPath, newPath) {
    for (var i = 0; i < oldPath.length; i++) {
      if(oldPath[i].key===newPath[0].father)
      {
        oldPath[i].children=newPath;
        return;
      }else if(oldPath[i].children)
      {
        this.findFather(oldPath[i].children,newPath);
      }


      

    }

  }
}
export default {
  namespace: 'Left',
  state: {
    path: { title: '/', key: '0', father: 'root' }
  },
  reducers: {
    getPath(state, action) { //这里的state是当前总的state，这里的action包含了上面传递的参数和type



      const newPath = action.path;

      //查找newPath该放在哪个路径下
      const oldPath = state.path;

      leftUtils.findFather(oldPath, newPath);



      return { ...state, path: oldPath, visible: true };


    }

  },
  effects: { //这里是做异步处理的

    *getChildren({ path, title }, { call, put, select }) {
     

      const json = yield call(MainLayoutService.fetchPath, { path })




      let todos = json.data.map(function (item, index) {
        if (path === '/')
          return { title: item, key: path + item, father: path }
        else
          //每一条事项
          return { title: item, key: path + "/" + item, father: path };
      })

      // const pathNew={
      //    title: path, key: path, 
      //   children:todos
      // }
      // const arr = new Array();
      //  arr[0]=pathNew;


      yield put({ //派发 action 让reducers 接收 存储 在model 里面 type 属性不需要加 Login/ 在组件中如果你dispatch派发action 需要加Login/
        type: 'getPath',
        path: todos
      })




    },
    *getChildrenNew({ payload }, { call, put, select }) {
    
      const { resolve } = payload;
      const path=payload.path;

      const json = yield call(MainLayoutService.fetchPath, { path })




      let todos = json.data.map(function (item, index) {
        if (path === '/')
          return { title: item, key: path + item, father: path }
        else
          //每一条事项
          return { title: item, key: path + "/" + item, father: path };
      })

      !!resolve && resolve(todos);


      // yield put({ //派发 action 让reducers 接收 存储 在model 里面 type 属性不需要加 Login/ 在组件中如果你dispatch派发action 需要加Login/
      //   type: 'getPath',
      //   path: todos
      // })




    },

    *getNodeData({ path }, { call, put, select }) {

    }


  },
  subscriptions: {},
};
