/**
 *
 * @flow
 */
import lugiax from "@lugia/lugiax";
import React from "react";

const model = "stepForm";
const state = {
  userInfo:{}  ,

};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {

      onPayAccountChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["stepsInfo", "payAccount"], newValue);
      },
      onReceiptAccountChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["stepsInfo", "receiptAccount"], newValue);
      },
      onReceiptTypeChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["stepsInfo", "receiptType"], newValue);
      },
      onReceiptNameChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["stepsInfo", "receiptName"], newValue);
      },
      onTransferAmountChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(["stepsInfo", "transferAmount"], newValue);
      },
    },
    async: {
      async doNextStep (state, inParam,{mutations}){
        const result  = await fetch('/api/form/nextStep',{method: 'POST'}).then(res => (res.json())).then(res => {
          return res;
        });
        return state.set('stepsInfo', result);
      },
    }
  }
});
