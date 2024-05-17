<template>
    <div class="main-info-icon" style="display: flex" v-for="(recommend, index) in recommendList" :key="index">
      <ai-recommend-detail :recommend="recommend"/>

    </div>
</template>

<script>
import AiRecommendDetail from './AiRecommendDetail.vue'

export default {
  data(){
    return {
      recommendList : [
        {thumnailImage : "http://tong.visitkorea.or.kr/cms/resource/92/1865292_image2_1.jpg", title : "관광지명", sido : "경기도", gugun : "구군"}
      ]
    }
  },
  components: { AiRecommendDetail },

}
</script>

<style scoped>


</style>