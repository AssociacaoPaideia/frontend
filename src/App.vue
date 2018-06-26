<template>
  <div id="app">
    <b-container>
      <b-row>
        <HeaderNav/>
      </b-row>
      <b-row align-v='center'>
        <router-view align-v='center'/> 
      </b-row>
      <b-row align-v="end">
        <Footer/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default { 
  name: 'app',
  mounted(){
    //se existir token no localStorage, colcoa ele no vuex
    var localToken = localStorage.getItem('token'); 
    if(localToken){
      this.setToken(localToken)
      this.getLoggedUser();
    }
    this.isEditalAvailable();
    this.isSubscriptionAvailable();
  },
  methods: {
    ...mapActions(['setToken', 'getLoggedUser','isEditalAvailable','isSubscriptionAvailable']),
  },
};
</script>

<style lang="scss">
@import "./custom-bootstrap.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";

body{
  background-color: #fff;
  padding-top: 5px;
}
</style>
