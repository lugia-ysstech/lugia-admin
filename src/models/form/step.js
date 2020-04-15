/**
 *
 * @flow
 */
import lugiax from '@lugia/lugiax';
import React from 'react';

const model = 'stepForm';
const state = {
  stepsInfo: {
  },
  currentStepNumber: 1,
};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      ticketChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(['stepsInfo', 'ticket'], newValue);
      },
      memoChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(['stepsInfo', 'memo'], newValue);
      },
      typeChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(['stepsInfo', 'type'], newValue);
      },
      belongChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(['stepsInfo', 'belong'], newValue);
      },
      deductionChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(['stepsInfo', 'deduction'], newValue);
      },
      periodChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(['stepsInfo', 'period'], newValue);
      },
      reminderTimeChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(['stepsInfo', 'reminderTime'], newValue);
      },
      custodianChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(['stepsInfo', 'custodian'], newValue);
      },
      invoiceChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(['stepsInfo', 'invoice'], newValue);
      },
      dealerChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(['stepsInfo', ' dealer'], newValue);
      },
      payTimeChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(['stepsInfo', 'payTime'], newValue);
      },
      positionTimeChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(['stepsInfo', 'positionTime'], newValue);
      },
      doNextStep(state, inParam) {
        const currentStepNumber = state.get('currentStepNumber');
        const theCurrentStepNumber =
          currentStepNumber > 3 ? 1 : currentStepNumber + 1;
        return state.set('currentStepNumber', theCurrentStepNumber);
      },
      doPreStep(state, inParam) {
        const currentStepNumber = state.get('currentStepNumber');
        const theCurrentStepNumber =
          currentStepNumber <= 1 ? 3 : currentStepNumber - 1;
        return state.set('currentStepNumber', theCurrentStepNumber);
      },
      reset(state, inParam) {
        return state.set('currentStepNumber', 1);
      },
    },
    async: {},
  },
});
