

const getUserInfo = () => {

  const data = {
    avatar:'',
    name:'Asyllabear',
    desc:'北方多鸿雁，日落江河莫忘旧人曾婀娜。南方多阴雨，一缕炊烟似是梦中多归客。',
    company:{
      title:'赢时胜信息技术有限公司',
      department:'中国·北京',
      position: 'Lugia UI'
    },
    remarks:['Lugia','好人','呆萌','啊噢','笔芯','及其优秀的'],
    group:[
      {logo:'',team:'Lugia'},
      {logo:'',team:'喝水水'},
      {logo:'',team:'在线教学'},
      {logo:'',team:'浪浪小分队'},
      {logo:'',team:'Code Review'},
      {logo:'',team:'没有萌的小分队'}
    ]
  };

  return {...data};
};


const getArticleInfo = () => {

  const data = [
    {title: 'Lugia',
      remark:['Lugia','Lugia Design','Lugia Pro','宇萌萌'],
      text:'其实我们认为页面的形式并不需要将重点放在：”色彩单一，线条应用，分割等等这些单一视觉方面。因为对于设计来讲，页面的重点应该在形式上的优美和科学上的简洁，在解决用户需求行为时要大胆，敢于创新，敢于解决当今软件市场上的刚性需求点。而在实际用户应用时要化繁为简，让用户不需学习，就可直接上手应用。',
      img:'',
      author:'宇萌萌',
      link:'http://lugia.tech/#/component/avatar',
      create_time:'2019-09-20 11:05',
      star:'298',
      support:'1188',
      message:'20',
    },
    {title: 'Lugia Design',
      remark:['Lugia','Lugia Design','Lugia Pro','宇萌萌'],
      text:'其实我们认为页面的形式并不需要将重点放在：”色彩单一，线条应用，分割等等这些单一视觉方面。因为对于设计来讲，页面的重点应该在形式上的优美和科学上的简洁，在解决用户需求行为时要大胆，敢于创新，敢于解决当今软件市场上的刚性需求点。而在实际用户应用时要化繁为简，让用户不需学习，就可直接上手应用。',
      img:'',
      author:'宇萌萌',
      link:'http://lugia.tech/#/component/avatar',
      create_time:'2019-09-20 11:05',
      star:'298',
      support:'1188',
      message:'20',
    },
    {title: 'Lugia Pro',
      remark:['Lugia','Lugia Design','Lugia Pro','宇萌萌'],
      text:'其实我们认为页面的形式并不需要将重点放在：”色彩单一，线条应用，分割等等这些单一视觉方面。因为对于设计来讲，页面的重点应该在形式上的优美和科学上的简洁，在解决用户需求行为时要大胆，敢于创新，敢于解决当今软件市场上的刚性需求点。而在实际用户应用时要化繁为简，让用户不需学习，就可直接上手应用。',
      img:'',
      author:'宇萌萌',
      link:'http://lugia.tech/#/component/avatar',
      create_time:'2019-09-20 11:05',
      star:'298',
      support:'1188',
      message:'20',
    },
    {title: 'Lugia Admin',
      remark:['Lugia','Lugia Design','Lugia Pro','宇萌萌'],
      text:'其实我们认为页面的形式并不需要将重点放在：”色彩单一，线条应用，分割等等这些单一视觉方面。因为对于设计来讲，页面的重点应该在形式上的优美和科学上的简洁，在解决用户需求行为时要大胆，敢于创新，敢于解决当今软件市场上的刚性需求点。而在实际用户应用时要化繁为简，让用户不需学习，就可直接上手应用。',
      img:'',
      author:'宇萌萌',
      link:'http://lugia.tech/#/component/avatar',
      create_time:'2019-09-20 11:05',
      star:'298',
      support:'1188',
      message:'20',
    },
    {title: 'Lugia Web',
      remark:['Lugia','Lugia Design','Lugia Pro','宇萌萌'],
      text:'其实我们认为页面的形式并不需要将重点放在：”色彩单一，线条应用，分割等等这些单一视觉方面。因为对于设计来讲，页面的重点应该在形式上的优美和科学上的简洁，在解决用户需求行为时要大胆，敢于创新，敢于解决当今软件市场上的刚性需求点。而在实际用户应用时要化繁为简，让用户不需学习，就可直接上手应用。',
      img:'',
      author:'宇萌萌',
      link:'http://lugia.tech/#/component/avatar',
      create_time:'2019-09-20 11:05',
      star:'298',
      support:'1188',
      message:'20',
    },
    {title: 'Lugia Demo',
      remark:['Lugia','Lugia Design','Lugia Pro','宇萌萌'],
      text:'其实我们认为页面的形式并不需要将重点放在：”色彩单一，线条应用，分割等等这些单一视觉方面。因为对于设计来讲，页面的重点应该在形式上的优美和科学上的简洁，在解决用户需求行为时要大胆，敢于创新，敢于解决当今软件市场上的刚性需求点。而在实际用户应用时要化繁为简，让用户不需学习，就可直接上手应用。',
      img:'',
      author:'宇萌萌',
      link:'http://lugia.tech/#/component/avatar',
      create_time:'2019-09-20 11:05',
      star:'298',
      support:'1188',
      message:'20',
    }
  ];

  return {data,total: 8};
};


