import { teste } from './mutation-types';

const mutations = {
  [teste](state) {
    // eslint-disable-next-line
    state.name = state.name + 1;
    return state.name;
  },
};

export default mutations;

