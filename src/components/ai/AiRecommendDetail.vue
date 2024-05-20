<template>
  <div class="main-info-div">
    <div class="main-info-img-div">
      <img :src="thumbnailImage" alt="" style="height: 300px; width: 400px;">
    </div>
    <div class="main-info-text">
      <div>
        <h3>{{ recommend.info.title }}</h3>
      </div>
      <div>
        <span class="main-info-desc">{{ recommend.info.address }}</span>
      </div>
      <div>
        <span class="main-info-desc">유사도 : {{ recommend.similarity }} %</span>
      </div>
      <div style="margin-top: 20px;">
        <like-button :contentId="recommend.info.contentId"></like-button>
      </div>
    </div>
  </div>
</template>

<script>
import LikeButton from '../trip/LikeButton.vue'
export default {
  components: { LikeButton },
  props: {
    recommend: Object
  },
  data() {
    return {
      thumbnailImage: ''
    };
  },
  updated() {
    this.thumbnailImage = this.recommend.info.thumnailImage !== '' ? this.recommend.info.thumnailImage : require('@/assets/noimage.jpg');
  }
  
}
</script>

<style scoped>
.main-info-div {
  margin: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6a8;
  width: 500px;
  padding: 41px 37px;
  border-radius: 20px;
  box-shadow: 0 20px 30px rgb(0 0 0 / 10%);
}
.main-info-img {
  width: 104px;
}
.main-info-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  text-align: center;
}
.main-info-title {
  font-size: 35px;
  margin-bottom: 20px;
}
span.impress {
  font-weight: bold;
  color: #2196f3;
}
.main-info-img:hover {
  transform: translateY(-20px);
  transition: 400ms;
}
</style>
