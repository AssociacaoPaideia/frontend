<template>
<b-container class='depoiments'>
    <b-row align-h="center">
    <center>
        <h1 class='title' >Depoimentos</h1>
    </center>
    </b-row>
    <b-row align-h='center'>
        <b-col id='primeiro' cols="12" md="5" class="dep">Não há palavras suficientes para descrever a imensa gratidão que tenho pelo Cursinho Focus e por cada um dos professores que nos ensinou, e tenho certeza que continuam ensinando, com muita sabedoria...
        </b-col>
        <b-col id='segundo' cols="12" md="5" class="dep">Aos professores, queridos professores, meu muito obrigada. Muito obrigada pelo interesse em formar pessoas muito mais que formar alunos. Muito obrigada por todas as vezes que nos escutaram...      
        </b-col>
    </b-row>
    <br>
    <center><a href="#/depoimentos" class="button">Ver mais depoimentos</a></center>
</b-container>
</template>
<script>
export default {
}
</script>

<style lang='scss'>
@import '../custom-bootstrap.scss';
.button{
    
    padding: 20px;
    color: $white;
    background-color: $paideia-purple;
    transition: .3s all;
}
.button:hover{
    text-decoration: none;
    transition: .3s;
}
.title{
    color: $paideia-purple;
    font-weight: bold;
    margin: 30px 0 30px 0;
}

.dep{
    margin-right: 15px;
    text-align: justify;
}
#primeiro,#segundo{
    padding-bottom: 50px;
}
#segundo{
    border-left:  5px solid $paideia-purple;
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
@media (max-width: 767px){
    #segundo{
        margin-top: 15px;
        padding-top: 25px;
        border-top: 5px solid $paideia-purple;
        border-left: none;
}
}
</style>
