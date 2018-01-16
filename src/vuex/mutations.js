import { updateUsers } from './mutation-types';

const mutations = {
  [updateUsers](state, users) {
    // eslint-disable-next-line
    state.users = users;
  },
};

export default mutations;

