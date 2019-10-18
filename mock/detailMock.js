

const getUserInfo = () => {

  const data = [
    { type:'退款申请',
      data: [
        {title:'取货单号', value:'1000000000'},
        {title:'状态', value:'已取货'},
        {title:'销售单号', value:'450000199903131111'},
        {title:'子订单', value:'530000198008146785'},
      ]
    },
    { type:'用户信息',
      data: [
        {title:'用户姓名', value:'锺芳'},
        {title:'联系电话', value:'18100000000'},
        {title:'常用快递', value:'菜鸟物流'},
        {title:'取货地址', value:'浙江省杭州市西湖区万塘路18号'},
      ]
    },
    ];

  return {data};
};

const getTableUserInfo = () => {
  const columns = [
    {title: '商品编号', dataIndex: 'id', key:'id', width: 100,render: (text, row, index) => {
        return index !==4?<a href="javascript:;">{text}</a>:text;
      },},
    {title: '商品名称', dataIndex: 'name', key:'name', width: 100},
    {title: '商品条码', dataIndex: 'code', key:'code', width: 200},
    {title: '单价', dataIndex: 'price', key:'price',width: 200},
    {title: '数量（件）', dataIndex: 'count', key:'count',width: 100},
    {title: '金额', dataIndex: 'totalprice', key:'totalprice',width: 100 },
  ];

  const data = [
    { id: '1234561',name: '矿泉水 550ml', code: '12421432143214321', price: '2.00', count:'1' ,totalprice:'2.00'},
    { id: '1234562',name: '凉茶 300ml', code: '12421432143214322', price: '3.00', count:'2' ,totalprice:'6.00'},
    { id: '1234563',name: '好吃的薯片', code: '12421432143214323', price: '7.00', count:'4' ,totalprice:'28.00'},
    { id: '1234564',name: '特别好吃的蛋卷', code: '12421432143214324', price: '8.50', count:'3' ,totalprice:'25.50'},
    { id: '总计',totalprice:'61.50'},
  ];

  return {data,columns};
};

const getReturnGoods = () => {
  const columns = [
    {title: '时间', dataIndex: 'create_time', key:'create_time', width: 100},
    {title: '当前进度', dataIndex: 'process', key:'process', width: 100},
    {title: '状态', dataIndex: 'status', key:'status', width: 100},
    {title: '操作员ID', dataIndex: 'id', key:'id',width: 100},
    {title: '耗时', dataIndex: 'process_time', key:'process_time',width: 100}
  ];

  const data = [
    { create_time: '2017-10-01 14:10',process: '联系客户', status: '进行中', id: '取货员 ID1234', process_time:'5mins' },
    { create_time: '2017-10-01 14:05',process: '取货员出发', status: '成功', id: '取货员 ID1234', process_time:'1h' },
    { create_time: '2017-10-01 13:05',process: '取货员接单', status: '成功', id: '取货员 ID1234', process_time:'5mins' },
    { create_time: '2017-10-01 13:00',process: '申请审批通过', status: '成功', id: '系统', process_time:'1h' },
    { create_time: '2017-10-01 12:00',process: '发起退货申请', status: '成功', id: '用户', process_time:'5mins' },

  ];

  return {data,columns};
};

const getOperateLog = (req) => {
  const requestBody = req.body;
  const {searchInfo ='操作日志一'} = requestBody;
  const columns = [
    {title: '操作类型', dataIndex: 'type', key:'type', width: 200},
    {title: '操作人', dataIndex: 'name', key:'name', width: 100},
    {title: '执行结果', dataIndex: 'result', key:'result', width: 100},
    {title: '操作时间', dataIndex: 'operate_time', key:'operate_time',width: 200},
    {title: '备注', dataIndex: 'remarks', key:'remarks',width: 100}
  ];

  const data ={
    '操作日志一':[
      { type: '订购关系生效',name: '曲丽丽', result: '成功', operate_time: '2017-10-03 19:23:12', remarks:'-' },
      { type: '财务复审',name: '付小小', result: '驳回', operate_time: '2017-10-03 19:23:12', remarks:'不通过原因' },
      { type: '部门初审',name: '周毛毛', result: '成功', operate_time: '2017-10-03 19:23:12', remarks:'-' },
      { type: '提交订单',name: '林东东', result: '成功', operate_time: '2017-10-03 19:23:12', remarks:'很棒' },
      { type: '创建订单',name: '汗牙牙', result: '成功', operate_time: '2017-10-03 19:23:12', remarks:'-' },

    ],
    '操作日志二':[
      { type: '订购关系生效',name: '曲丽丽', result: '成功', operate_time: '2017-10-03 19:23:12', remarks:'-' },


    ],
    '操作日志三':[
      { type: '创建订单',name: '汗牙牙', result: '成功', operate_time: '2017-10-03 19:23:12', remarks:'-' },

    ],
  } ;

  return {data:data[searchInfo],columns};
};

const getAdvancedUserInfo = (req) => {
  const data =[
    {type:'1',data:[
        {text:'用户姓名',value:'付小小'},
        {text:'会员卡号',value:'32943898021309809423'},
        {text:'身份证',value:'3321944288191034921'},
        {text:'联系方式',value:'18112345678'},
        {text:'联系地址',value:'曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口'},
      ]
    },
    {type:'1',title:'信息组', data:[
        {text:'某某数据',value:'725'},
        {text:'该数据更新时间',value:'2017-08-08'},
      ]
    },
    {type:'1',data:[
        {text:'某某数据',value:'725'},
        {text:'该数据更新时间',value:'2017-08-08'},
      ]
    },
    {title:'信息组', type:'2',head:'多层级信息组',data:[
        {title:'组名称',children:[
            {text:'负责人',value:'林东东'},
            {text:'角色码',value:'1234567'},
            {text:'所属部门',value:'XX公司 - YY部'},
            {text:'过期时间',value:'2017-08-08'},
            {text:'描述',value:'这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...'},
          ]},
        {title:'组名称',children:[
            {text:'学名',value:'Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..'},
          ]},
        {children:[
            {text:'负责人',value:'付小小'},
            {text:'角色码',value:'1234568'},
          ]},
      ]
    },
  ];

  return {data};
};

const getAdvancedOrderInfo = (req) => {
  const data ={
    order:'234231029431',
    data:[
      {text:'创建人',value:'曲丽丽'},
      {text:'订购产品',value:'XX 服务'},
      {text:'创建时间',value:'2017-07-07'},
      {text:'关联单据',value:'12421'},
      {text:'生效日期',value:'2017-07-07 ~ 2017-08-08'},
      {text:'备注',value:'请于两个工作日内确认'},
    ],
    orderDetail:{
      status:'1',
      price:'568.08'
    },
  };

  return {...data};
};


export default {
  "POST /api/basic/userInfo": function(req, res) {
    res.json(getUserInfo());
  },
  "POST /api/basic/tableUserInfo": function(req, res) {
    res.json(getTableUserInfo());
  },
  "POST /api/basic/returnGoods": function(req, res) {
    res.json(getReturnGoods());
  },
  "POST /api/advance/getOperateLog": function(req, res) {
    res.json(getOperateLog(req));
  },
  "POST /api/advance/getAdvancedUserInfo": function(req, res) {
    res.json(getAdvancedUserInfo(req));
  },
  "POST /api/advance/getAdvancedOrderInfo": function(req, res) {
    res.json(getAdvancedOrderInfo(req));
  }
};
