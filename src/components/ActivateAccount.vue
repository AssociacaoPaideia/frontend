<template>
<b-container class='activation'>
    <b-row align-h="center" align-v="center" v-if="!token || activationSuccess === false">
        <h1 style="text-align:center"> 😥 <br/> <strong> Ops, algo deu errado! </strong>  </h1>
        <h3 style="text-align:center"> Não foi possível ativar sua conta. Verifique se você copiou o link corretamente ou se já realizou a sua ativação.</h3>
    </b-row>
    <b-row align-h="center" align-v="center" v-else-if="token && activationSuccess">
        <h1 style="text-align:center"> 😍🎊🎉 <br/> <strong> Cadastro de e-mail realizado com sucesso!  </strong>  </h1>
        <h3> Faça login, atualize a página e realize a sua inscrição </h3>
    </b-row>    
    <b-row align-h="center" align-v="center" v-else-if="activationSuccess===null">            
        <b-progress :value="100" :max="100" variant="success" striped :animated="true" class="mb-2"></b-progress>
    </b-row>
</b-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ActivateAccount',
  props: ['token'],
  mounted() {
      if (this.token) {
        this.activateAccount();
      }
  },
  computed:{
    ...mapGetters(['activationSuccess']),
  },
  methods: {
    ...mapActions(['activate']),
    activateAccount: function(){
        this.activate(this.token);
    },
  }
}
</script>
<style lang="scss">

.activation{
    margin-top: 30px;
}

</style>

