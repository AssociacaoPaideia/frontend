<template>
 <b-container>
   <b-row align-v='center' v-if="registrationSuccess === null">
     <b-col class='container' cols='10' offset='1'  sm='8' offset-sm='2' md='6' offset-md='3'  align-v='center'>        
        <b-form class='text-white font-weight-bold login-form' @submit="clicked" @reset="clicked" v-if='true'>
          <b-form-group id='igName'
                        label='Nome:'>
            <b-form-input id='inputName'
                          type='text'
                          v-model='form.firstName'
                          required
                          placeholder='Digite seu nome'>
            </b-form-input>
          </b-form-group>
          <b-form-group id='igLastName'
                        label='Sobrenome:'>
            <b-form-input id='inputLastname'
                          type='text'
                          v-model='form.lastName'
                          required
                          placeholder='Digite seu sobrenome'>
            </b-form-input>
          </b-form-group>
          <b-form-group id='igMail'
                        label='Email:'>
            <b-form-input id='inputMail'
                          type='email'
                          v-model='form.email'
                          required
                          placeholder='Digite seu Email'>
            </b-form-input>
          </b-form-group>
        <b-form-group id='igPassword' label='Senha' class='primary'>
        <b-form-input id='inputPassword'
                      type='password'
                      v-model='form.password'
                      required                  
                      :invalid-feedback="invalidPasswordText"
                      :state="isPasswordValid"
                      placeholder='Digite sua Senha'>
        </b-form-input>
        </b-form-group>
        <b-form-group id='igPasswordConfirm' label='Confirme sua senha' class='primary'>
        <b-form-input id='inputPasswordConfirm'
                      type='password'
                      v-model='form.passwordConfirm'
                      required
                      :state="passwordMatch"
                      :invalid-feedback="invalidPasswordConfirmation"
                      placeholder='Confirme sua Senha'>
        </b-form-input>
        </b-form-group>
          <b-button class='text-white' :disabled="sent" type="submit" variant='primary'>Enviar</b-button>
           <b-progress v-if="sent" :value="100" :max="100" variant="success" striped animated class="mb-2"></b-progress>
        </b-form>
      </b-col>
    </b-row>
    <b-row v-else-if="registrationSuccess === true">
       <h1> Cadastro feito com sucesso! Realize a ativação da sua conta através do link enviado no e-mail cadastro.</h1>
    </b-row>
</b-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Signup',
  props: {
    sent: false,
  },
  computed: {
    passwordMatch() {
      return  this.isPasswordValid && this.form.password === this.form.passwordConfirm;
    },
    isPasswordValid() {
      return this.form.password.length > 5;
    },
    invalidPasswordText(){
      if(!this.isPasswordValid && this.form.password.length > 0){
        return 'Digite uma senha com mais de 5 caracteres!';
      }
    },
    invalidPasswordConfirmation(){
      if(!this.passwordMatch){
        return 'A confirmação de senha não é igual a senha.';
      }
    },
    ...mapGetters(['registrationSuccess']),
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
      },
    };
  },
  methods: {
     ...mapActions(['addUser']),
    clicked() {
      this.addUser(this.form);
      this.sent = true;
    }
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../custom-bootstrap.scss';
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
.container{
  margin-top: 30px;
}
</style>