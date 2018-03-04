<template>
  <b-container>
   <b-row align-v="center">
     <b-col cols='12' offset="0" sm='10'  offset-sm='1' md='8' offset-md="2"  lg='6' offset-lg="3"  align-v="center">        
      <b-form class="text-white font-weight-bold login-form">
    

       <b-form-group id="CursoPretendido" label="Renda Familiar"
            label-for="input1" >
        <b-form-input type="number" v-model="form.intendedCourse" placeholder="Renda R$"></b-form-input>
       </b-form-group>
    
       <b-form-group label="Trabalha">
        <b-form-radio-group id="radios1" v-model="selected" :options="options" name="radioOpenions">
        </b-form-radio-group>
        <b-form-input v-show="selected == 's'" id="form.name" type="text" v-model.trim="form.name" placeholder="Quantas horas por dia?"></b-form-input>
       </b-form-group>

       <b-form-group label="Ajuda Financeiramente em Casa?">
        <b-form-radio-group id="radios2" v-model="selectedPrivate" :options="options" name="radioOpenions2">
        </b-form-radio-group>
       </b-form-group>



        <b-form-group id="fieldset1" label="Escolariadade do Pai"
            label-for="input1" >
        <b-form-input type="text" v-model="form.intendedCollege" placeholder="Ex.: Fundamental Completo"></b-form-input>
       </b-form-group>


        <b-form-group id="fieldset1" label="Escolariadade da Mãe"
            label-for="input1" >
        <b-form-input type="text" v-model="form.EnemGrade" placeholder="Ex.: Fundamental Inompleto"></b-form-input>
       </b-form-group>
      </b-form>
      </b-col>
    </b-row>
</b-container>
</template>
<script>
export default {
  name: 'AdditionalInfo',
  data() {
    return {
      form: {
        name: '',
        password: '',
        birthDate: '',
        placeBirth: '',
        address: '',
        phone: '',
        email: '',
        cpf: '',
        rg: '',
        intendedCourse: '',
        intendedCollege: '',
      },
      selected: 'first',
      options: [
        { text: 'Sim', value: 's' },
        { text: 'Não', value: 'n' },
      ],
      selectedPrivate: 'first',
      statusPrivate: false,
    };
  },
  computed: {
    isNameValid() {
      return this.form.name.length > 5;
    },
    invalidNameText() {
      if (!this.isNameValid && this.form.name.length > 0) {
        return 'Por favor, insira um nome com mais de 5 caracteres';
      }
      return '';
    },
    validNameText() {
      if (this.isNameValid) {
        return '';
      }
      return '';
    },
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
</style>
