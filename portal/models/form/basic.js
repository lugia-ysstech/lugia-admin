/**
 *
 * @flow
 */
import lugiax from "@lugia/lugiax";
import React from "react";

const model = "basicForm";
const state = {
  basicInfo:{}  ,

};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      onTitleChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["basicInfo", "title"], newValue);
      },
      onDescChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["basicInfo", "desc"], newValue);
      },
      onReferenceChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["basicInfo", "reference"], newValue);
      },
      onVisitorChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["basicInfo", "visitor"], newValue);
      },
      onInviterChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["basicInfo", "inviter"], newValue);
      },
      onWeightChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["basicInfo", "weight"], newValue);
      },
      onRadioChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["basicInfo", "radioValue"], newValue);
      },
      doSave(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["basicInfo", "info"], newValue);
      },
    },
    async: {
      async doSubmit(state, inParam,{mutations}) {
        const basicInfo  = state.get('basicInfo').toJS();
        const query = {...basicInfo};
        const resp = await fetch('/api/basic/submit',
          {
            method: 'Post',
            body: JSON.stringify({basicInfo:query}),
            headers: new Headers({ 'Content-Type': 'application/json' }),
          }).then(response => (response.json())).then(data => {

          return data;
        });
      }
    }
  }
});
