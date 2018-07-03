<template>
  <b-container>
   <b-row align-v="center">
     <b-col cols='12' offset="0" sm='10'  offset-sm='1' md='8' offset-md="2"  lg='6' offset-lg="3"  align-v="center">        
      <b-form class="text-white font-weight-bold login-form" @submit.prevent="clicked" @reset="clicked">
       <b-form-group id="fieldset1" label="Data de Nascimento:"
            label-for="input1" >
        <b-form-input type="date" required v-model="form.birthDate" placeholder="Data de Nascimento"></b-form-input>
       </b-form-group>
       
       <b-form-group id="fieldset1" label="Cidade De Nascimento"
            label-for="input1" >
        <b-form-input type="text" required v-model="form.birthPlace" placeholder="Ex.: Louveira"></b-form-input>
       </b-form-group>

        <b-form-group id="fieldset1" label="Telefone"
            label-for="input1" >
            <the-mask class='form-control' required placeholder="(19) 9 9999-9999" v-model="form.phone" :mask="['(##) ####-####', '(##) #####-####']" />
       </b-form-group>

        <b-form-group id="fieldset1" label="CPF"
            label-for="input1" >
          <the-mask class='form-control' required  placeholder="999.999.999-99" v-model="form.cpf" :mask="['###.###.###-##']" />
           <b-form-text id="inputLiveHelp">
            <!-- this is a form text block (formerly known as help block) -->
            Caso o dígito do seu CPF terminar em "x", coloque "0" ao invéz.
          </b-form-text>
        </b-form-group>

        <b-form-group id="fieldsetRg" label="RG"
            label-for="RG" >
            <the-mask class='form-control' required placeholder="999.999.999-9" v-model="form.rg" :mask="['##.###.###-#','###.###.###-#']" />
        </b-form-group>
        <b-form-group id="fieldsetRg" label="Cartão Cidadão"
            label-for="cartaoCidadao" >
            <the-mask class='form-control' required placeholder="9999999999" v-model="form.cartaoCidadao" :mask="['#####################']" />
        </b-form-group>
        <b-button class='text-white'  type="submit" variant='primary'>Próximo Passo</b-button>
        <b-progress v-if="sent && registrationSuccess === null" :value="100" :max="100" variant="success" striped animated class="mb-2"></b-progress>
          <b-alert dismissible :show="sent && registrationSuccess === false"
             variant="danger"> Não foi possível realizar seu cadastro.</b-alert>
      </b-form>
      </b-col>
    </b-row>
</b-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import {TheMask} from 'vue-the-mask'
import { reject } from 'async';

export default {
  components: {TheMask},
  name: 'BasicInfo',
  props: {
    sent: false,
  },
  data() {
    return {
      files: {
        citizenCard: null,
        photo: null,
      },
      form: {
        birthDate: '',
        birthPlace:'',
        phone:'',
        cpf:'',
        rg: '',
        cartaoCidadao: '',
        userId: ''
      },
    };
  },
  computed: {
    ...mapGetters(['authenticatedUser','subscribeSuccess', 'registrationSuccess']),
    invalidCitizardCardFile(){
      return this.files.citizenCard;
    },
    invaliPhotoFile(){
      return this.files.photo;
    }
  },
   watch: {
     subscribeSuccess :  function (val) {
      if(val){
        this.$router.push({ name: 'FilesUpload', params: {isMinor:  this.getAge(this.form.birthDate) < 18}})
      }
     }
   },
  methods: {
    ...mapActions(['addSubscriber']),
    getAge: function (birthDate) {
        var today = new Date();
        var date = new Date(birthDate);
        var age = today.getFullYear() - date.getFullYear();
        var m = today.getMonth() - date.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
            age--;
        }
        return age;
    },
    clicked: function() {
      
      this.form.userId = this.authenticatedUser.id;
      this.addSubscriber(this.form);
      this.sent = true;
    },
    loadPhoto: function (e) {
      return new Promise((resolve, reseject) => {
        const file = e.target.files[0]
        
        if (!file.type.includes("image/")) {
          reject("Arquivo não é uma imagem.");
        } else {
          var reader = new FileReader();
          reader.onload = function (e) {
            resolve(e.target.result)
          };
          reader.readAsDataURL(file);
        }
      });
    },
    uploadSelfie: function (e){
      this.loadPhoto(e).then(img => {
        this.form.photo = img;
        this.files.photo = null;
      }).catch((reason) => {
        this.files.photo = reason;
      });
    },
    uploadCitizenCard: function (e){
      this.loadPhoto(e).then(img => {
        this.form.citizenCard = img;
        this.files.citizenCard = null;
      }).catch((reason) => {
        this.files.citizenCard = reason;
      });
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

.arquivo:lang(pt)~.custom-file-label::after {
    content: "Escolher";
}

</style>
