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
export default {
  name: 'app',
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
