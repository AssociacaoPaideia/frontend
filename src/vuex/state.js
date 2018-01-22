import apolloClient from '../graphql/graphql';

const state = {
  users: [],
  authorized: false,
  apollo: apolloClient
};

export default state;
