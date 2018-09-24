
export default {
  namespace: 'Header',
  state: {num:2},
  reducers: {
    save(state, action) { //这里的state是当前总的state，这里的action包含了上面传递的参数和type
      const newPath=action.param+"dsa";
      return { ...state, num:newPath }; 

    
  }},
  effects: { //这里是做异步处理的
    // *addByONe({ param}, { call, put,select }) { //这里使用select
 
    // //   const num = yield select(state => state.num)    //这里就获取到了当前state中的数据num
    // //  //方式二： const num = yield select(({num}) =>num)
 
    // // //方式三： const num = yield select(_ =>_.num)
 
    // //   let param1;
    // //    param1 = num + param;  
    // param=param+1; 
  
    //   yield put({
    //      type: 'save',   
    //      num:param
    //   });
    // }
   
 
  },
  subscriptions: {},
};
