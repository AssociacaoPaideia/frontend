<template>
     <b-row class="mb-2">
       
      <b-col class='stepBox' v-for="(step, index) in steps" :key="step.name">
        <div @click='click(step)' class='step' style='height:60px;width:60px' v-bind:class="[{ done : step.done },{ active : step.active } ]">
          <p>Passo {{(index+1)}}</p>
        </div>
        <p class='description d-none d-sm-block' v-bind:class="[{ done : step.done },{ active : step.active } ]">{{step.name}}</p>
      </b-col>
    </b-row>
</template>
<script>
export default {
  name: 'Wizard',
  props: {
    steps: Array,
  },
  data() {
    return {
      stepsExample: [{ name: 'Termos de Responsabilidade', href: '/term', done: false, active: false },
      { name: 'Dados Basicos', href: '/basic', done: false, active: false },
      { name: 'Arquivos', href: '/docs', done: false, active: false },
      { name: 'Dados Adicionais', href: '/social', done: false, active: false }],
    };
  },
  methods: {
    click: function click(step) {
      this.$emit('clicked', step);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../custom-bootstrap.scss";
  .stepBox{
    margin-top: 15px;
  }
  .step{
    border: solid 2px $paideia-purple;
    background-color: $white;
    color: $paideia-purple;
    border-radius: 50%;
    text-align: center;
    position: relative;
    margin: 0 auto;
    font-size: 10px;
    p{
      line-height: 60px;
      font-weight: bold;
    }

    &.done{
      color: $paideia-dark-green;
      border: solid 2px $paideia-dark-green;
    }

    &.active{
      color: $white;
      background-color: $paideia-purple;
    }
  }
  p.description{
    color:$paideia-purple;
    font-weight: bold;
    text-align: center;
    margin: 0px;
    &.done{
        color: $paideia-dark-green;
    }
  }
</style>

