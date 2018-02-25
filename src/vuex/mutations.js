import * as mutation from './mutation-types';

const mutations = {
  [mutation.updateUsers](state, users) {
    // eslint-disable-next-line
    state.users = users;
  },
  [mutation.setAuthorization] (state, value) {
    state.authorized = value
  },
  [mutation.updateToken](state, token) {
    state.token = token;
  },
  [mutation.activationSuccess](state, value){
    state.activationSuccess = value;
  },
  [mutation.registrationSuccess](state, value){
    state.registrationSuccess = value;
  },
};

export default mutations;

