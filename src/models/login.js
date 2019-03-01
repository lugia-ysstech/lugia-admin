/**
 *
 * create by lyq
 *
 * @flow
 */
import lugiax from "@lugia/lugiax";
import React from "react";
import { go, Link } from "@lugia/lugiax-router";
import {message} from '@lugia/lugia-web'

const model = "login";
const state = {
  loginInfo: {
    userName:null,
    passWord:null,
  },

};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      onChangeUserName(state, inParam){
        const {newValue} = inParam;
        return state.setIn(['loginInfo', 'userName',], newValue);
      },
      onChangePassWord(state, inParam){
        const {newValue} = inParam;
        return state.setIn(['loginInfo', 'passWord',], newValue);
      },
      showMessage(state, inParam){
        const {type,text} = inParam;
          message[type](text, 2);
      },
      goRegister(state, inParam){
        go({ url: "/register" });
      },

    },
    async: {
      async doLogin(state, inParam,{mutations}) {
        const loginInfo  = state.get('loginInfo').toJS();
        const query = {...loginInfo};
        const resp = await fetch('/api/login',
          {
            method: 'Post',
            body: JSON.stringify({loginInfo:query}),
            headers: new Headers({ 'Content-Type': 'application/json' }),
          }).then(response => (response.json())).then(data => {

          return data;
        });

        const res = await resp;
        const {allowPass,error} = res;
        if(allowPass){
          go({ url: "/pages" });
        }else{
          mutations.showMessage({type:'error',text:error})
        }
      },
    }
  }
});
