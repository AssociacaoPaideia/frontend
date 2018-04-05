<template>
  <b-container>
    <b-row align-h="center"> 
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSexEyrL6aQ19zH8GB2qyQRxOuDswQPsSH3iUTVI0IDdR5L2iA/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
   </b-row>
    <b-row align-h="center"> 
       <b-button class='text-white'  type="submit" variant='primary'>Confirmar Cadastro</b-button>
       <b-alert dismissible :show="loginErrMsg !== null"
             variant="danger"> {{loginErrMsg}}
        </b-alert>
    </b-row>
   <b-row  v-if='false' align-v="center">
     <b-col cols='12' offset="0" sm='10'  offset-sm='1' md='8' offset-md="2"  lg='6' offset-lg="3"  align-v="center">        
      <b-form class="text-white font-weight-bold login-form">
    

       <b-form-group id="bruteFamilyIncome" label="Renda Familiar"
            label-for="input1" >
        <b-form-input type="number" v-model="form.bruteFamilyIncome" placeholder="Renda R$"></b-form-input>
       </b-form-group>
    
       <b-form-group label="Trabalha">
        <b-form-radio-group id="radios1" v-model="form.isWorking" :options="options" name="radioOpenions">
        </b-form-radio-group>
        <b-form-input v-show="form.isWorking" id="form.workingHours" type="number" v-model.trim="form.name" placeholder="Quantas horas por dia?"></b-form-input>
       </b-form-group>

       <b-form-group label="Ajuda Financeiramente em Casa?">
        <b-form-radio-group id="radios2" v-model="form.helpsFinanciallyAtHome" :options="options" name="radioOpenions2">
        </b-form-radio-group>
       </b-form-group>

       <b-form-group id="fieldset1" label="Escolariadade da Mãe"
            label-for="input1" >
          <b-form-select v-model="form.motherDegree" :options="comboOptions" class="mb-3">
            <template slot="first">
              <!-- this slot appears above the options from 'options' prop -->
              <option :value="null" disabled>-- Selecione uma opção. --</option>
            </template>
        </b-form-select>
       </b-form-group>

        <b-form-group id="fieldset1" label="Escolariadade do Pai"
            label-for="input1" >
          <b-form-select v-model="form.fatherDegree" :options="comboOptions" class="mb-3">
              <template slot="first">
                <!-- this slot appears above the options from 'options' prop -->
                <option :value="null" disabled>-- Selecione uma opção. --</option>
              </template>
          </b-form-select>
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
          bruteFamilyIncome: "",
          isWorking: null,
          workingHours: null,
          helpsFinanciallyAtHome: null,
          motherDegree: null,
          fatherDegree: null,
      },
      selected: 'first',
      comboOptions: [
        {value: "FUNDAMENTAL_INCOMPLETE", text: "Fundamental completo."},
        {value: "FUNDAMENTAL_COMPLETE", text: "Fundamental incompleto."},
        {value: "HIGHSCHOOL_INCOMPLETE", text: "Médio incompleto."},
        {value: "HIGHSCHOOL_COMPLETE", text: "Médio completo."},
        {value: "SUPERIOR_INCOMPLETE", text: "Superior incompleto."},
        {value: "SUPERIOR_COMPLETE", text: "Superior completo."}
      ],
      options: [
        { text: 'Sim', value: true },
        { text: 'Não', value: false },
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
