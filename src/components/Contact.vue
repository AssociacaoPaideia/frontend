<template>
    <b-container>
        <main class="container">
            <h1 class="title">Contato</h1>
            <h3 class="contact-text">Para entrar em contato, nos mande uma mensagem via facebook ou envie um email para:<br>contato@assossiacaopaideia.org.br</h3>
            <b-row v-if="false">
                <b-col>
                    <p class="form-header">Entre em contato conosco preenchendo o formulário abaixo. Responderemos o mais breve possível.</p>
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group id="group1"
                      label="Nome:"
                      label-for="input1">
                        <b-form-input id="input1"
                          type="text"
                          v-model="form.name"
                          required
                          placeholder="Nome completo">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="group2"
                      label="E-mail:"
                      label-for="input2">
                        <b-form-input id="input2"
                          type="email"
                          v-model="form.email"
                          required
                          placeholder="Email para contato">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="group3"
                      label="Telefone:"
                      label-for="input3">
                      <b-form-input id="input3"
                        type="number"
                        required
                        v-model="form.number"
                        placeholder="Telefone com DDD">
                      </b-form-input>
                    </b-form-group>
                    <b-form-group id="group4"
                      label="Cidade:"
                      label-for="input4">
                        <b-form-input id="input4"
                          type="text"
                          v-model="form.city"
                          required
                          placeholder="Cidade/Estado">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="group5"
                      label="Mesangem:"
                      label-for="input5">
                        <b-form-textarea id="input5"
                          type="text"
                          v-model="form.message"
                          required
                          placeholder="Digite sua mensagem"
                          :rows="6"
                          :max-rows="7"
                          no-resize>
                        </b-form-textarea>
                    </b-form-group>
                    <b-button type="submit" class="button">Enviar</b-button>
                    </b-form>
                </b-col >
                
                <b-col class="map">
                    <p>Rua Orlando Pasti, 239 - Vila Pasti - Louveira - SP<br>(19) 9.9714.7267</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.2979462359435!2d-46.946060584954054!3d-23.0861865501011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf2e7dc98ec7bd%3A0xa9680ffc50a356f7!2sEMEF+Vila+Pasti!5e0!3m2!1spt-BR!2sbr!4v1464791401173" width="100%" height="610" frameborder="0" style="border:0"></iframe>
                </b-col>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.2979462359435!2d-46.946060584954054!3d-23.0861865501011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf2e7dc98ec7bd%3A0xa9680ffc50a356f7!2sEMEF+Vila+Pasti!5e0!3m2!1spt-BR!2sbr!4v1464791401173" width="100%" height="610" frameborder="0" style="border:0" class="frame"></iframe>
            </b-row>
        </main>
    </b-container>
</template>
<script>
export default {
     data () {
    return {
      form: {
        email: '',
        name: '',
        number: '',
        city: '',
        message: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<style lang='scss'>
@import '../custom-bootstrap.scss';
.title{
    padding-top: 15px;
    margin: 10px 0 10px 0;
    color: $paideia-purple;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-size: 2.3em;
}
.form-header{
    text-align: justify;
}
.frame{
  display: none;
}
.contact-text{
  font-size: 1.04em;
  text-align: center;
}
@media (max-width: 500px){
  .map{
    display: none;
  }
  .frame{
    margin-top: 30px;
    display: block;
  }
}

</style>