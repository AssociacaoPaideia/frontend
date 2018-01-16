<template>
 <b-container>
   <b-row align-v='center'>
     <b-col class='container' cols='10' offset='1'  sm='8' offset-sm='2' md='6' offset-md='3'  align-v='center'>        
        <b-form class='text-white font-weight-bold login-form'  @submit='clicked' @reset='clicked' v-if='true'>
          <b-form-group id='igName'
                        label='Nome:'>
            <b-form-input id='exampleInput1'
                          type='text'
                          v-model='form.firstName'
                          required
                          placeholder='Digite seu nome'>
            </b-form-input>
          </b-form-group>
          <b-form-group id='igLastName'
                        label='Sobrenome:'>
            <b-form-input id='exampleInput1'
                          type='text'
                          v-model='form.lastName'
                          required
                          placeholder='Digite seu sobrenome'>
            </b-form-input>
          </b-form-group>
          <b-form-group id='igMail'
                        label='Email:'>
            <b-form-input id='exampleInput1'
                          type='email'
                          v-model='form.email'
                          required
                          placeholder='Digite seu Email'>
            </b-form-input>
          </b-form-group>
        <b-form-group id='igPassword' label='Senha' class='primary'>
        <b-form-input id='exampleInput2'
                      type='password'
                      v-model='form.password'
                      required
                      placeholder='Digite sua Senha'>
        </b-form-input>
        </b-form-group>
        <b-form-group id='igPasswordConfirm' label='Confirme sua senha' class='primary'>
        <b-form-input id='exampleInput2'
                      type='password'
                      v-model='form.passwordConfirm'
                      required
                      placeholder='Confirme sua Senha'>
        </b-form-input>
        </b-form-group>
          <b-button class='text-white' type='submit' variant='primary'>Enviar</b-button>
        </b-form>
      </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
  name: 'Signup',
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
    clicked() {
      this.counter = Math.random() * this.max;
    },
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