const getApplicationInfo = () => {

  const data = [
    {title: 'Lugia',
      img:'',
      activeUser:'11',
      newUser:'20',
    },
    {title: 'Lugia Design',
      img:'',
      activeUser:'11',
      newUser:'20',
    },
    {title: 'Lugia Pro',
      img:'',
      activeUser:'11',
      newUser:'20',
    },
    {title: 'Lugia Admin',
      img:'',
      activeUser:'11',
      newUser:'20',
    },
    {title: 'Lugia Web',
      img:'',
      activeUser:'11',
      newUser:'20',
    },
    {title: 'Lugia Demo',
      img:'',
      activeUser:'11',
      newUser:'20',
    },
    {title: 'Lugia',
      img:'',
      activeUser:'11',
      newUser:'20',
    },
    {title: 'Lugia Design',
      img:'',
      activeUser:'11',
      newUser:'20',
    },
    {title: 'Lugia Pro',
      img:'',
      activeUser:'11',
      newUser:'20',
    },
    {title: 'Lugia Admin',
      img:'',
      activeUser:'11',
      newUser:'20',
    },
    {title: 'Lugia Web',
      img:'',
      activeUser:'11',
      newUser:'20',
    },
    {title: 'Lugia Demo',
      img:'',
      activeUser:'11',
      newUser:'20',
    }
  ];

  return {data,total: 12};
};


