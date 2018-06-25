<template>
    <b-container>
        <h1 class="title center">Sobre</h1>
        <h2 class="center">Um Projeto Social - Um pouco das nossas origens</h2>
        <p class="quote">“Olhar não é apenas dirigir os olhos para perceber o real fora de nós.
            É, tantas vezes, sinônimo de cuidar, zelar, guardar, 
            ações que trazem o outro para a esfera dos cuidados do sujeito: 
            olhar por um jovem, olhar por um trabalho, olhar por um projeto.”</p>
        <p>Foi a partir deste olhar que iniciamos, no ano de 2003, as discussões para 
            a organização de uma associação civil sem fins lucrativos e econômicos na cidade 
            de Louveira, a Associação Paidéia.</p>
        <p>No Salão Paroquial da Igreja de São Sebastião nos reunimos todos, 
            três professores e mais dezesseis jovens, que ansiosos e vibrantes com a idéia, 
            ajudaram a construir as bases do que seria o Focus Vestibulares, um cursinho comunitário, 
            voltado para o atendimento de alunos egressos do sistema público de ensino que, 
            por conta de suas condições materiais, não teriam condições de arcar com os custos de um 
            curso pré-vestibular particular.</p>
        <p>Foram precisos mais dois anos de caminhada para que o sonho se concretizasse. 
            E assim, em agosto de 2005, em parceria com a Prefeitura Municipal de Louveira, 
            iniciamos nossas atividades em uma das salas da E. M. E. F. Vila Pasti.</p>
        <p>O cursinho comunitário Focus Vestibulares da Associação Paidéia é um projeto social 
            sem fins lucrativos, mantido pela Prefeitura Municipal de Louveira e cujo objetivo 
            é possibilitar o acesso gratuito a um curso pré-vestibular de qualidade dando aos jovens 
            que não podem arcar com os custos de um cursinho particular a possibilidade de prosseguirem 
            seus estudos em nível superior.</p>
        <h2 class="about-title center">Nossos Serviços</h2>
        <b-row class="compress">
            <b-col>
            <h6 class="about-title center">Preparatório ENEM</h6><p>Além da preparação para o vestibular os 
            nossos alunos contam ainda com um preparatório para o ENEM com aulas, 
            material e testes específicos para este processo seletivo.</p>
            </b-col>
            <b-col>
            <h6 class="about-title center">Aulas Complementares Específicas</h6><p>Nestas aulas os alunos recebem 
            orientação específica sobre cada conteúdo ministrado além de participarem da resolução 
            de listas de exercícios.</p>    
            </b-col>
            <b-col>
            <h6 class="about-title center">Material Didático</h6><p>Ético Sistema de Ensino, da Editora Saraiva 
            tem o conteúdo exigido pelos principais vestibulares do Brasil e tudo isso atualizado, 
            colorido e conforme o novo acordo ortográfico.</p>    
            </b-col>
            <b-col>
            <h6 class="about-title center">Simulados</h6><p>Com questões dos principais vestibulares para que os 
            alunos possam avaliar seu aproveitamento.</p>    
            </b-col>
        </b-row>
        <b-row class="compress">
            <b-col>
                <h6 class="about-title center">Oficinas de Redação</h6><p>Necessárias para o aprimoramento 
                tanto nos vestibulares como para o ENEM.</p>
            </b-col>
            <b-col>
                <h6 class="about-title center">Acompanhamento Psicológico</h6><p>Atendimento especializado visando 
                ajudar na escolha profissional.</p>
            </b-col>
            <b-col>
                <h6 class="about-title center">Roteiros Culturais</h6><p>Visitas a Centros Culturais, Teatros, 
                Museus, Universidades entre outros.</p>
            </b-col>
            <b-col>
                <h6 class="about-title center">Cursinho Online</h6><p>Plantão de dúvidas virtual (em implantação).</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
@import '../custom-bootstrap.scss';
.quote{
    font-weight: bold;
}
p{
    text-align: justify;
}
h1:first-of-type{
    text-transform: uppercase;
    border: none;
    padding-bottom: 10px;
}
h2.center{
    margin-bottom: 20px;
}
h2.center.about-title{
    padding-top: 25px;
}
.about-title{
    border-top: 3px solid $paideia-green;
    padding-top: 15px;
    color: $paideia-purple;
    font-weight: bold;
    margin: 10px 0 10px 0;
}
.compress{/*  Used to compress the table contents  */
    margin: 0 auto;
    padding: 0 20px 0 20px;
}
.center{
    text-align: center;
}
@media (min-width:340px) and (max-width: 400px){
    .compress{
    padding: 0 60px 0 60px;
    }
}
@media (max-width: 339px){
    .compress{
    padding: 0 30px 0 30px;
    }
}
</style>
