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
  [mutation.updateAuthUser](state, value){
    state.authenticatedUser = value;
  },
  [mutation.updateLoginErrMsg](state, value){
    state.loginErrMsg = value;
  },
  [mutation.subscribeError](state, value){
    state.subscribeError = value;
  },
  [mutation.subscribeSuccess](state, value){
    state.subscribeSuccess = value;
  },
  [mutation.subscribeActivationError](state, value){
    state.subscribeActivationError = value;
  },
  [mutation.subscribeActivationSuccess](state, value){
    state.subscribeActivationSuccess = value;
  }, 
  [mutation.isSubscriptionAvailableSuccess](state, value){
    state.isSubscriptionAvailable = value
  },
  [mutation.isSubscriptionAvailableError](state, value){
    state.isSubscriptionAvailable = false
  }, 
  [mutation.isEditalAvailableSuccess](state, value){
    state.isEditalAvailable = value
  },
  [mutation.isEditalAvailableError](state, value){
    state.isEditalAvailable = false
  },
  [mutation.subscribers](state, value){
    state.subscribers = value
  },
  [mutation.subscriber](state, value) {
    state.subscriber = value
  },
  [mutation.resendSuccess](state, value) {
    state.resendSuccess = value
  }
};

export default mutations;

