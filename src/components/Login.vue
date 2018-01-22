<template>
 <b-container class='login'>
        <b-form class="font-weight-bold login-form"  @submit="clicked" @reset="clicked" v-if="true">
          <b-form-group id="exampleInputGroup1"
                        label="Email:">
            <b-form-input id="exampleInput1"
                          type="email"
                          v-model="form.email"
                          required
                          placeholder="usuario@exemplo.com">
            </b-form-input>
          </b-form-group>
           <b-form-group id="exampleInputGroup2" label="Senha:" class="primary">
        <b-form-input id="exampleInput2"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Senha">
        </b-form-input>
        </b-form-group>
          <b-button style="width: 100%" class='text-white' type="submit" variant="primary">Entrar</b-button>
        </b-form>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Esqueceu sua senha?</a>

</b-container>
</template>

<script>
export default {
  name: 'Login',
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
      this.$store.commit('setAuthorization', !this.$store.state.authorized)
      this.counter = Math.random() * this.max;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../custom-bootstrap.scss";
.login{
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background: none;
  border: 0;
}
</style>