const getProjectInfo = () => {

  const data = [
    {title: 'Lugia',
      img:'',
      create_time:'11',
      desc:'许多时候也想要像个孩子一样,可以不用去顾及那么多悲伤',
      member:[
        {name:'脆啵啵',head:''},
        {name:'一阵风',head:''},
        {name:'宇萌萌',head:''},
      ]
    },
    {title: 'Lugia Design',
      img:'',
      create_time:'11',
      desc:'你说你怀念的所有在千里之外,你在陌生的城市里独自徘徊,不同的地方又怎样呢',
      member:[
        {name:'脆啵啵',head:''},
        {name:'一阵风',head:''},
        {name:'宇萌萌',head:''},
      ]
    },
    {title: 'Lugia Pro',
      img:'',
      create_time:'11',
      desc:'眼前风景是怎样的,而你自己又是如何,也要快乐',
      member:[
        {name:'脆啵啵',head:''},
        {name:'一阵风',head:''},
        {name:'宇萌萌',head:''},
      ]
    },
    {title: 'Lugia Admin',
      img:'',
      create_time:'11',
      desc:'早知世界怪人也多,你是最合拍的一个,任时空它交错,多远都听着哼着',
      member:[
        {name:'脆啵啵',head:''},
        {name:'一阵风',head:''},
        {name:'宇萌萌',head:''},
      ]
    },
    {title: 'Lugia Web',
      img:'',
      create_time:'11',
      desc:'你的世界我的世界都在一个世界,你心中的色彩相信我也曾经看见,想你将要穿过阳光',
      member:[
        {name:'脆啵啵',head:''},
        {name:'一阵风',head:''},
        {name:'宇萌萌',head:''},
      ]
    },
    {title: 'Lugia Demo',
      img:'',
      create_time:'11',
      desc:'然而我们怪胎相投,过着自己爱的生活,别人怎么看怎么说,有你懂我',
      member:[
        {name:'脆啵啵',head:''},
        {name:'一阵风',head:''},
        {name:'宇萌萌',head:''},
      ]
    },
    {title: 'Lugia',
      img:'',
      create_time:'11',
      desc:'许多时候也想要像个孩子一样,可以不用去顾及那么多悲伤,你说你怀念的所有在千里之外',
      member:[
        {name:'脆啵啵',head:''},
        {name:'一阵风',head:''},
        {name:'宇萌萌',head:''},
      ]
    },
    {title: 'Lugia Design',
      img:'',
      create_time:'11',
      desc:'你说你怀念的所有在千里之外,你在陌生的城市里独自徘徊,不同的地方又怎样呢',
      member:[
        {name:'脆啵啵',head:''},
        {name:'一阵风',head:''},
        {name:'宇萌萌',head:''},
      ]
    },
    {title: 'Lugia Pro',
      img:'',
      create_time:'11',
      desc:'眼前风景是怎样的,而你自己又是如何,也要快乐',
      member:[
        {name:'脆啵啵',head:''},
        {name:'一阵风',head:''},
        {name:'宇萌萌',head:''},
      ]
    },
    {title: 'Lugia Admin',
      img:'',
      create_time:'11',
      desc:'早知世界怪人也多,你是最合拍的一个,任时空它交错,多远都听着哼着',
      member:[
        {name:'脆啵啵',head:''},
        {name:'一阵风',head:''},
        {name:'宇萌萌',head:''},
      ]
    },
    {title: 'Lugia Web',
      img:'',
      create_time:'11',
      desc:'你的世界我的世界都在一个世界,你心中的色彩相信我也曾经看见,想你将要穿过阳光',
      member:[
        {name:'脆啵啵',head:''},
        {name:'一阵风',head:''},
        {name:'宇萌萌',head:''},
      ]
    },
    {title: 'Lugia Demo',
      img:'',
      create_time:'11',
      desc:'然而我们怪胎相投,过着自己爱的生活,别人怎么看怎么说,有你懂我',
      member:[
        {name:'脆啵啵',head:''},
        {name:'一阵风',head:''},
        {name:'宇萌萌',head:''},
      ]
    },
  ];

  return {data,total: 12};
};

const getCenterUserInfo = () => {

  const data = {
    sign:'There are many wild geese in the north, Don’t forget the elegant Zeng when\n' +
    'the sun sets. it’s rainy in the south. A wisp of cooking smoke seems to be a \n' +
    'fream for many returnees.',
    curriculum:{
      projectNumber: 18,
      onlineProject: 12,
      undone: 6,
      workTime: 201
    },
    team:[
      {logo:'lugia-icon-financial_heart_o',team:'大前端项目组'},
      {logo:'lugia-icon-financial_like',team:'这个团队很skr'},
      {logo:'lugia-icon-financial_smile_o',team:'设计师要嘤嘤嘤'},
      {logo:'lugia-icon-logo_ysstech',team:'Lugia'},
      {logo:'lugia-icon-financial_transfer_u',team:'只有一个小公主'},
      {logo:'lugia-icon-financial_service',team:'火星炸地球'},
      {logo:'lugia-icon-financial_cloud',team:'棉裤腰厂'},
      {logo:'lugia-icon-financial_filter',team:'喝水水'}
    ]
  };

  return {data};
};


export default {
  "POST /api/personal/userInfo": function(req, res) {
    res.json(getUserInfo());
  },
  "POST /api/personal/getArticleInfo": function(req, res) {
    res.json(getArticleInfo());
  },
  "POST /api/personal/getApplicationInfo": function(req, res) {
    res.json(getApplicationInfo());
  },
  "POST /api/personal/getProjectInfo": function(req, res) {
    res.json(getProjectInfo());
  },
  "POST /api/personalCenter/userInfo": function(req, res) {
    res.json(getCenterUserInfo());
  },
};
