<template>
  <b-container>
      <h3 class="header center">TERMO DE RESPONSABILIDADE - REGRAS DE FREQUÊNCIA E CONDUTA</h3>
        <h5 class="center">Ao se inscrever no CURSINHO FOCUS da ASSOCIAÇÃO PAIDEIA, 
            o (a) aluno (a) assume a responsabilidade de cumprir e respeitar as seguintes normas:</h5>
        <ol class="terms-ol">
         <li>A Frequência é obrigatória e condição de permanência do (a) aluno (a) no curso preparatório.</li>
         <li>O (A) aluno (a) que faltar nos dois primeiros dias de aula na primeira semana de curso será automaticamente excluído.</li>
         <li>Também será eliminado (a) o (a) aluno (a) que faltar duas vezes consecutivas ou alternadas na mesma semana, nas
sequências sexta/segunda e emenda de feriados.</li>
         <li>O (a) aluno (a) terá direito a quatro faltas no semestre.</li>
         <li>Devido o curso preparatório ser modalidade intensivo e de curta duração não serão admitidos quaisquer tipos de afastamento
temporário como para viagens de lazer ou estudo, curso de CFC e outros eventos que concorram com os dias e horário das aulas
do preparatório. Essas faltas não serão abonadas e acarretarão no desligamento do (a) aluno (a) do preparatório.</li>
         <li>Os afastamentos por doença ou trabalho serão abonados desde que notificados e justificados através de documentação legal.
(atestado médico ou declaração em papel timbrado da empresa e com a assinatura do responsável legal).</li>
         <li>O (A) aluno (a) que se inscrever a uma das vagas oferecidas e por motivos alheios não comunicar a sua desistência perderá o
direito de se reinscrever no preparatório pelo período de um semestre letivo.</li>
         <li>Verificada a impossibilidade de frequentar ou continuar o curso preparatório o aluno deverá comunicar por escrito a sua
desistência ao coordenador pedagógico.</li>
         <li>É obrigação do (a) aluno (a): trazer o material escolar todos os dias, sobretudo o material didático adotado pelo curso
preparatório, comparecer às avaliações, realizar os simulados presenciais e online e entregar feitos todos os exercícios propostos.</li>
         <li>A aquisição do material didático é responsabilidade do aluno, sendo proibida a reprodução (cópia) do mesmo à art. 5o inciso
VII da Lei de Direitos Autorais e art. 184 do Código Penal.</li>
         <li>O (A) aluno (a) regularmente matriculado terá 15 dias, contados a partir do primeiro dia de aula para entregar uma fotografia
recente tamanho (3x4) para o coordenador pedagógico para confecção de crachá a ser utilizado no acesso à escola ou quando
solicitado.</li>
         <li>É proibido ao aluno do preparatório apresentar atitudes e comportamento incompatíveis com o ambiente de aula. Qualquer
atitude que comprometa o bom andamento do preparatório acarretará no cancelamento da matrícula e desligamento do aluno do
projeto. Portanto, é dever do aluno: observar o horário de entrada e saída da sala de aula, manter-se em silêncio durante as
explicações do professor, respeitar os professores, colegas, funcionários, diretores e demais pessoas que coabitam o espaço
escolar.</li>
         <li>É expressamente proibido o uso de celulares ou quaisquer outros aparelhos eletrônicos em sala de aula conforme Lei
Estadual no 12.730 de 11/10/2007.</li>
         <li>Preservar o patrimônio público dentro e fora do prédio escolar. Não serão tolerados quaisquer danos e depredações ao bem
público. É dever do aluno: preservar a limpeza dos ambientes (chão, banheiros, mesas do refeitório, carteiras, paredes, etc.).
Preservar e proteger os trabalhos e atividades de alunos de outros períodos.</li>
         <li>Observar discrição ao se vestir, ao falar e ao agir no ambiente escolar. É expressamente proibido fumar no interior do prédio
bem como nas dependências externas do mesmo (jardins e área do estacionamento) conforme Lei Estadual no 13.541 de
07/05/2009.</li>
         <li>Não se envolver em qualquer forma de violência (agressão física ou psicológica que denote racismo ou discriminação por
atuação partidária, orientação religiosa ou orientação sexual).</li>
         <li>Caso o (a) aluno (a) desista do preparatório não será feito nenhum tipo de devolução ou reembolso quanto aos valores
referentes ao material didático adquirido.</li>
         <li>O (A) aluno (a) fica comprometido a informar sua colocação e aprovação nos exames vestibulares e ENEM à coordenação
pedagógica do preparatório que tem a incumbência e obrigação de dar publicidade aos resultados alcançados, dado que é um
projeto de iniciativa social custeado e mantido pela administração pública do município.</li>
         <li>Os casos omissos deste termo serão submetidos à avaliação do Conselho de Professores e Direção do preparatório que tem a
prerrogativa e a autonomia de agir visando ao bem comum e à ética.</li>
        </ol>
        <form>
            <b-form-checkbox v-model="checkBox" id="terms" class="terms">
                Li e aceito os termos de responsabilidade.
            </b-form-checkbox>
            <br><br>
            <b-button :disabled="!checkBox" type="submit" class="button">
                Enviar
            </b-button>
        </form>
  </b-container>
</template>
<script>
export default {
   data(){
       return {
       checkBox:false
       }
   },
   computed:{
       isEnabled(){
           return this.checkBox
       }
   }
}
</script>
<style lang="scss">
@import '../custom-bootstrap.scss';
.terms-ol{ 
    background-color: rgb(224, 224, 224);
    counter-reset: item;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 10px;
    border-radius: 8px;
 }
ol li { 
    display: block;
     margin-bottom: 10px;
    text-align: justify;
}
ol li:before {
    content: counter(item) ". ";
    counter-increment: item;
    font-weight: bold;
}
.header {
    padding: 15px;
    margin-bottom: 10px;
}
.center{
    font-weight: bold;
    text-align: center;
    margin: 10px 0 15px 0;
}
.terms{
    text-align: justify;
    float: right;
}
.terms:hover{
    cursor: pointer;
}
.button{
    padding: 10px 40px;
    display: block;
    margin: auto;
}
</style>
