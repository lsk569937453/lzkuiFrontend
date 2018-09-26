// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
const proxy = {
  'POST /zk/getChildren': ["dsfrootV2","zookeeper","titan_uat","testtset","dsfroot","jobs","a-test-xk","services"],
};

export default noProxy ? {} : proxy;
