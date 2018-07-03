<template>
    <b-container>
      <a href="#/">
      <b-row align-v="center">
        <b-col>
            <b-img left fluid-grow src='../assets/logo-focus-grande.png'/>
        </b-col>
        <b-col cols="8">
          <center>
            <b-img align-v='center' src='../assets/logo-paideia-grande.png'/>
          </center>
        </b-col>
      </b-row>
      </a>
      <b-row>
        <b-navbar toggleable="md" type="dark" sticky variant="primary">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

          <b-navbar-brand href="#/">
            Ínicio
          </b-navbar-brand>

          <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
              <b-nav-item href="#/about">Sobre</b-nav-item>
              <b-nav-item href="#/news">Notícias</b-nav-item>
              <b-nav-item href="#/contato">Contato</b-nav-item>
              <b-nav-item href="#/signup" @click="registerClicked" disabled v-if="(isAuthenticated && authenticatedUser && authenticatedUser.isAdmin) || (!isAuthenticated && isSubscriptionAvailable)" >Registrar-se</b-nav-item>
              <b-nav-item href="#/subscribe/terms" disabled v-if="(isAuthenticated && authenticatedUser && authenticatedUser.isAdmin) || (isAuthenticated && authenticatedUser && !authenticatedUser.isSubscribed && isSubscriptionAvailable)" >Inscrição Cursinho 2018</b-nav-item>
              <b-nav-item href="#" disabled v-if="authenticatedUser && authenticatedUser.isSubscribed" >Inscrição Cursinho 2018 realizada</b-nav-item>
              <b-nav-item href="#/admin" v-if="(isAuthenticated && authenticatedUser && authenticatedUser.isAdmin)" >Admin</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown v-if="isAuthenticated && authenticatedUser" :text="'Olá, ' +  authenticatedUser.firstName +'!'" right>
                <b-dropdown-item href="#">Sair</b-dropdown-item> 
              </b-nav-item-dropdown>
              <b-nav-item-dropdown v-if="!isAuthenticated" text="Acessar sua conta" right>
                 <Login />
              </b-nav-item-dropdown> 
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-row>
    </b-container>
</template>

<script>
import Login from '@/components/Login'
import { mapGetters, mapActions } from 'vuex'
import { truncate } from 'fs';

export default {
  name: 'HeaderNav',
  components: { Login },
  computed: {
    ...mapGetters(['isAuthenticated', 'authenticatedUser','registrationSuccess', 'isSubscriptionAvailable', 'token']),
    ...mapActions(['resetRegistration']),
  },
  methods: {
    watch: {
      token: function (oldVal, newVal) {
        debugger
        if(!oldVal && newVal){
          actions.getLoggedUser({ commit, state, rootState })
        }
      }
    }, 
    registerClicked() {
      debugger;
      if(this.registrationSuccess){        
        this.resetRegistration();
      }
    }
  }
};
</script>

<style lang='scss'>
@import '../custom-bootstrap.scss';

nav {
  border: 1px solid #dedede;
  border-radius: 4px;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.055);
  margin: 8px 22px 8px 22px;
  width: 100%; 
}

img {
    max-width: 100%;
    height: auto;
}

</style>
