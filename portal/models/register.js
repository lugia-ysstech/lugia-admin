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

const model = "register";
const state = {
  registerInfo: {
    cellPhone:null,
    identifyCode:null,
  },
  passWordInfo:{
    passWord:'',
    repeatPassword:'',
  },
  isRegister:false,
  userId:null,

};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      onChangeCellPhone(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["registerInfo", "cellPhone"], newValue);
      },
      onChangeIdentifyCode(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["registerInfo", "identifyCode"], newValue);
      },
      onChangePassWord(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["passWordInfo", "passWord"], newValue);
      },
      onChangeRepeatPassword(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["passWordInfo", "repeatPassword"], newValue);
      },
      showMessage(state, inParam) {
        const { type, text } = inParam;
        message[type](text, 2);
      },
      goLogin(state, inParam) {
        go({ url: "/login" });
      }
    },
    async: {
      async doRegister(state, inParam, { mutations }) {
        // const registerInfo = state.get("registerInfo").toJS();
        // const query = { ...registerInfo };
        // const resp = await fetch("/api/register", {
        //   method: "Post",
        //   body: JSON.stringify({ registerInfo: query }),
        //   headers: new Headers({ "Content-Type": "application/json" })
        // })
        //   .then(response => response.json())
        //   .then(data => {
        //     return data;
        //   });
        //
        // const res = await resp;
        // const {
        //   status,
        //   data: { userId, register },
        //   error
        // } = res;
        // if (status === 200) {
        //   state = state.set("userId", userId);
          go({ url: "/register/registerSuccess" });
          // return state.set("isRegister", register);
        // } else {
        //   mutations.showMessage({ type: "error", text: error });
        // }
      },
      async doSavePassWord(state, inParam, { mutations }) {
        const passWordInfo = state.get("passWordInfo").toJS();
        const userId = state.get("userId");

        const { passWord, repeatPassword } = passWordInfo;
        if (passWord !== repeatPassword) {
          mutations.showMessage({
            type: "error",
            text: "两次输入密码不一致，请重新输入"
          });
          return;
        }
        const query = { passWord, userId };
        const resp = await fetch("/api/savePassWord", {
          method: "Post",
          body: JSON.stringify({ data: query }),
          headers: new Headers({ "Content-Type": "application/json" })
        })
          .then(response => response.json())
          .then(data => {
            return data;
          });

        const res = await resp;
        const {status,error} = res;
        if(status === 200){
          go({ url: "/" });
        }else{
          mutations.showMessage({type:'error',text:error})
        }
      },
    }
  }
});
