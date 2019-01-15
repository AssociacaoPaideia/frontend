<template>
    <b-container>
        <main class="container">
            <h1 class="title">Redefinição de senha</h1>
            <h3 class="email-text">Para redefinir sua senha digite o email registrado.</h3>
            <b-form v-if="resendSuccess == null || resendSuccess == false">
            <b-form-input v-model="email"
                  type="email"
                  placeholder="Digite seu email" 
                  id="email"
                  required></b-form-input>
            <b-button type="submit" class="mail-submit" @click.prevent="resend">Enviar</b-button>
            </b-form>
            <b-alert dismissible :show="resendSuccess"
             variant="success"> E-mail enviado. Caso o mesmo não apareça em sua caixa de entrada, verifique o endereço digitado e tente novamente.
          </b-alert>
          <b-alert dismissible :show="resendSuccess == false"
             variant="danger"> Não foi possível enviar o email, tente novamente.
          </b-alert>
        </main>
    </b-container>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters(['resendSuccess']),
    },
    data() {
        return {
            email: ""
        }
    },
    methods: {
        ...mapActions(['sendCode']),
        resend() {
            this.sendCode(this.email);
        }
    }
    
    
}
</script>

<style lang='scss'>
@import '../custom-bootstrap.scss';
.title{
    padding-top: 15px;
    margin: 10px 0 10px 0;
    color: $paideia-purple;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-size: 2.3em;
}
.email-text{
    text-align: center;
}
.mail-submit{
    display: block;
    margin: auto;
    margin-top: 15px;
}
#email{
    width: 60%;
    margin: auto;   
}
@media (max-width: 768px){
    #email{
        width: 100%;
    }
}
</style>