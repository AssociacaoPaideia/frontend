<template>
  <div id="app">
   <router-view/>
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
  padding-top:2%;
}
</style>
