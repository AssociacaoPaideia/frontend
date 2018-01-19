<template>
  <b-container  class="footer">
      <b-row align-v='center'>
        <b-col cols="8" align-v='center'>
            Copyright © Associação Paideia - Todos os direitos reservados
        </b-col>
        <b-col align-h='end'>
            <b-img right src="http://2015.igem.org/wiki/images/e/ed/Harvard2015Facebookwhite.png" width="38" height="38" style="display: block;" border="0" />
        </b-col>
      </b-row>
  </b-container>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
@import '../custom-bootstrap.scss';

.footer {
    background-color: $brand-primary;
    color: #fff;
    border: 1px solid #dedede;
    border-radius: 4px;
    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.055);
    display: block;
    overflow: hidden;
    bottom: 0;
    width: 100%;
    padding: 15px;
}
</style>
