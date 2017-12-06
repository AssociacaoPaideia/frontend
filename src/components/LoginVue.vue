<template>
 <b-container>
   <b-row align-v="start">
      <b-col align-v="center">
        <b-img class="logo" center src='../assets/logo-paideia.png'></b-img>
      </b-col>
   </b-row>
   <b-row align-v="center">
     <b-col cols='10' offset="1"  sm='8' offset-sm="2" md='6' offset-md="3"  align-v="center">        
        <b-form class="text-white font-weight-bold login-form"  @submit="clicked" @reset="clicked" v-if="true">
          <b-form-group id="exampleInputGroup1"
                        label="Email:">
            <b-form-input id="exampleInput1"
                          type="email"
                          v-model="form.email"
                          required
                          placeholder="Digite seu Email">
            </b-form-input>
          </b-form-group>
           <b-form-group id="exampleInputGroup2" label="Senha" class="primary">
        <b-form-input id="exampleInput2"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Digite sua Senha">
        </b-form-input>
        </b-form-group>
          <b-button class='text-white' type="submit" variant="primary">Entrar</b-button>
        </b-form>
      </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
  name: 'LoginVue',
  data() {
    return {
      form: {
        email: '',
        password: '',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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