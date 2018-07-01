<template>
    <b-container class="table">
        <h1 class="title">Olá, [admin-name]</h1>
         <b-table :fields="fields" :items="items">
            <!-- A virtual column -->
        <template slot="foto" slot-scope="data">
            {{data.foto}}
        </template>
            <!-- A custom formatted column -->
        <template slot="name" slot-scope="data">
        {{data.item.name}}
        </template>
            <!-- A virtual composite column -->
        <template slot="RG" slot-scope="data">
        {{data.item.RG}}
        </template>
        <template slot="CPF" slot-scope="data">
        {{data.item.CPF}}
        </template>
  </b-table>
    </b-container>
</template>
<script>
export default {
  data () {
    return {
      fields: [
        // A virtual column that doesn't exist in items
        'foto',
        // A column that needs custom formatting
       'name',
        // A regular column
        'RG',
        // A regular column
        'CPF',
      ],
      items: [
        { name: 'John Doe', RG: '00.000.000.0', CPF: '000.000.000-00' },
        { name: 'Jane Doe', RG: '00.000.000.0', CPF: '000.000.000-00' },
      ]
  }
}
}
</script>

<style lang='scss'>
@import '../custom-bootstrap.scss';
.table{
    width: 90%;
    text-align: center;
    margin: auto; 
}
.title{
    padding-top: 15px;
    margin: 10px 0 10px 0;
    color: $paideia-purple;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-size: 2.3em;
}
</style>
