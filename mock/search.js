
const tableData = {

 data :[
    { name: 'Jack', age: 28, phone: '13590873847', key:'1' },
    { name: 'Rose', age: 36, phone: '13378643567', key:'2' },
    { name: 'Uzi', age: 16, phone: '15877658864', key:'3' },
    { name: 'ClearLove', age: 26, phone: '15177836698', key:'4' },
    { name: 'Rookie', age: 26, phone: '15876543456', key:'5' },
    { name: 'TheShy', age: 33, phone: '13399876785', key:'6' },
  ]
};

const getTableData = (req,tableData) => {
  const requestBody = req.body;
  const {searchInfo} = requestBody;
  if(!searchInfo) return tableData;
  const {name,age,phone} =searchInfo;
  if((!name ||name==='')&&(!age|| age==='')&&(!phone||phone==='')) return tableData;
  const {data} = tableData;
  const newArray = [];
  data.forEach(item => {
    if(name && (item.name.indexOf(name) != -1)){
      newArray.push(item);
    }
    if(age &&  (item.age.toString().indexOf(age.toString()) != -1)){
      newArray.push(item);
    }
    if(phone && (item.phone.toString().indexOf(phone.toString()) != -1)){
      newArray.push(item);
    }
  });
  return {data:newArray};
};
export default {
  "POST /api/search": function(req, res) {
    console.log(req);
    res.json(getTableData(req,tableData));
  }
};
