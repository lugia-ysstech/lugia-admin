/**
 *
 * create by lyq
 *
 * @flow
 */
import lugiax from '@lugia/lugiax';
import React from 'react';
import { go, } from '@lugia/lugiax-router';

const model = 'menuList';
const state = {
  menuState: {
    value: null,
  },
};

export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      onSelect(state, inParam) {
        const { value, } = inParam;
        go({ url: value, });
        return state.setIn(['menuState', 'value',], value);
      },
    },
  },
});
