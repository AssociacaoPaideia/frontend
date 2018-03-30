import apolloClient from '../graphql/graphql';

const state = {
  loggedUser: null,
  authenticatedUser: null,
  users: [],
  token: '',
  authorized: false,
  activationSuccess: null,
  apollo: apolloClient,
  registrationSuccess: null,
  loginErrMsg: null,
  subscribeError: null,
  subscribeSuccess: null
};

export default state;
