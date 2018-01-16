<template align-v='center'>
<center width='100%'>
  <b-carousel align-v='center' id="carousel1"
                style='text-shadow: 1px 1px 2px #333;'
                controls
                indicators
                background='#ababab'
                :interval='4000'
                v-model='slide'
                @sliding-start='onSlideStart'
                @sliding-end='onSlideEnd'>
      <b-carousel-slide align-v='center' img-src="../assets/slide-preparatorio-enem.jpg">
      </b-carousel-slide>
      <b-carousel-slide align-v='center' img-src="../assets/slide-cursinho-focus.jpg">
      </b-carousel-slide>
  </b-carousel>
</center>
</template>
<script>
export default {
  name: 'Index',
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<<style lang="scss">

</style>
