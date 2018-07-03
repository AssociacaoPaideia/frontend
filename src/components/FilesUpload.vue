<template>
<b-container>
    <b-row align-v="center">
     <b-col cols='12' offset="0" sm='10'  offset-sm='1' md='8' offset-md="2"  lg='6' offset-lg="3"  align-v="center">        
      <b-form class="text-white font-weight-bold login-form" @submit.prevent="clicked" @reset="clicked">
            <b-form-group v-for="(file) in this.items" :key="file.type" v-if="isMinor || !file.justMinor" :id="file.type" :label="file.displayName"
                label-for="Foto">
                <b-form-file :required="file.required" :name="file.type" @change="uploadFile(file, $event.target.files)" accept="image/*" 
                            placeholder="Escolha uma foto..." :disabled="file.isSending || file.sent" plain class="file-input"></b-form-file>
                <b-progress v-if="file.isSending" :value="100" :max="100" variant="success" striped animated class="mb-2"></b-progress>
                <b-form-text v-if="!file.sent && !file.errored" id="inputLiveHelp">
                    <!-- this is a form text block (formerly known as help block) -->
                    É necessário que o arquivo seja uma imagem.
                </b-form-text>
                 <b-form-text v-if="file.sent" id="inputLiveHel">
                    <!-- this is a form text block (formerly known as help block) -->
                   Upload completo ✅
                </b-form-text>
                <b-form-text v-if="file.errored" id="inputLiveHelp">
                    <!-- this is a form text block (formerly known as help block) -->
                   Erro ao enviar arquivo, faça o envio novamente. ❌
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
    props:['isMinor'],
    computed: {
        ...mapGetters(['subscribeSuccess']),
        isAllFilesSent: function () {
            for (let el of this.items) {
                if(this.isMinor) {
                    if(!el.sent && el.required) {
                        return false
                    }
                } else {
                    if(!el.justMinor && !el.sent && el.required) {
                        return false
                    }
                }
            }
            return true
        }
    },
    data() {
        return {
            items: [
                {
                    type: "RG",
                    displayName: "RG",
                    isSending: false,
                    sent: false,
                    errored: false,
                    required: true,
                    justMinor: false
                },
                {
                    type: "CPF",
                    displayName: "CPF",
                    isSending: false,
                    sent: false,
                    errored: false,
                    required: true,
                    justMinor: false
                },
                {
                    type: "PARENT_RG",
                    displayName: "RG do Responsável (Caso menor)",
                    isSending: false,
                    sent: false,
                    errored: false,
                    required: true,
                    justMinor: true
                },
                {
                    type: "PARENT_CPF",
                    displayName: "CPF do Responsável (Caso menor)",
                    isSending: false,
                    sent: false,
                    errored: false,
                    required: true,
                    justMinor: true
                },
                {
                    type: "HISTORY",
                    displayName: "Histórico Escolar",
                    isSending: false,
                    sent: false,
                    errored: false,
                    required: true,
                    justMinor: false
                },
                {
                    type: "SCHOLARSHIP",
                    displayName: "Comprovante de Bolsa (Caso bolsista)",
                    isSending: false,
                    sent: false,
                    errored: false,
                    required: false,
                    justMinor: false
                }, 
                {
                    type: "EJA",
                    displayName: "Comprovante Matrícula 3o Período EJA",
                    isSending: false,
                    sent: false,
                    errored: false,
                    required: false,
                    justMinor: false
                },
                {
                    type: "MEDICAL",
                    displayName: "Atestado médico",
                    isSending: false,
                    sent: false,
                    errored: false,
                    required: false,
                    justMinor: false
                },
                {
                    type: "ADDRESS",
                    displayName: "Comprovante de Endereço",
                    isSending: false,
                    sent: false,
                    errored: false,
                    required: true,
                    justMinor: false
                },
                {
                    type: "PHOTO",
                    displayName: "Foto",
                    isSending: false,
                    sent: false,
                    errored: false,
                    required: true,
                    justMinor: false
                },
                {
                    type: "CITIZEN CARD",
                    displayName: "Cartão Cidadão",
                    isSending: false,
                    sent: false ,
                    errored: false,
                    required: true,
                    justMinor: false
                },
                {
                    type: "HIGHSCHOOL",
                    displayName: "Comprovante de Matrícula ou Conclusão do ensino médio",
                    isSending: false,
                    sent: false,
                    errored: false,
                    required: true,
                    justMinor: false
                }
            ],
        }
    },
    methods: {
    ...mapActions(['addFiles']),
    clicked: function() {
        this.$router.push({ name: 'SocialEco'})
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
        debugger
      file.isSending = true
      file.errored = false
      this.loadPhoto(e).then(img => {
        var fileToSend = {
            type: file.type,
            file: img,
            subscriberId: this.subscribeSuccess.id
        }
        debugger
        this.addFiles(fileToSend).then((result) => {
                // Result
                debugger
               file.isSending = false
               file.sent = result.data.addFiles
               file.errored = !result.data.addFiles
            }).catch((error) => {
                debugger
                file.isSending = false
                file.sent = false
                file.errored = true
            })
        
      }).catch((reason) => {
        file.isSending = false
        file.sent = false
        file.errored = true
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
.file-input:first-of-type{
    border-radius: 5px 0 5px 0;
}
.file-input{
    border-radius: 10px;
    padding: 10px;
    background: #f1d7e9;  
    color: black;
    -webkit-box-shadow: 1px 1px 12px 1px #cde2ec;
       -moz-box-shadow: 1px 1px 12px 1px #cde2ec;
            box-shadow: 1px 1px 12px 1px #cde2ec;
}


</style>
