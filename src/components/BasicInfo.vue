<template>
  <b-container>
   <b-row align-v="center">
     <b-col cols='12' offset="0" sm='10'  offset-sm='1' md='8' offset-md="2"  lg='6' offset-lg="3"  align-v="center">        
      <b-form class="text-white font-weight-bold login-form" @submit="send($event)" @reset="send($event)">
       <b-form-group id="fieldset1" label="Digite seu Nome:*"
            label-for="form.name">
        <b-form-input id="form.name" type="text" v-model.trim="form.name" placeholder="Nome Completo"></b-form-input>
       </b-form-group>
       <b-form-group id="fieldset1" label="Data de Nascimento:"
            label-for="input1" >
        <b-form-input type="date" v-model="form.birthDate" placeholder="Data de Nascimento"></b-form-input>
       </b-form-group>
       
       <b-form-group id="fieldset1" label="Cidade De Nascimento"
            label-for="input1" >
        <b-form-input type="text" v-model="form.address" placeholder="Cidade De Nascimento"></b-form-input>
       </b-form-group>

        <b-form-group id="fieldset1" label="Telefone"
            label-for="input1" >
        <b-form-input type="text" v-model="form.phone" placeholder="Telefone"></b-form-input>
       </b-form-group>

       <b-form-group id="fieldset1" label="E-mail"
            label-for="input1" >
        <b-form-input type="email" v-model="form.email" placeholder="E-mail"></b-form-input>
        </b-form-group>

        <b-form-group id="fieldset1" label="CPF"
            label-for="input1" >
        <b-form-input type="text" v-model="form.cpf" placeholder="CPF"></b-form-input>
        </b-form-group>

        <b-form-group id="fieldset1" label="RG"
            label-for="input1" >
        <b-form-input type="text" v-model="form.rg" placeholder="RG"></b-form-input>
        </b-form-group>

      </b-form>
      </b-col>
    </b-row>
</b-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'BasicInfo',
  data() {
    return {
      form: {
        birthDate: '',
        birthPlace:'',
        phone:'',
        citizenCard:'adasdasd', 
        cpf:'',
        rg: '',
        photo:'wwerwerweasdas',
        userId:'',
      },
      Usuarios: {
        id: '',
        email: '',
      },
    };
  },
  computed: {
    ...mapGetters(['users']),
  },
  methods: {
    ...mapActions(['getUsers']),
    send(event){
         if (event) {
            event.preventDefault()
         }

    }
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
