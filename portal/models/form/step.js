/**
 *
 * @flow
 */
import lugiax from "@lugia/lugiax";
import React from "react";

const model = "stepForm";
const state = {
  stepsInfo: {
    stepsData: []
  }
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
      doNextStep(state, inParam, { mutations }) {
        const { currentStepNumber } = inParam;
        const theCurrentStepNumber =
          currentStepNumber > 3 ? 1 : currentStepNumber + 1;
        return state.set("stepsInfo", "currentStepNumber", theCurrentStepNumber);
      }
    },
    async: {}
  }
});
