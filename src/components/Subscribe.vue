<template>
  <b-container>
   <b-row align-v="center">
     <b-col cols='12' offset="0" sm='10'  offset-sm='1' md='8' offset-md="2"  lg='6' offset-lg="3" align-v="center">        
        <wizard-process v-on:clicked='chooseStep' :steps="steps"/>
     </b-col>
   </b-row>
   <b-row align-v="center"> 
     <router-view></router-view>
   </b-row>
</b-container>
</template>
<script>
import WizardProcess from '@/components/WizardProcess';

export default {
  name: 'Subscribe',
  components: {
    WizardProcess,
  },
  computed: {
    steps() {
      return [
        { name: 'Termos de Responsabilidade', href: '/login', done: (this.$route.name === 'BasicInfo'), active: (this.$route.name === 'UseTerm') },
        { name: 'Dados Basicos', href: '/login', done: (this.$route.name === 'FilesUpload'), active: (this.$route.name === 'BasicInfo') },
        { name: 'Arquivos', href: '/docs', done: (this.$route.name === 'AdditionalInfo'), active: (this.$route.name === 'FilesUpload') },
        { name: 'Dados Adicionais', href: '/login', done: (this.$route.name === 'AdditionalInfo'), active: (this.$route.name === 'AdditionalInfo') }
      ];
    },
  },
  methods: {
    chooseStep: function chooseStep(step) {
      return step.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../custom-bootstrap.scss";
.logo{
  margin: 0px 0px 10px 0px;
}
.login-form{
  background-color: $paideia-purple;
  border-radius: 5px;
  padding:10px;
 
  button {
      width: 100%
  }
}
</style>
