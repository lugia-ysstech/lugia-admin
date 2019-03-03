/**
 *
 * create by lyq
 *
 * @flow
 */
import lugiax from "@lugia/lugiax";
import React from "react";
import { go, Link } from "@lugia/lugiax-router";

const model = "menuList";
const state = {
  menuState: {
    value: null
  }
};
async function checkAuthorityeData(query) {
  const { value, text } = query;
  const resp = await fetch("/api/checkAuthority", {
    method: "Post",
    body: JSON.stringify({ query }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(error => {
      return error;
    });
  const result = resp;
  const { status } = result;
  if (value && status === 200) {
    go({ url: value });
  } else if (status === 500) {
    go({ url: "/pages/500" });
  } else {
    go({ url: "/pages/403" });
  }
}

export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      onSelect(state, inParam) {
        const { value, text } = inParam;
        checkAuthorityeData({ value, text });
        return state.setIn(["menuState", "value"], value);
      }
    }
  }
});
