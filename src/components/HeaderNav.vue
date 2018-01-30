<template>
    <b-container>
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
      <b-row>
        <b-navbar toggleable="md" type="dark" sticky variant="primary">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

          <b-navbar-brand href="#/">
            Ínicio
          </b-navbar-brand>

          <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
              <b-nav-item-dropdown text="Sobre" left>
                <b-dropdown-item href="#/about/paideia">Associação Paideia</b-dropdown-item>
                <b-dropdown-item href="#/about/focus">Focus Cursinho</b-dropdown-item>
              </b-nav-item-dropdown>            
              <b-nav-item href="#/news">Notícias</b-nav-item>
              <b-nav-item href="#/contato">Contato</b-nav-item>
              <b-nav-item href="#/signup" v-if="!isAuthenticated" >Registrar-se</b-nav-item>
              
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown v-if="isAuthenticated" text="Olá, Davi!" right>
                <b-dropdown-item href="#/perfil">Perfil</b-dropdown-item> 
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

export default {
  name: 'HeaderNav',
  components: { Login },
  computed: {
    ...mapGetters(['isAuthenticated'])
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
