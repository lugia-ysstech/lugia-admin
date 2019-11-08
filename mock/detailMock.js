

const getUserInfo = () => {

  const data = [
    { type:'物流信息',
      data: [
        {title:'运单号码', value:'294571619523'},
        {title:'物流公司', value:'顺丰快递'},
        {title:'客服电话', value:'95338'},
        {title:'发货地址', value:'河南省开封市兰考县'},
        {title:'邮编', value:'475312'},
      ]
    },
    { type:'用户信息',
      data: [
        {title:'收货地址', value:'北京市朝阳区朝阳北路达美中心'},
        {title:'收件人', value:'石小欣'},
        {title:'手机号', value:'15294627777'}
      ]
    },
    ];

  return {data};
};

const getStepsInfo = () => {

  const steps = [
    { title: '待揽件',stepStatus: 'process'},
    { title: '运输',stepStatus: 'next'},
    { title: '派送',stepStatus: 'wait'},
    { title: '签收',stepStatus: 'wait'},
  ];
  const data = [
    {
      title: '2018-11-15  周五',stepStatus: 'finish',
      description: [
        { date:'17:01:10',desc:'卖家发货'},
        { date:'18:13:10',desc:'顺丰快递 已收取快件'},
        { date:'18:13:10',desc:'快递在「开封市兰考县车站路营业点」已装车，准备发往「郑州新郑集散中心」'},
      ]
    },
    {
      title: '2018-11-16  周六',stepStatus: 'process',
      description: [
        { date:'12:31:00',desc:'快件到达北京顺义集散中心'},
        { date:'14:19:00',desc:'快递在「北京顺义集散中心」已装车，准备发往「北京青年路营业点」'},
        { date:'15:39:00',desc:'快递到达「青年路营业点」'},
      ]
    },
    {
      title: '2018-11-16  周六',stepStatus: 'next',
      description: [
        { desc:'等待「青年路营业点」快递员  张天宇  取件'},
      ]
    },
  ];

  return {data,steps};
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
    { id: '1234561',name: '冰红茶 550ml', code: '12421432143214321', price: '2.00', count:'1' ,totalprice:'2.00'},
    { id: '1234562',name: '可乐 300ml', code: '12421432143214322', price: '3.00', count:'2' ,totalprice:'6.00'},
    { id: '1234563',name: '法式小奶酪', code: '12421432143214323', price: '7.00', count:'4' ,totalprice:'28.00'},
    { id: '1234564',name: '卷卷卷卷饼啊', code: '12421432143214324', price: '8.50', count:'3' ,totalprice:'25.50'},
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
    {title: '用户ID', dataIndex: 'id', key:'id',width:100},
    {title: '使用者', dataIndex: 'name', key:'name',width:100},
    {title: '邮箱', dataIndex: 'email', key:'email',width:100},
    {title: '手机号', dataIndex: 'phone', key:'phone',width:100},
    {title: '使用时间', dataIndex: 'times', key:'times',width:100},
    {title: '状态', dataIndex: 'status', key:'status',width:100},
  ];

  const data ={
    '操作日志一':[
      { id: '00031',name: '椰果果', email: '13887767283@163.com', phone: '13887767283', times:'2019-11-11',status:'正在使用'},
      { id: '00032',name: '脆卜卜', email: '283749301@qq.com', phone: '13655894743', times:'2019-10-23',status:'正在使用'},
      { id: '00033',name: '瑞逛逛', email: '15674839933@163.com', phone: '15674839933', times:'2019-03-12',status:'正在使用'},
      { id: '00034',name: '夹心心', email: 'Asyllabear@gmail.com', phone: '16647899870', times:'2018-03-12',status:'已禁用'},
      { id: '00035',name: '玉萌萌', email: '328766046@qq.com', phone: '15834729965', times:'2018-03-12',status:'已禁用'},
      { id: '00036',name: '脆霞霞', email: 'cuixiaixia@163.com', phone: '1336674302', times:'2018-03-12',status:'已禁用'},


    ],
    '操作日志二':[
      { id: '00031',name: '椰果果', email: '13887767283@163.com', phone: '13887767283', times:'2019-11-11',status:'正在使用'},
      { id: '00032',name: '脆卜卜', email: '283749301@qq.com', phone: '13655894743', times:'2019-10-23',status:'正在使用'},


    ],
    '操作日志三':[
      { id: '00035',name: '玉萌萌', email: '328766046@qq.com', phone: '15834729965', times:'2018-03-12',status:'已禁用'},
      { id: '00036',name: '脆霞霞', email: 'cuixiaixia@163.com', phone: '1336674302', times:'2018-03-12',status:'已禁用'},

    ],
  } ;

  return {data:data[searchInfo],columns};
};

const getAdvancedUserInfo = (req) => {
  const data =[
    {type:'1',data:[
        {text:'企业法人代表',value:'脆卜卜'},
        {text:'营业执照号码',value:'0000521'},
        {text:'注册资本',value:'¥742,530,000'},
        {text:'账户银行名称',value:'中国人民银行'},
        {text:'账户银行账号',value:'6330 4588 XXXX 0382 117'},
        {text:'开户行地址',value:'北京朝阳区中国人民银行第九支行'},
      ]
    },
    {title:'', type:'2',head:'生产经营项目',data:[
        {title:'Lugia组件库',link:{text: '了解更多lugia组件库',url:'http://lugia.tech/#/component/lugia'},desc:'Lugia的诞生就是要树立中后台组件化的标杆,我们不仅仅创造了一套属于通用的开源组件及其设计器，而是将设计、代码，变成一种专属语言，一种跨时代的组件规范'},
        {title:'Lugia mega',link:{text: '关于 lugia-mega',url:'http://lugia.tech/#/lugia-mega'},desc:'Lugia mega是基于lugia组件库研发的一款组件生成实际页面的桌面应用。可以实现前后端解耦，让色痕迹程序研发融为一体，减少公司产品的研发成本。'},
        {title:'Lugia pro',desc:'Lugia pro是一款组件库的页面示例，里面包含了所有lugia组件的应用方式，以及组件拼接区块的摆放样式。'},

      ]
    },
  ];

  return {data};
};

const getAdvancedOrderInfo = (req) => {
  const data ={
    order:'234231029431',
    data:[
      {text:'厂家名称',value:'北京中关村信息文化产业园'},
      {text:'国家和地区',value:'中国北京'},
      {text:'企业性质',value:'民营'},
      {text:'厂商性质',value:'民营'},
      {text:'组织机构代码',value:'475312'},
      {text:'身份证号码',value:'130281199593810021'},
      {text:'厂商编号',value:'N3530703'},
      {text:'注册地址邮政编码',value:'03122'},
      {text:'币别',value:'人民币'},
    ],
    orderDetail:{
      status:'1',
      price:'568.08'
    },
    info :[
      {title:'异地登陆',desc:'当有异地登陆您的账号密码时，给予消息提醒。',status:true},
      {title:'数据修改基于消息提醒',desc:'当有数据进行最新更改时候数据',status:true},
    ],
    cooperate:[
      {name:'玉萌萌',desc:'Lugia UED'},
      {name:'脆卜卜',desc:'Lugia 高级UI交互设计师'},
      {name:'椰果果',desc:'Lugia product manager'},
      {name:'夹心心',desc:'Lugia UI'},
      {name:'瑞逛逛',desc:'Lugia 人机交互专家'},
      {name:'脆霞霞',desc:'Lugia 前端工程师'},
    ]
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
  },
  "POST /api/basic/getStepsInfo": function(req, res) {
    res.json(getStepsInfo(req));
  }
};
