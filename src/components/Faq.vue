<template>
    <b-container class="container">
        <h1 class="title center">FAQ – Perguntas Frequentes</h1>
        <ul>
            <li class="question">Quando começam as novas inscrições?</li>
            <li class="answer">A Associação Paideia mantem duas turmas anuais de Pré-Vestibular: no 1º SEMESTRE (Fevereiro até Junho), 
            para os Vestibulares de Inverno, e no 2º SEMESTRE (Agosto até Dezembro), para os Vestibulares de Verão e ENEM. 
            As inscrições ocorrem no início de cada semestre. Para o <strong>1º SEMESTRE</strong>, as inscrições ocorrem em <strong>Janeiro</strong>; 
            para o <strong>2º SEMESTRE</strong> as inscrições ocorrem em <strong>Julho</strong>. Acompanhe a nossa página no Facebook, 
            onde são divulgadas todas as datas de inscrição.</li>
            <a href="www.facebook.com/FocusCursinho" class="facebook-link">Página do Facebook</a>

            <li class="question">O curso é pago ou gratuito?</li>
            <li class="answer">O curso Pré-Vestibular é gratuito. Apenas o material é custeado pelo (a) aluno (a).</li>

            <li class="question">Sou de outra cidade, posso me inscrever?</li>
            <li class="answer">O curso Pré-Vestibular é uma ação da Prefeitura Municipal de Louveira, em parceira com a Associação Paideia, 
                e atende <strong>exclusivamente</strong> os moradores da cidade de Louveira.</li>

            <li class="question">Como faço para me inscrever?</li>
            <li class="answer">As inscrições são realizadas através do site da Associação Paideia (<a href="www.associacaopaideia.org.br" class="facebook-link">www.associacaopaideia.org.br</a>). 
            <b-alert show variant="danger"><strong class="uppercase">Atenção!</strong> As inscrições são EXCLUSIVAMENTE pela internet.</b-alert></li>

            <li class="question">O Cursinho Focus oferece algum curso à distância?</li>
            <li class="answer">A Associação Paideia, mantenedora do Cursinho Focus Pré-Vestibular, 
                <strong>NÃO</strong> possui plataforma <strong>EAD – Educação à Distância.</strong>
                Portanto, <strong class="emphasis">não há cursinho online</strong>, apenas aula no formato presencial.</li>

            <li class="question">Fiz minha inscrição, mas não compareci a uma das etapas do processo seletivo. O que eu faço?</li>
            
            <li class="answer"><b-alert show variant="danger"><strong class="uppercase center">Atenção!</strong></b-alert> 
                Caso o (a) candidato (a), tenha faltado a <strong>Reunião de Confirmação de Matrícula</strong>, 
                ele (a) deverá entrar em contato com a coordenação do cursinho através do e-mail contato@associacaopaideia.org.br, 
                em até 24h, confirmando sua presença na <strong>Prova Diagnóstica</strong>. Só serão aceitas as justificativas que estiverem relacionadas às 
                questões de trabalho, doença ou óbito conforme está relacionado no 
                <a :href="editalUrl" target="_blank" class="user-manual uppercase">Manual de Inscrição do Candidato</a></li>
            <li class="question uppercase">Como deve ser feita a solicitação: </li>
            <li class="answer"> <strong class="uppercase">Imprimir</strong> o requerimento disponível no site da Associação Paideia (página principal); </li>
            <li class="answer"> <strong class="uppercase">Justificar</strong> a ausência (relato de próprio punho através do requerimento impresso); </li>
            <li class="answer"> <strong class="uppercase">Anexar</strong> a documentação válida (atestado de trabalho, doença ou óbito); </li>
            <li class="answer"> <strong class="uppercase">Entregar</strong> os documentos no dia da <strong>Prova Diagnóstica.</strong></li>
            <li class="answer"> <b-alert show variant="warning"><strong class="uppercase">Fique atento (a)! É Obrigatório</strong> o 
            <strong class="uppercase">Envio do e-mail</strong> confirmando o interesse pela vaga e a presença na 
            <strong>Prova Diagnóstica.</strong></b-alert></li>

            <li class="question">Onde fica a sede cursinho Focus? Tem algum telefone em que eu possa ligar?</li>
            <li class="answer">O cursinho atende exclusivamente pelo site, portanto, 
                não temos sede física ou telefone comercial. 
                A <strong>Coordenação do Cursinho</strong> estará à disposição de toda a comunidade <strong>a partir do início 
                    do semestre letivo do cursinho (período de aulas)</strong>, 
                na <strong>EMEF Vila Pasti, Rua Orlando Pasti, 239 – Vila Pasti, Louveira – SP</strong>. O horário de atendimento da coordenação: 
                <strong>terça e quinta das 19h30min às 21h.</strong></li>

            <li class="question">Não recebi nenhum e-mail de confirmação e/ou quaisquer outros referentes ao Focus Cursinho. O que eu faço?</li>
            <li class="answer">ATENÇÃO!
                Os seus dados cadastrais precisam estar corretamente preenchidos na hora da inscrição. 
                Verifique se você preencheu corretamente os dados referentes ao seu e-mail 
                (letras maiúsculas, letras minúsculas, número ou símbolos). 
                Verificado se as informações estão corretas, verifique sua <strong>caixa de spam</strong>. 
                Caso tenha efetuado todas essas etapas, e, mesmo assim, não tenha recebido nenhuma mensagem, 
                observe o <strong>Calendário de Inscrição</strong> e compareça a <strong>Reunião de Confirmação de Matrícula conforme a 
                data e horário previstos no <a :href="editalUrl" target="_blank" class="user-manual uppercase">Manual do Candidato</a>.</strong></li>
            <li class="answer"><b-alert show variant="danger">CUIDADO! NÃO PREENCHA a FICHA DE INSCRIÇÃO novamente.</b-alert></li>
            <li class="answer"><b-alert show variant="warning">FIQUE LIGADO (A)! Na inscrição NÃO UTILIZE e-mail que não 
                seja do (a) próprio (a) candidato (a).</b-alert></li>
            <li class="question">Não tenho algum dos documentos exigidos. O que faço?</li>
            <li class="answer">Todos os documentos pedidos são uma exigência contratual entre a Prefeitura Municipal de Louveira e a Associação Paideia. 
                Caso ocorra algum problema com a documentação solicitada entre em contato pelo e-mail: contato@associacaopaideia.org.br. </li>
            <li class="answer"><b-alert show variant="danger">ATENÇÃO! É responsabilidade do (a) candidato (a) PROVIDÊNCIAR ANTECIPADAMENTE todos os documentos exigidos no Processo Seletivo.</b-alert></li>
            <li class="question">Estou prestando Concurso Público, posso fazer o Focus Cursinho?</li>
            <li class="answer">O Cursinho é voltado <strong class="uppercase"> exclusivamente</strong> para os exames vestibulares e ENEM. 
                <strong class="uppercase">toda</strong> a nossa grade curricular é direcionada para os vestibulares e ENEM.</li>
        </ul>
    </b-container>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
    .question{
        margin-top: 20px;
        list-style-type: none;
        font-weight: bold;
        font-size: 20px;
    }
    .facebook-link{
        font-weight: bold;
        margin-bottom: 20px;
    }
    li.answer{
        padding-left: 15px;
        list-style-type: none;
        text-align: justify;
        margin: 15px 0;
    }
    .center{
        text-align: center;
    }
    .uppercase{
        text-transform: uppercase;
    }
</style>