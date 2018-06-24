<template>
  <b-container class='documents'>
      <b-row align-h="center">
          <h2 style="text-align: center;">Processo Seletivo 2018</h2>
      </b-row>
      <b-row align-h="center" class='buttons'>
          <b-col cols="12" md="4">
              <center>
                <b-img rounded blank blank-color="#fff"  width="100" height="100"/><br/>
                <span class='btn'>INSTRUÇÕES</span>
              </center>
          </b-col>               
          <b-col cols="12" md="4">
              <center>
                <b-img blank rounded blank-color="#fff"  width="100" height="100"/><br/>
                <span class='btn'>EDITAL/MANUAL</span>
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
                <a  :href="requerimentoUrl" target="_blank">
                  <b-img :href="requerimentoUrl" blank rounded blank-color="#fff"  width="100" height="100"/><br/>
                  <span  :href="requerimentoUrl" class='btn'>REQUERIMENTO</span>
                </a>
              </center>
          </b-col>
      </b-row>
  </b-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { truncate } from 'fs';
export default {  
    computed: {
        ...mapGetters(['isAuthenticated', 'isSubscriptionAvailable']),
    },
    data() {
        return {
            requerimentoUrl: "/static/REQUERIMENTO - 2018.pdf",
            inscricaoUrl: this.isAuthenticated ? "#/subscribe/basic" : "#/signup"
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
