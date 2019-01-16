/**
 *
 * create by ligx
 *
 * @flow
 */
import lugiax from "@lugia/lugiax";
import React from "react";
import { Icon } from "@lugia/lugia-web";

const model = "user";
const state = {
  searchInfo: {
    age:null,
    name:null,
    phone:null,
  },
  formData:[
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
  ],
  columns:[
    {
      title: '创建时间', dataIndex: 'createTime', key:'createTime', width: 200,
    },{
      title: '姓名', dataIndex: 'name', key:'name', width: 100,
    }, {
      title: '年龄', dataIndex: 'age', key:'age', width: 100,
    }, {
      title: '联系方式', dataIndex: 'phone', key:'phone', width: 200,
    },  {
      title: '所在城市', dataIndex: 'address', key:'address', width: 300,
    },  {
      title: '职业', dataIndex: 'job', key:'job', width: 200,
    },   {
      title: '邮箱', dataIndex: 'email', key:'email', width: 200,
    }, {
      title: '操作', dataIndex: '', key:'operations',  width: 100,
      render: (text, record, index) => <Icon iconClass='lugia-icon-reminder_close_circle_o' onClick={e => {
        this.default.mutations.asyncDoDelete(record.id);
      }} />,
    }
  ],
  currentPage: 1,
  total: 12,
  limit:10,
};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      onChangeAge(state, inParam){
        const {newValue} = inParam;
        return state.setIn(['searchInfo', 'age',], newValue);
      },
      onChangePhone(state, inParam){
        const {newValue} = inParam;
        return state.setIn(['searchInfo', 'phone',], newValue);
      },
      onChangeName(state, inParam){
        const {newValue} = inParam;
        return state.setIn(['searchInfo', 'name',], newValue);
      },
      onChangeEmail(state, inParam){
        const {newValue} = inParam;
        return state.setIn(['searchInfo', 'email',], newValue);
      },
    },
    async: {
      async doRequest(state) {
        const searchInfo  = state.get('searchInfo').toJS();
        const currentPage  = state.get('currentPage');
        const limit  = state.get('limit');
        const query = {...searchInfo,currentPage,limit};
        const resp = await fetch('/api/search',
          {
            method: 'Post',
            body: JSON.stringify({searchInfo:query}),
            headers: new Headers({ 'Content-Type': 'application/json' }),
          }).then(response => (response.json())).then(data => {
          return data;
        });

        const res = await resp;
        state = state.set('total', res.total);
        return state.set('formData', res.data);
      },
      async doDelete(state, inParam) {
        const searchInfo  = state.get('searchInfo').toJS();
        const currentPage  = state.get('currentPage');
        const limit  = state.get('limit');
        const query = {...searchInfo,limit,currentPage,id:inParam};
        const resp = await fetch('/api/delete',
          {
            method: 'Post',
            body: JSON.stringify({searchInfo:query}),
            headers: new Headers({ 'Content-Type': 'application/json' }),
          }).then(response => (response.json())).then(data => {
          return data;
        });

        const res = await resp;
        state = state.set('total', res.total);
        return state.set('formData', res.data);
      },
      async changePage(state, inParam,{mutations}) {
        await mutations.asyncSetPage(inParam);
        mutations.asyncDoRequest();
      },
      async setPage(state, inParam) {
        return state.set('currentPage', inParam);
      },

    }
  }
});
