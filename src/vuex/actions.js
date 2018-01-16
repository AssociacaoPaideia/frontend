import gql from 'graphql-tag';

const actions = {
  // eslint-disable-next-line
  getUsers({ commit, state, rootState }) {
    console.log(rootState)
    return rootState.apollo.watchQuery({
      // gql query
      query: gql`query GetUsers($id: Int, $email: String!) {
        users(email: $email, id: $id){
          id
          email
        }
      }`,
      // Static parameters
      variables: {
        email: 'Gia_Erdman72@gmail.com',
        id: undefined,
      },
    }).subscribe({
      next(result) {
        let users = result.data.users || [];
        commit('updateUsers', users)
      },
      error(error){
        // eslint-disable-next-line
        console.log('there was an error sending the query', error);
      },
    });
  },
};

export default actions;
