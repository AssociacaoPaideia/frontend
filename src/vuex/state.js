import apolloClient from '../graphql/graphql';

const state = {
  users: [],
  token: '',
  authorized: false,
  activationSuccess: null,
  apollo: apolloClient,
  registrationSuccess: null,
};

export default state;
