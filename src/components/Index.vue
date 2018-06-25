<template >
<b-container class='content'>
<b-row align-h="center">
  <b-carousel align-v='center' id="carousel1"
                style='text-shadow: 1px 1px 2px #333;'
                controls
                indicators
                background='#ababab'
                :interval='4000'
                v-model='slide'
                @sliding-start='onSlideStart'
                @sliding-end='onSlideEnd'>
      <b-carousel-slide align-v='center' img-src="../assets/image_01.png">
      </b-carousel-slide>
      <b-carousel-slide align-v='center' img-src="../assets/image_02.png">
      </b-carousel-slide>
      <b-carousel-slide align-v='center' img-src="../assets/image_03.png">
      </b-carousel-slide>
  </b-carousel>
</b-row>
<b-row>
  <Documents/>
</b-row>
<b-row>
  <Depoiments/>
</b-row>
</b-container>
</template>
<script>
import Documents from '@/components/Documents.vue'
import Depoiments from '@/components/Depoiments.vue'

export default {
  name: 'Index',
  components: {
    Documents,
    Depoiments
  },
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
<style lang="scss">
@import '../custom-bootstrap.scss';

.content{
  margin: 2% 22px 8px 22px;
}
</style>
