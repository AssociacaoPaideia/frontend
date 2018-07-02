<template>
    <b-container>
        <main class="container">
            <h1 class="title">Redefinição de senha</h1>
            <b-form>
            <b-form-input v-model="password"
                  type="password"
                  placeholder="Digite uma nova senha" 
                  id="password"
                  required></b-form-input>
            <b-form-input v-model="repassword"
                  type="password"
                  placeholder="Digite sua senha novamente" 
                  id="repassword"
                  required></b-form-input>      
            <b-button type="submit" class="mail-submit">Enviar</b-button>
            </b-form>
        </main>
    </b-container>
</template>
<script>
export default {
    
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
.mail-submit{
    display: block;
    margin: auto;
    margin-top: 15px;
}
#password,#repassword{
    width: 60%;
    margin: auto;   
    margin-top: 10px;
    margin-bottom: 15px;
}
@media (max-width: 768px){
    #password,#repassword{
        width: 100%;
    }
}
</style>