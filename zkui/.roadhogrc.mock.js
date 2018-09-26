let mock = {}
let fs = require('fs');
let join = require('path').join;

let result=[];
function finder(path) {
let files=fs.readdirSync(path);
files.forEach((val,index) => {
let fPath=join(path,val);
let stats=fs.statSync(fPath);
if(stats.isDirectory()) finder(fPath);
if(stats.isFile()) Object.assign(mock, require(fPath))
});

}
finder(join(__dirname + '/mock'));

module.exports = mock;