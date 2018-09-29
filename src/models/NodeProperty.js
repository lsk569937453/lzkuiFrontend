
export default {
  namespace: 'NodeProperty',
  state: {},
  reducers: {
    editPath(state, action){
      return {...state,nodeProperty:action.nodeProperty};
    }
  },
  effects: {},
  subscriptions: {},
};
