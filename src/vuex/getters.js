const getters = {
  users(state) {
    return state.users;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return state.token ? true : false;
  }
};

export default getters;
