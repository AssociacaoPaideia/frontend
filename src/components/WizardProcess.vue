<template>
     <b-row class="mb-2">
       <hr/>
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
      stepsExample: [{ name: 'Dados Basicos', href: '/basic', done: false, active: true },
      { name: 'Dados Adicionais & Socioeconômico', href: '/social', done: false, active: false }],
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
  .step{
    border: solid 2px $paideia-purple;
    background-color: $white;
    color: $paideia-purple;
    border-radius: 50%;
    text-align: center;
    position: relative;
    margin: auto;
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
    white-space: nowrap;
    margin: 0px;
    &.done{
        color: $paideia-dark-green;
    }
  }

hr{
  height: 2px;
  border: 0px;
  width: 100%;
  position: absolute;
  margin-top: 0px;
  top: 30px;
  background-color: #ffffff; // Old browsers
  @include filter-gradient(#ffffff, #ffffff, horizontal); // IE6-9
  @include background-image(linear-gradient(left, #ffffff 0%,#527a25 50%,#ffffff 100%));
}
</style>

