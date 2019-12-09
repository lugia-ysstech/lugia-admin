/**
 *
 * create by lyq
 *
 * @flow
 */
import lugiax from "@lugia/lugiax";
import React from "react";
import { go, Link } from "@lugia/lugiax-router";
import { message } from "@lugia/lugia-web";
import doRequest from "../components/utils/requestFunction";

const model = "login";
const state = {
  loginInfo: {
    userName: null,
    passWord: null
  },
  autoSignIn: true
};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      onChangeUserName(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["loginInfo", "userName"], newValue);
      },
      onChangePassWord(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["loginInfo", "passWord"], newValue);
      },
      showMessage(state, inParam) {
        const { type, text } = inParam;
        message[type](text, 2);
      },
      goRegister(state, inParam) {
        go({ url: "/register/register" });
      },
      onChangeAutoSignIn(state, inParam) {
        return state.set("autoSignIn", inParam);
      }
    },
    async: {
      async doLogin(state, inParam, { mutations }) {
        const loginInfo = state.get("loginInfo").toJS();
        const query = { ...loginInfo };
        const resp = await doRequest("/api/login", {
          method: "Post",
          body: JSON.stringify({ loginInfo: query }),
          headers: new Headers({ "Content-Type": "application/json" })
        })
          .then(data => {
            console.log(data);
            return data;
          });

        const res = await resp;
        const { allowPass=false, error, token } = resp;
        if (allowPass) {
          window.localStorage.setItem("token", token);
          const originUrl = window.localStorage.getItem("originUrl") || "/";

          go({ url: originUrl });
          window.localStorage.removeItem("originUrl");
        } else {
          mutations.showMessage({ type: "error", text: error });
        }
      }
    }
  }
});
