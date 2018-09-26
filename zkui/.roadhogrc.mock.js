// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
const proxy = {
  'POST /zk/getChildren': ["dsfrootV2","zookeeper","titan_uat","testtset","dsfroot","jobs","a-test-xk","services"],
  'POST /zk/getPathData': {"data":"{\"GSName\":\"dsf.1d1d\",\"FriendlyName\":\"gsdfdfg\",\"Platform\":\"DOTNETCORE\",\"Product\":\"dasdas\",\"Owner\":\"15823\",\"Description\":\"fsdfg\"}","dataCode":0,"stat":{"aversion":0,"ctime":1499048038687,"cversion":0,"czxid":18307258559,"dataLength":127,"ephemeralOwner":0,"mtime":1499048038687,"mzxid":18307258559,"numChildren":0,"pzxid":18307258559,"version":0},"statCode":0},
};

export default noProxy ? {} : proxy;
