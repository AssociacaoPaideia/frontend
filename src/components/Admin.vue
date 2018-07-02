<template>
    <b-container class="table">
        <h1 class="title" v-if="authenticatedUser">Olá, {{authenticatedUser.firstName}}</h1>
        <b-table :fields="fields" :items="subscribers" caption-top>

            <template slot="table-caption">
              Inscrições já concluídas.
            </template>
             <template slot="index" slot-scope="data">
                  {{data.index + 1}}
            </template>
            <template slot="matricula" slot-scope="data">
                {{(parseInt(data.item.id) + 1697)}}
            </template>
            <template slot="fullname" slot-scope="data">
                {{data.item.user.firstName}} {{data.item.user.lastName}}
            </template>
            <template slot="waitlist" slot-scope="data">
                {{data.item.user.waitList ? "Sim" : "Não" }}
            </template>
        
        </b-table>
    </b-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { error } from 'util';
export default {
    computed: {
        ...mapGetters(['subscribers', 'authenticatedUser']),
    },
    methods: {
        ...mapActions(['getSubscribers']),
    },
    mounted() {
        this.getSubscribers()
    },
  data () {
    return {
      fields: {
        index:{
            label: "Nº",
            key: "index"
        },
        matricula: {
            label: "Matricula",
            key: "matricula"
        } ,
        name: {
            label: "Nome",
            key: "fullname"
        },
        rg: {
            label: "RG",
            key: "rg"
        },
        cpf: {
            label: "CPF",
            key: "cpf"
        },
        listaDeEspera: {
            label: "Lista de Espera?",
            key: "waitlist"
        }
      },
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

caption{
    color: gray
}
</style>
