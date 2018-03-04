<template>
 <b-container class='login'>
        <b-form class="font-weight-bold login-form"  @submit="clicked($event)" @reset="clicked($event)" v-if="true">
          <b-form-group id="exampleInputGroup1"
                        label="Email:">
            <b-form-input id="exampleInput1"
                          type="email"
                          v-model="login.email"
                          required
                          placeholder="usuario@exemplo.com">
            </b-form-input>
          </b-form-group>
           <b-form-group id="exampleInputGroup2" label="Senha:" class="primary">
        <b-form-input id="exampleInput2"
                      type="password"
                      v-model="login.password"
                      required
                      placeholder="Senha">
        </b-form-input>
        </b-form-group>
          <b-button style="width: 100%" class='text-white' type="submit" variant="primary">Entrar</b-button>
          <b-alert dismissible :show="loginErrMsg !== null"
             variant="danger"> {{loginErrMsg}}
          </b-alert>
        </b-form>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Esqueceu sua senha?</a>

</b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Login',
  props:{
    lastMsg : null,
  },
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    };
  },
  computed:{
    ...mapGetters(['authenticatedUser', 'token', 'loginErrMsg']),
  },
  watch: {
  },
  methods: {
    ...mapActions(['signIn']),
    clicked(event) {
       // now we have access to the native event
    if (event) {
     event.preventDefault()
    }
      this.signIn(this.login)
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