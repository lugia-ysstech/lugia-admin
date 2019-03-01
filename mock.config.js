import random from "./mock/random";
import search from "./mock/search";

const userList =[
  {id:1,userName:'admin',passWord:'123',cellPhone:'181',},
  {id:2,userName:'222',cellPhone:'222',}
];

export default {
  ...random,
  ...search,
  "/example": "https://easy-mock.com/mock/5c36fa23c0fe6620a6a800be",
  "/api/array": [
    { name: "apple", value: 1.2 },
    { name: "orange", value: 0.95 }
  ],
  "/api/object": {
    shop: {
      taxPercent: 8,
      items: [{ name: "apple", value: 1.2 }, { name: "orange", value: 0.95 }]
    }
  },
  "/api/function": function(req, res) {
    res.end("Mock Function.");
  },
  "POST /api/login":function(req, res) {
    const requestBody = req.body;
    const {loginInfo:{userName,passWord}} = requestBody;
    const checkRole = userList.filter(item => {
      return (item.userName === userName || item.cellPhone === userName) && item.passWord ===passWord
    });
    if(checkRole.length){
      res.json({status:200,allowPass:true})
    }else{
      res.json({status:1101,allowPass:false,error:'用户名或密码错误'})
    }
  },
  "POST /api/register":function(req, res) {
    const requestBody = req.body;
    const {registerInfo:{userName,cellPhone,}} = requestBody;
    const id = userList.length++;
    userList.push({id,userName:userName ||cellPhone ,cellPhone});
    res.json({status:200,data:{userId:id,register:true}})
  },
  "POST /api/savePassWord":function(req, res) {
    const requestBody = req.body;
    const {data:{passWord,userId}} = requestBody;
    userList.map(item => {
      if(item.id === userId) item.passWord = passWord;
    });
    res.json({status:200})
  },

};
