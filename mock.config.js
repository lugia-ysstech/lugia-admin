const userList = [
  { id: 1, userName: "admin", passWord: "123", cellPhone: "181" },
  { id: 2, userName: "222", cellPhone: "222" }
];
const userList2 = [
  {
    id: 1,
    name: "王易",
    age: 28,
    phone: "13590873847",
    address: "北京市",
    path: ["用户管理", "表单页", "列表页"]
  },
  {
    id: 2,
    name: "赵散",
    age: 36,
    phone: "13378643567",
    address: "浙江省苏州市",
    path: ["用户管理", "表单页", "列表页"]
  },
  {
    id: 3,
    name: "刘司",
    age: 16,
    phone: "15877658864",
    address: "北京市",
    path: ["用户管理", "表单页", "列表页"]
  },
  {
    id: 4,
    name: "张期",
    age: 26,
    phone: "15177836698",
    address: "北京市",
    path: ["用户管理", "表单页", "列表页"]
  },
  {
    id: 5,
    name: "范午",
    age: 26,
    phone: "15876543456",
    address: "云南省昆明市",
    path: ["用户管理", "表单页", "列表页"]
  },
  {
    id: 6,
    name: "李祺",
    age: 33,
    phone: "13399876785",
    address: "湖南省长沙市",
    path: ["用户管理", "表单页", "列表页"]
  }
];

export default {
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
  "POST /api/login": function(req, res) {
    const requestBody = req.body;
    const {
      loginInfo: { userName, passWord }
    } = requestBody;
    const checkRole = userList.filter(item => {
      return (
        (item.userName === userName || item.cellPhone === userName) &&
        item.passWord === passWord
      );
    });
    if (checkRole.length) {
      res.json({ status: 200, allowPass: true });
    } else {
      res.json({ status: 1101, allowPass: false, error: "用户名或密码错误" });
    }
  },
  "POST /api/register": function(req, res) {
    const requestBody = req.body;
    const {
      registerInfo: { userName, cellPhone }
    } = requestBody;
    const id = userList.length++;
    userList.push({ id, userName: userName || cellPhone, cellPhone });
    res.json({ status: 200, data: { userId: id, register: true } });
  },
  "POST /api/savePassWord": function(req, res) {
    const requestBody = req.body;
    const {
      data: { passWord, userId }
    } = requestBody;
    userList.map(item => {
      if (item.id === userId) item.passWord = passWord;
    });
    res.json({ status: 200 });
  },
  "POST /api/checkAuthority": function(req, res) {
    const requestBody = req.body;
    const {
      query: { text }
    } = requestBody;
    userList2.filter(item => {
      if (item.path.indexOf(text) > -1)
        res.json({ status: 200, allowPass: true });
      else {
        res.json({
          status: 403,
          allowPass: false,
          error: "您没有访问权限"
        });
      }
    });
  }
};
