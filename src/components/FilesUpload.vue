<template>
<b-container>
    <b-row align-v="center">
     <b-col cols='12' offset="0" sm='10'  offset-sm='1' md='8' offset-md="2"  lg='6' offset-lg="3"  align-v="center">        
      <b-form class="text-white font-weight-bold login-form" @submit.prevent="clicked" @reset="clicked">
            <b-form-group v-for="(file) in this.items" :key="file.type" :id="file.type" :label="file.displayName"
                label-for="Foto" >
                <b-form-file required :name="file.type" @change="uploadFile(file, $event.target.files)" accept="image/*" 
                            placeholder="Escolha uma foto..." :disabled="file.isSending || file.sent"></b-form-file>
                <b-progress v-if="file.isSending" :value="100" :max="100" variant="success" striped animated class="mb-2"></b-progress>
                <b-form-text v-if="!file.sent" id="inputLiveHelp">
                    <!-- this is a form text block (formerly known as help block) -->
                    É necessário que o arquivo seja uma imagem.
                </b-form-text>
                 <b-form-text v-else id="inputLiveHelp">
                    <!-- this is a form text block (formerly known as help block) -->
                   Arquivo Enviado com sucesso ✅
                </b-form-text>
            </b-form-group>
        <b-button class='text-white'  type="submit" :disabled="!isAllFilesSent" variant='primary'>Próximo Passo</b-button>
      </b-form>
     </b-col>
    </b-row>
</b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters(['subscribeActivationSuccess']),
        isAllFilesSent: function () {
            return this.items.findIndex(file => file.sent === false ) === -1
        }
    },
    data() {
        return {
            items: [
                {
                    type: "RG",
                    displayName: "RG",
                    isSending: false,
                    sent: false
                },
                {
                    type: "CPF",
                    displayName: "CPF",
                    isSending: false,
                    sent: false
                },
                {
                    type: "PARENT_RG",
                    displayName: "RG do Responsável",
                    isSending: false,
                    sent: false
                },
                {
                    type: "PARENT_CPF",
                    displayName: "CPF do Responsável",
                    isSending: false,
                    sent: false
                },
                {
                    type:  "TERM_RESP", 
                    displayName: "Termo de Responsabilidade",
                    isSending: false,
                    sent: false
                },
                {
                    type: "HISTORY",
                    displayName: "Histórico Escolar",
                    isSending: false,
                    sent: false
                },
                {
                    type: "SCHOLARSHIP",
                    displayName: "Comprovante de Bolsa",
                    isSending: false,
                    sent: false
                }, 
                {
                    type: "EJA",
                    displayName: "Comprovante Matrícula 3o Período EJA",
                    isSending: false,
                    sent: false
                },
                {
                    type: "MEDICAL",
                    displayName: "Atestado médico",
                    isSending: false,
                    sent: false
                },
                {
                    type: "ADDRESS",
                    displayName: "Comprovante de Endereço",
                    isSending: false,
                    sent: false
                },
                {
                    type: "PHOTO",
                    displayName: "Foto",
                    isSending: false,
                    sent: false
                },
                {
                    type: "CITIZEN CARD",
                    displayName: "Cartão Cidadão",
                    isSending: false,
                    sent: false 
                },
                {
                    type: "HIGHSCHOOL",
                    displayName: "Comprovante de Matrícula ou Conclusão do ensino médio",
                    isSending: false,
                    sent: false
                }
            ],
        }
    },
    methods: {
    ...mapActions(['addFiles']),
    clicked: function() {
      
      this.form.userId = this.authenticatedUser.id;
      this.addSubscriber(this.form);
      this.sent = true;
    },
    loadPhoto: function (e) {
      return new Promise((resolve, reseject) => {
        const file = e[0]
        
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
    uploadFile: function (file, e){
      file.isSending = true
      this.loadPhoto(e).then(img => {
        var fileToSend = {
            type: file.type,
            file: img,
            subscriberId: this.subscribeSuccess.id
        }
        debugger
        this.addFiles(fileToSend).then((result) => {
                // Result
               file.isSending = false
               file.sent = result.data.addFiles
            }).catch((error) => {
                file.isSending = false
                file.sent = false
            })
        
      }).catch((reason) => {
        file.isSending = false
        file.sent = false
      });
    },
  },
}
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

.arquivo:lang(en)~.custom-file-label::after {
    content: "Escolher";
}

</style>
