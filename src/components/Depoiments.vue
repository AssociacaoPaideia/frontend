<template>
<b-container class='depoiments'>
    <b-row align-h="center">
    <center>
        <h1 class='title' >Depoimentos</h1>
    </center>
    </b-row>
    <b-row align-h='center'>
        <b-col id='primeiro' cols="12" md="5" class="dep">
        Não há palavras suficientes para descrever a imensa gratidão que tenho pelo Cursinho Focus e por cada um dos professores que nos ensinou, e tenho certeza que continuam ensinando, com muita sabedoria...
        <br><br><br>
        </b-col>
        <b-col id='segundo' cols="12" md="5" class="dep">
        Aos professores, queridos professores, meu muito obrigada. Muito obrigada pelo interesse em formar pessoas muito mais que formar alunos. Muito obrigada por todas as vezes que nos escutaram...
        <br><br><br>        
        </b-col>
    </b-row>
</b-container>
</template>
<script>
export default {
  data(){

  }
}
</script>

<style lang='scss'>
@import '../custom-bootstrap.scss';

.depoiments{
    margin-top: 30px;
    margin-bottom: 30px;
}

.title{
    color: $paideia-purple;
    font-weight: bold;
}

.dep{
    margin-left: 15px;
    margin-right: 15px;
    border-left:  5px solid $paideia-purple;
    text-align: justify;
}

#primeiro:after{
    content: "Patricia Evelin";
    font-size: 20px;
    font-weight: bold;
    padding-top: 20px;
    position:absolute;
    bottom:0;
    right:0;
}

#segundo:after{
    content: "Caroline Cândido Veroneze";
    font-size: 20px;
    font-weight: bold;
    padding-top: 10px;
    position:absolute;
    bottom:0;
    right:0;
}

</style>
