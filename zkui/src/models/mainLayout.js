import *as MainLayoutService from '../services/mainLayout';
import moment from 'moment'

let mainlayoutUtil =
{
  parseJsonToTabledata(srcData) {
    let newData = [];
    let keyindex=0;

    

    for (var item in srcData) {

      if(item=='ctime'||item=='mtime')
      srcData[item]=mainlayoutUtil.formatTime(srcData[item]);

      newData.push({
        key:keyindex,
        nodekey: item,
        value: srcData[item]

      });
      keyindex=keyindex+1;
      
    }
    return newData;
  },

  formatTime(unix)
  {
    let timeu=new Date(unix);
    return moment(timeu).format('YYYY-MM-DD HH:mm:ss');
    
  }




}

export default {
  namespace: 'MainLayout',
  state: {
    nodeData: "st",
    statData: ""


  },
  reducers: {
    save(state, action) { //这里的state是当前总的state，这里的action包含了上面传递的参数和type
      console.log(action)
      const newPath = "";
      return { ...state, nodeData: action.nodeData, statData: action.statData };


    }
  },
  effects: { //这里是做异步处理的

    *getChildren({ param }, { call, put, select }) {


      const json = yield call(MainLayoutService.fetchPath)
      if (json.data.code) {
        localStorage.setItem('htoken', json.data.token)
        localStorage.setItem('hlogintime', json.data.loginTime)
        yield put({ //派发 action 让reducers 接收 存储 在model 里面 type 属性不需要加 Login/ 在组件中如果你dispatch派发action 需要加Login/
          type: 'save',
          payload: json.data
        })
      }
    },
    *getPathData({ path }, { call, put, select }) {

      console.log(path);
      const json = yield call(MainLayoutService.fetchPathData, { path })

      let nodedata = '';
      let statdata = '';
      if (json.data.dataCode == 0) {
        nodedata = json.data.data
      }
      if (json.data.statCode == 0)
        statdata = mainlayoutUtil.parseJsonToTabledata(json.data.stat);

      yield put({ //派发 action 让reducers 接收 存储 在model 里面 type 属性不需要加 Login/ 在组件中如果你dispatch派发action 需要加Login/
        type: 'save',
        nodeData: nodedata,
        statData: statdata

      })
    }







  },
  subscriptions: {},
};
