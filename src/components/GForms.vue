<template>
    <b-container>
        <b-form v-if="!isSubscribed" @submit.prevent="clicked" @reset="clicked">
            <b-row  align-h="center">
                Preencha o formulário abaixo, após concluir, clique no botão "Confirmar cadastro". <br/>
                 <strong> Lembre-se de preenchê-lo com o email em que você fez o cadastro:  </strong>
                 {{authenticatedUser.email}} 
            </b-row>
            <b-row  align-h="center">        
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSexEyrL6aQ19zH8GB2qyQRxOuDswQPsSH3iUTVI0IDdR5L2iA/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </b-row>
            <b-row v-if="!isSubscribed" align-h="center"> 
                <b-button class='text-white'  type="submit" variant='primary'>Confirmar Cadastro</b-button>
            </b-row>
            <b-row v-if="!isSubscribed" align-h="center">
                <b-alert dismissible :show="subscribeActivationError !== null"
                    variant="danger"> {{subscribeActivationError}}
                </b-alert>
            </b-row>            
        </b-form>
        <b-row v-if="isSubscribed" align-h="center">
            <h1 style="text-align:center"> 😍🎊🎉 <br/> <strong> Sua inscrição foi feita com sucesso! </strong>  </h1>
        </b-row>
    </b-container>  
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "GForms",
    computed: {
        ...mapGetters(['authenticatedUser',
            'subscribeActivationSuccess', 'subscribeActivationError']),
        isSubscribed() {
            return this.subscribeActivationSuccess || (this.authenticatedUser && this.authenticatedUser.isSubscribed);
        }
    },
    methods: {
        ...mapActions(['validateSubscriber']),
        clicked(event) {
            if (event) {
                event.preventDefault()
            }
            this.validateSubscriber(this.authenticatedUser.id);
        }
    }
  
}
</script>
<style lang="scss">

</style>
