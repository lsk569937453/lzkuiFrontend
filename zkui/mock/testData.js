
const qs = require('qs');

const Mock=require('mockjs');

let test =Mock.mock({
    'list|1-100': [{
    'id|+1':1,// 序号 属性值自动加 1，初始值为 1
    'businesscode': /\d{1,10}/,// 商户ID
    'proversion|1': ['标准版','企业版','试用版'],// 产品版本 随机选取 1 个元素
    'storecode': /\d{1,10}/,// 门店编码
    'storename':'@cname',// 门店名称
    'status|1': ['试用','使用','续用'],//状态 随机选取 1 个元素
    'effectdate':'@DATETIME("yyyy-MM-dd HH:mm:ss")',// 有效日期
    }],
    "page":1,
    "pageSize":5,
    "totalRecords":100,
    });
    

module.exports={
    [`GET /test`](req,res){

        res.status(200).json(test);
    },

    [`POST :8000/zk/getChildren`](req,res){

        let user='1';
        console.log(req);
    
        db.data.push(test);
        
        res.status(200).json(test);
    }
}