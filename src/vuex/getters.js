const getters = {
  users(state) {
    return state.users;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return state.token ? true : false;
  },
  activationSuccess(state){
    return state.activationSuccess;
  },
  registrationSuccess(state){
    return state.registrationSuccess;
  },
  authenticatedUser(state) {
    return state.authenticatedUser;
  },
  loginErrMsg(state){
    return state.loginErrMsg;
  }
};

export default getters;
