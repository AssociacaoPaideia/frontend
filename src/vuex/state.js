import apolloClient from '../graphql/graphql';

const state = {
  users: [],
  token: '',
  authorized: false,
  apollo: apolloClient
};

export default state;
