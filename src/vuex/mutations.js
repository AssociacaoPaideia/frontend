import { updateUsers } from './mutation-types';

const mutations = {
  [updateUsers](state, users) {
    // eslint-disable-next-line
    state.users = users;
  },
  setAuthorization (state, value) {
    state.authorized = value
  }  
};

export default mutations;

