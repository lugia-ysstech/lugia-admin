
const tableData = {

 data :[
   { id:1,name: 'Jack', age: 28, phone: '13590873847', address:'北京市', job:'工程师', createTime:'2019-01-11', email:'29329@163.com' },
   { id:2,name: 'Rose', age: 36, phone: '13378643567', address:'浙江省苏州市',job:'银行员工', createTime:'2019-02-11', email:'smile@163.com'},
   { id:3,name: 'Uzi', age: 16, phone: '15877658864', address:'北京市',job:'教师', createTime:'2019-06-10', email:'tomato@163.com'},
   { id:4,name: 'ClearLove', age: 26, phone: '15177836698', address:'北京市',job:'公务员', createTime:'2019-01-11', email:'pineapple·@163.com'},
   { id:5,name: 'Rookie', age: 26, phone: '15876543456',address:'云南省昆明市', job:'销售', createTime:'2019-01-11', email:'grape@163.com' },
   { id:6,name: 'TheShy', age: 33, phone: '13399876785', address:'湖南省长沙市', job:'无', createTime:'2019-01-11', email:'mango@163.com' },
   { id:7,name: '张散', age: 26, phone: '15177836698', address:'北京市',job:'产品', createTime:'2019-01-11', email:'lemon@163.com' },
   { id:8,name: '李思', age: 26, phone: '15876985456',address:'云南省丽江市', job:'UI设计', createTime:'2018-12-27', email:'cherry@163.com' },
   { id:9,name: '王武', age: 33, phone: '13399876785', address:'湖北省武汉市', job:'前端', createTime:'2019-01-11', email:'plum@163.com' },
   { id:10,name: '赵六', age: 18, phone: '15275479698', address:'北京市',job:'java', createTime:'2018-12-17', email:'longan@163.com' },
   { id:11,name: '冯祺', age: 26, phone: '15874553456',address:'浙江省苏州市', job:'UI设计', createTime:'2019-01-11', email:'corn@163.com' },
   { id:12,name: '郭芭', age: 33, phone: '13674576785', address:'湖南省长沙市', job:'云计算', createTime:'2019-01-11', email:'pork@163.com' },
   { id:13,name: '梁啾', age: 33, phone: '13374576785', address:'浙江省苏州市', job:'云计算', createTime:'2019-01-11', email:'banana@163.com' },
  ]
};

const doPageFilter = (limit,currentPage,data) => {
  const res = JSON.parse(JSON.stringify(data));
  return res.splice((currentPage-1)*limit,limit);
};

const getTableData = (req,tableDatas) => {
  const requestBody = req.body;
  const {searchInfo} = requestBody;
  const {data} = tableDatas;
  if(!searchInfo) return {data,total:data.length};
  const {name,age,phone,address,job,createTime,email,limit,currentPage} =searchInfo;
  const resData = doPageFilter(limit,currentPage,data);
  if((!name ||name==='')&&(!age|| age==='')&&(!phone||phone==='')&&(!address||address==='')&&(!job||job==='')&&(!createTime||createTime==='')&&(!email||email==='')) return {data:resData,total:data.length};
  const newArray = [];

  resData.forEach(item => {
    if(name && (item.name.indexOf(name) != -1)){
      newArray.push(item);
    }
    if(age &&  (item.age.toString().indexOf(age.toString()) != -1)){
      newArray.push(item);
    }
    if(phone && (item.phone.toString().indexOf(phone.toString()) != -1)){
      newArray.push(item);
    }
    if(address && (item.address.toString().indexOf(address.toString()) != -1)){
      newArray.push(item);
    }
    if(job && (item.job.toString().indexOf(job.toString()) != -1)){
      newArray.push(item);
    }
    if(createTime && (item.createTime.toString().indexOf(createTime.toString()) != -1)){
      newArray.push(item);
    }
    if(email && (item.email.toString().indexOf(email.toString()) != -1)){
      newArray.push(item);
    }
  });
  return {data:newArray,total:data.length};
};

const getDeleteData = (req,tableDatas) => {
  const requestBody = req.body;
  const {searchInfo:{id}} = requestBody;
  const {data} = tableDatas;
  for(let i=0;i<data.length;i++){
    if(data[i].id === id){
      data.splice(i,1);
      break;
    }
  }
  return  {data};
};

export default {
  "POST /api/search": function(req, res) {
    res.json(getTableData(req,tableData));
  },
  "POST /api/delete": function(req, res) {
    res.json(getTableData(req,getDeleteData(req,tableData)));
  }
};
