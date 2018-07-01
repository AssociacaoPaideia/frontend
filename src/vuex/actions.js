import gql from 'graphql-tag';
import * as mutation from './mutation-types';

const actions = {
  // eslint-disable-next-line
  resetRegistration({commit, state, rootState}){
     commit(mutation.registrationSuccess, null);
  },
  getLoggedUser({commit, state, rootState}){
    return rootState.apollo.watchQuery({
      query: gql`query authenticatedUser { authenticatedUser{ id firstName lastName email isSubscribed isAdmin} }`
    }).subscribe({
      next(result){
        if(result.data.authenticatedUser){
          commit(mutation.updateAuthUser, result.data.authenticatedUser);
        } else {
          commit(mutation.updateToken, null);
        }
      },
      error(result){
        commit(mutation.updateToken, null);
      },
    })
  },
  getUsers({ commit, state, rootState }, user) {
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
        email: user.email,
        id: user.id,
        token: user.token,
      },
    }).subscribe({
      next(result) {
        let users = result.data.users || [];
        commit(mutation.updateUsers, users)
      },
      error(error){
        // eslint-disable-next-line
        console.log('there was an error sending the query', error);
      },
    });
  },
  signIn({ commit, state, rootState },login){
    
    return rootState.apollo.watchQuery({
      // gql query
      query: gql`query Authenticate($password: String!, $email: String!) {
        authenticate(email: $email, password: $password){
          token
        }
      }`,
      // Static parameters
      variables: {
        email: login.email,
        password: login.password,
      },
    }).subscribe({
      next(result) {
        if(!result.data.authenticate){
          commit(mutation.updateLoginErrMsg, "Verifique seu e-mail e senha e tente novamente.")
          return
        }
        if(!result.data.authenticate.token){
          commit(mutation.updateLoginErrMsg, "Usuário não está ativo.")
          return
        }
        
        let token = result.data.authenticate.token || [];
        commit(mutation.updateToken, token)
        localStorage.setItem('token', token)
      },
      error(error){
        // eslint-disable-next-line
        commit(mutation.updateLoginErrMsg, "Verifique seu e-mail e senha e tente novamente.")
        console.log('there was an error sending the query', error);
      },
    });
  },
  setToken({ commit }, token){
    commit(mutation.updateToken, token)
  },
  addSubscriber({ commit, state, rootState}, subscriber){
    return rootState.apollo.mutate({
      // gql query
      mutation: gql`mutation addSubscriber($birthDate: String!
        $birthPlace: String!
        $phone: String!
        $cpf: String!
        $rg: String!
        $userId: Int!) {
        addSubscriber(birthDate: $birthDate
          birthPlace: $birthPlace
          phone: $phone
          cpf: $cpf
          rg: $rg
          userId: $userId){
            id
        }
      }`,
      // Static parameters
      variables: {
        birthDate: subscriber.birthDate,
        birthPlace: subscriber.birthPlace,
        phone: subscriber.phone,
        cpf: subscriber.cpf,
        rg: subscriber.rg,
        userId: subscriber.userId,
      },
    }).then((result) => {
        if(!result.data.addSubscriber && result.data.addSubscriber.id){
          commit(mutation.subscribeError, "Erro ao cadastrar dados.");
          return;
        }
        commit(mutation.subscribeSuccess, result.data.addSubscriber);
      }).catch((error) => {
        // eslint-disable-next-line
        commit(mutation.subscribeError, "Erro ao cadastrar dados.")
        console.log('there was an error sending the query', error);
    });
  },
  addUser({ commit, state, rootState }, user){
    return rootState.apollo.mutate({
      // gql query
      mutation: gql`mutation addUser($firstName: String!, $lastName: String!,$email: String!, $password: String! ) {
        addUser(email: $email,password: $password, firstName: $firstName, lastName: $lastName){
          email
          firstName
          lastName
        }
      }`,
      // Static parameters
      variables: {
        email: user.email,
        password: user.password,
        firstName:user.firstName,
        lastName:user.lastName
      },
    }).then((result) => {
        if(!result.data.addUser){
          commit(mutation.registrationSuccess, false);
        }
        commit(mutation.registrationSuccess, true);
      }).catch( (error) => {
        // eslint-disable-next-line
        console.log('there was an error sending the query', error);
        commit(mutation.registrationSuccess, false);
      });
  },
  activate({ commit, state, rootState }, token){
    return rootState.apollo.mutate({
      mutation: gql`mutation Activate($token: String!){
        activate(token: $token) 
      }`,
      variables: {
        token: token
      }
    }).then((result) => {
        commit(mutation.activationSuccess, result.data.activate);
      }
    ).catch((e) => {
      commit(mutation.activationSuccess, false);
    });
  },
  validateSubscriber({commit, state, rootState}, userId){
    return rootState.apollo.watchQuery({
        query: gql`query validateSubscriber($userId: Int){ 
          validateSubscriber(userId: $userId)
        }`,
        variables: {
          userId: userId
        }
    }).subscribe({
      next(result){
        if(!result.data){
          return;
        }

        if(result.data.validateSubscriber){
          commit(mutation.subscribeActivationSuccess, result.data.validateSubscriber);
          actions.getLoggedUser({ commit, state, rootState });
        } else {
          commit(mutation.subscribeActivationError, 
            "Nâo foi encontrado seu registro de preenchimento socioeconômico.");
        }
      },
      error(err){
        commit(mutation.subscribeActivationError, 
          "Nâo foi possível validar seu dados.");
      }
    });
  },
  isSubscriptionAvailable({commit, state, rootState}){
    return rootState.apollo.watchQuery({
        query: gql`{isSubscriptionAvailable}`,
        variables: {}
    }).subscribe({
      next(result){
        if(!result.data){
          return;
        }
        if(result.data.isSubscriptionAvailable){
          commit(mutation.isSubscriptionAvailableSuccess, result.data.isSubscriptionAvailable);
          actions.getLoggedUser({ commit, state, rootState });
        }
      },
      error(err){
        commit(mutation.isSubscriptionAvailableError, 
          "Nâo foi possível validar seu dados.");
      }
    });
  },
  isEditalAvailable({commit, state, rootState}){
    return rootState.apollo.watchQuery({
        query: gql`{isEditalAvailable}`,
        variables: {}
    }).subscribe({
      next(result){
        if(!result.data){
          return;
        }

        if(result.data.isEditalAvailable){
          commit(mutation.isEditalAvailableSuccess, result.data.isEditalAvailable);
          actions.getLoggedUser({ commit, state, rootState });
        }
      },
      error(err){
        commit(mutation.isEditalAvailableError, 
          "Nâo foi possível validar seu dados.");
      }
    });
  },
  addFiles({ commit, state, rootState }, file, callback){
    return rootState.apollo.mutate({
      mutation: gql`mutation SendFile($type: String!, $file: String!, $subscriberId: Int!){
        addFiles(type: $type, file: $file, subscriberId: $subscriberId ) 
      }`,
      variables: {
        type: file.type,
        file: file.file,
        subscriberId: file.subscriberId
      }
    });
  },
};

export default actions;
