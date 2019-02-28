import random from "./mock/random";
import search from "./mock/search";
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
    if(userName ==='admin' && passWord ==='123'){
      res.json({status:200,allowPass:true})
    }else{
      res.json({status:1101,allowPass:false,error:'用户名或密码错误'})
    }
  },
};
