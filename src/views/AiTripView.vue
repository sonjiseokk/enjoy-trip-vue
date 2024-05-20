<template>
  <div style="z-index: -1">
    <div class="min-vh-75 relative" style="margin-top: 200px">
      <div class="container absolute">
        <div class="row">
          <div class="col-md-7 text-center mx-auto">
            <h1 style="font-size: 50px !important;" class="text-dark mt-3">AI 트립</h1>
            <div style="height: 30px;"></div>
            <h4>AI가 나의 성향과 관심사를 분석하여 맞춤형 여행 정보를 제공합니다.</h4>
            <hr>
            <h5 class="text-secondary">내가 좋아한 "{{ selectedDto.title }}" 과 유사한 관광지</h5>
          </div>
          <div class="refresh-box" @click="refreshRecommendation">
            <i class="bi bi-arrow-clockwise refresh-icon"></i>
            <span class="refresh-text">다시 추천받기</span>
          </div>
        </div>
      </div>
      <main class="ai-main">
        <AiRecommendList :recommend-list="recommendList" :selected-dto="selectedDto"/>
      </main>
    </div>
  </div>
</template>

<script>
import AiRecommendList from '@/components/ai/AiRecommendList.vue'
import http from "@/api/http-common";
export default {
  data(){
    return {
      recommendList : [],
      selectedDto : {},
    }
  },  
  components: {
    AiRecommendList
  },
  methods : {
    fetchRecommendations() {
      http.get('/api/embed/most')
        .then((response) => {
          console.log(response.data);
          this.recommendList = response.data.data.recommendations;
          this.selectedDto = response.data.data.dto;
          if (this.recommendList.length == 0) {
            alert('좋아요 개수가 부족합니다.\n관광지를 더 추가해주세요!');
            this.$router.push('/');
          }
        })
        .catch((error) => {
          console.log(error.response.status); // 상태 코드 출력
          let code = error.response.status;
          console.error(error.response);
          if (code === 403) {
            alert('로그인이 필요한 페이지입니다.');
            this.$router.push('/');
          }
        });
    },
    refreshRecommendation(){
      this.fetchRecommendations();
    }
  },
  mounted() {
    this.fetchRecommendations();
  },
}
</script>
<style scoped src="./style/style.css"></style>
<style scoped>
.ai-main {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}

.refresh-box {
    display: flex;
    position: absolute;
    right: 150px;
    top: 100px;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 50px;
    border: 1px solid black;
    border-radius: 25px;
    background-color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-weight: bold;
}

.refresh-box:hover {
    background-color: #f0f0f0;
}

.refresh-icon {
    font-size: 24px; /* 아이콘 크기 조절 */
    margin-right: 10px;
}

.refresh-text {
    font-size: 18px; /* 텍스트 크기 조절 */
    font-weight: bold;
}
</style>

