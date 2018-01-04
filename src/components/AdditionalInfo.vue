<template>
  <b-container>
   <b-row align-v="center">
     <b-col cols='12' offset="0" sm='10'  offset-sm='1' md='8' offset-md="2"  lg='6' offset-lg="3"  align-v="center">        
      <b-form class="text-white font-weight-bold login-form">
       <b-form-group label="Ensino Médio">
        <b-form-radio-group id="radios1" v-model="selected" :options="options" name="radioOpenions">
        </b-form-radio-group>
        <b-form-input v-show="selected == 'incompleto'" id="form.name" type="text" v-model.trim="form.name" placeholder="Qual ano está estudando?"></b-form-input>
       </b-form-group>

       <b-form-group label="Escola">
        <b-form-radio-group id="radios2" v-model="selectedPrivate" :options="optionsPrivate" name="radioOpenions2">
        </b-form-radio-group>
         <b-form-checkbox v-show="selectedPrivate == 'Particular'" v-model="statusPrivate" >
          Bolsista
        </b-form-checkbox>
       </b-form-group>


       <b-form-group id="CursoPretendido" label="Curso Pretendido"
            label-for="input1" >
        <b-form-input type="text" v-model="form.intendedCourse" placeholder="Curso"></b-form-input>
       </b-form-group>


        <b-form-group id="fieldset1" label="Instituição"
            label-for="input1" >
        <b-form-input type="text" v-model="form.intendedCollege" placeholder="Instituição Pretendida"></b-form-input>
       </b-form-group>


        <b-form-group id="fieldset1" label="Nota do Enem"
            label-for="input1" >
        <b-form-input type="text" v-model="form.EnemGrade" placeholder="Nota"></b-form-input>
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
        { text: 'Completo', value: 'completo' },
        { text: 'Incompleto', value: 'incompleto' },
      ],
      selectedPrivate: 'first',
      optionsPrivate: [
        { text: 'Particular', value: 'Particular' },
        { text: 'Pública', value: 'Publica' },
      ],
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
