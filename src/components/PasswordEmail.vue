<template>
    <b-container>
        <main class="container">
            <h1 class="title">Redefinição de senha</h1>
            <h3 class="email-text">Para redefinir sua senha digite o email registrado.</h3>
            <b-form>
            <b-form-input v-model="email"
                  type="email"
                  placeholder="Digite seu email" 
                  id="email"
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
.email-text{
    text-align: center;
}
.mail-submit{
    display: block;
    margin: auto;
    margin-top: 15px;
}
#email{
    width: 60%;
    margin: auto;   
}
@media (max-width: 768px){
    #email{
        width: 100%;
    }
}
</style>