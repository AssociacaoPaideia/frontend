<template>
    <b-container>
        <b-form @submit.prevent="clicked" @reset="clicked">
            <b-row v-if="!isSubscribed" align-h="center">        
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSexEyrL6aQ19zH8GB2qyQRxOuDswQPsSH3iUTVI0IDdR5L2iA/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </b-row>
            <b-row v-if="!isSubscribed" align-h="center"> 
                <b-button class='text-white'  type="submit" variant='primary'>Confirmar Cadastro</b-button>
            </b-row>
            <b-row v-if="!isSubscribed">
                <b-alert dismissible :show="subscribeActivationError !== null"
                    variant="danger"> {{subscribeActivationError}}
                </b-alert>
            </b-row>
            <b-row v-if="isSubscribed" align-h="center">
                 <h1 style="text-align:center"> 😍🎊🎉 <br/> <strong> Sua inscrição foi feita com sucesso! </strong>  </h1>
            </b-row>
        </b-form>
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
