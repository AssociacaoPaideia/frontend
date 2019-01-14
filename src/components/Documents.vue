<template>
  <b-container class='documents'>
      <b-row align-h="center">
          <h2 style="text-align: center;">Processo Seletivo 2018</h2>
      </b-row>
      <b-row align-h="center" class='buttons'>
          <b-col cols="12" md="4">
              <center>
                  <a :href="instrucoesUrl" target="_blank">
                  <figure>
                    <img src="../assets/instrucoes.svg" rounded blank blank-color="#fff"  width="100" height="100"/><br/>
                    <figcaption class='btn'>INFORMAÇÕES BÁSICAS</figcaption>
                  </figure>
                   </a>
              </center>
          </b-col>               
          <b-col v-if="isEditalAvailable" cols="12" md="4">
              <center>
              <a :href="editalUrl" target="_blank">
                <figure>
                  <img src="../assets/edital.svg" blank rounded blank-color="#fff"  width="100" height="100"/><br/>
                  <figcaption class='btn'>EDITAL/MANUAL</figcaption>
                </figure>
                </a>
              </center>
          </b-col>
          <b-col v-if="isSubscriptionAvailable" cols="12" md="4">
              <center>
                <a  :href="inscricaoUrl"> 
                    <b-img blank rounded blank-color="#fff"  width="100" height="100"/><br/>
                    <span class='btn'>INSCRIÇÃO</span>
                </a>
              </center>
          </b-col>
          <b-col cols="12" md="4" :href="requerimentoUrl" >
              <center>
                <a :href="requerimentoUrl" target="_blank">
                    <figure>
                        <img align-v="center" src="../assets/requerimento.svg" blank rounded blank-color="#fff"  width="100" height="100"><br/>
                        <figcaption  :href="requerimentoUrl" class='btn'>REQUERIMENTO</figcaption>
                    </figure>
                </a>
              </center>
          </b-col>
          <b-col cols="12"  v-if="false"  md="4" :href="formUrl" >
              <center>
                <a :href="formUrl" target="_blank">
                    <figure>
                        <img align-v="center" src="../assets/formulario.svg" blank rounded blank-color="#fff"  width="100" height="100"><br/>
                        <figcaption  :href="formUrl" class='btn'>AVALIAÇÃO DE REAÇÃO</figcaption>
                    </figure>
                </a>
              </center>
          </b-col>
          <b-col cols="12" v-if="false" md="4" :href="formUrl" >
              <center>
                <a :href="formUrl" target="_blank">
                    <figure>
                        <img align-v="center" src="../assets/formulario.svg" blank rounded blank-color="#fff"  width="100" height="100"><br/>
                        <figcaption  :href="formUrl" class='btn'>Perguntas Frequentes</figcaption>
                    </figure>
                </a>
              </center>
          </b-col>
      </b-row>
  </b-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { truncate } from 'fs';
import ntpClient  from 'ntp-client';

export default {
    computed: {
        ...mapGetters(['isAuthenticated', 'isSubscriptionAvailable', 'isEditalAvailable']),
    },
    data() {
        return {
            requerimentoUrl: "/static/REQUERIMENTO - 2018.pdf",
            editalUrl: "/static/edital.pdf",
            instrucoesUrl: "/static/informacoes.pdf",
            formUrl: "https://goo.gl/forms/HTaAD0ywkm9tYvxo2",
            inscricaoUrl: this.isAuthenticated ? "#/subscribe/basic" : "#/signup",
            canDisplayEdital: false,
        }
    }
}
</script>

<style lang='scss'>
@import '../custom-bootstrap.scss';

.buttons{
    margin-top: 30px;
    margin-bottom: 30px;
}

.btn {
    margin-top: 10px;
    font-weight: bold;
}

.documents {
    background-color: #ECEFF1;
    padding: 30px;
    color: $paideia-purple;
    border-radius: 10px;
    font-weight: bold;
    margin-top: 15px;
}

</style>
