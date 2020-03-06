/**
 *
 * @flow
 */
import lugiax from '@lugia/lugiax';
import React from 'react';

const model = 'advancedForm';
const state = {
  storageInfo: {},
  taskInfo: {},
  staffsInfo: {},
};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      onStorageNameChange(state, inParam) {
        const { newValue, } = inParam;
        return state.setIn(['storageInfo', 'storageName',], newValue);
      },
      onIpAddressChange(state, inParam) {
        const { newValue, } = inParam;
        return state.setIn(['storageInfo', 'ipAddress',], newValue);
      },
      onStorageManageChange(state, inParam) {
        const { newValue, } = inParam;
        return state.setIn(['storageInfo', 'storageManage',], newValue);
      },
      onApprovalChange(state, inParam) {
        const { newValue, } = inParam;
        return state.setIn(['storageInfo', 'approvalName',], newValue);
      },
      onTaskTitleChange(state, inParam) {
        const { newValue, } = inParam;
        return state.setIn(['taskInfo', 'storageName',], newValue);
      },
      onTaskDescChange(state, inParam) {
        const { newValue, } = inParam;
        return state.setIn(['taskInfo', 'taskDesc',], newValue);
      },
      onExecutorChange(state, inParam) {
        const { newValue, } = inParam;
        return state.setIn(['taskInfo', 'executor',], newValue);
      },
      onTaskManageChange(state, inParam) {
        const { newValue, } = inParam;
        return state.setIn(['taskInfo', 'taskManage',], newValue);
      },
      onTaskTypeChange(state, inParam) {
        const { newValue, } = inParam;
        return state.setIn(['taskInfo', 'taskType',], newValue);
      },
      onTableChange(state, inParam) {
        const { newValue, } = inParam;
        return state.setIn(['staffsInfo', 'staffs',], newValue);
      },
    },
    async: {
      async getStaffsInfo(state, inParam, { mutations, }) {
        const result = await fetch('/api/form/staffsInfo', { method: 'POST', })
          .then(res => res.json())
          .then(res => {
            return res;
          });
        return state.set('staffsInfo', result);
      },
      async getStorageInfo(state, inParam, { mutations, }) {
        const result = await fetch('/api/form/storageInfo', { method: 'POST', })
          .then(res => res.json())
          .then(res => {
            return res;
          });
        return state.set('storageInfo', result);
      },
      async getTaskInfo(state, inParam, { mutations, }) {
        const result = await fetch('/api/form/taskInfo', { method: 'POST', })
          .then(res => res.json())
          .then(res => {
            return res;
          });
        return state.set('taskInfo', result);
      },
    },
  },
});
