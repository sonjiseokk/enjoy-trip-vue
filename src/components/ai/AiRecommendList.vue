<template>
  <div class="carousel-container">
    <Carousel :itemsToShow="2.5">
      <template v-slot:default="{ prev, next }">
        <Slide v-for="(recommend, index) in recommendList" :key="index">
          <ai-recommend-detail :recommend="recommend" />
        </Slide>
        <button @click="prev" class="carousel-button prev-button">‹</button>
        <button @click="next" class="carousel-button next-button">›</button>
      </template>
    </Carousel>
  </div>
</template>

<script>
import AiRecommendDetail from './AiRecommendDetail.vue'
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';


export default {
  data() {
    return {
    }
  },
  components: { 
    AiRecommendDetail, 
    Carousel, 
    Slide 
  },
  props: {
    recommendList : Array,
  },
  watch: {
    recommendList: function() {
      console.log("오냐? : " + this.recommendList);
    }
  }
}
</script>

<style scoped>
.carousel-container {
  max-width: 1200px; /* 캐러셀의 최대 너비를 설정 */
  margin: auto; /* 가운데 정렬 */
  position: relative; /* 버튼 위치를 위해 추가 */
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}
</style>
