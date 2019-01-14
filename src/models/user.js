/**
 *
 * create by ligx
 *
 * @flow
 */
import lugiax from "@lugia/lugiax";

const model = "user";
const state = {
  searchInfo: {
    age:null,
    name:null,
    phone:null,
  },
  formData:[],
  currentPage: 1,
  total: 1
};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      onChangeAge(state, inParam){
        const {newValue} = inParam;
        return state.setIn(['searchInfo', 'age',], newValue);
      },
      onChangePhone(state, inParam){
        const {newValue} = inParam;
        return state.setIn(['searchInfo', 'phone',], newValue);
      },
      onChangeName(state, inParam){
        const {newValue} = inParam;
        return state.setIn(['searchInfo', 'name',], newValue);
      },
    },
    async: {
      async transformQuery(state, inParam) {
        return state.set("searchInfo", inParam);
      },
      async doRequest(state) {
        const searchInfo  = state.toJS().searchInfo;
        const currentPage  = state.get('currentPage');
        const query = {...searchInfo,currentPage};
        const resp = await fetch('/api/search',
          {
            method: 'Post',
            body: JSON.stringify({searchInfo:query}),
            headers: new Headers({ 'Content-Type': 'application/json' }),
          }).then(response => (response.json())).then(data => {
            console.log(data);
          return data;
        });

        const res = await resp;
        return state.set('formData', res.data);
      },

    }
  }
});
