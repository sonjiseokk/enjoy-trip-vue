<template>
  <!-- <div class="d-flex align-items-center">
    <AiLikeList></AiLikeList>
  </div> -->
  <div style="z-index: -1">
    <div class="min-vh-75 relative" style="margin-top: 200px">
      <div class="container absolute">
        <div class="row">
          <div class="col-md-7 text-center mx-auto">
            <h1 style="font-size: 50px !important;" class="text-dark mt-3">AI 트립</h1>
            <div style="height: 30px;"></div>
            <h4>AI가 나의 성향과 관심사를 분석하여 맞춤형 여행 정보를 제공합니다.</h4>
            <hr>
            <h5 v-if='selectedTitle' class="text-secondary">내가 좋아한 "{{ selectedTitle }}" 과 유사한 관광지</h5>
            <h5 v-else class="text-secondary">좌측에서 관광지를 선택하고 유사한 관광지를 추천받아 보세요</h5>
          </div>
          <div class="explain-box">
            <help-button/>
          </div>
          <!-- <div class="refresh-box" @click="refreshRecommendation">
            <i class="bi bi-arrow-clockwise refresh-icon"></i>
            <span class="refresh-text">다시 추천받기</span>
          </div> -->
        </div>
      </div>
      <div class="search-div">
        <AiLikeList @setLike='setSelectedLike'></AiLikeList>
      </div>
      <main class="ai-main" v-if='selectedDto'>
        <mini-loading style="margin-top: 100px;" :isLoading="isLoading"/>
        <AiRecommendList :recommendList="recommendList"/>
      </main>
    </div>
  </div>
</template>

<script>
import AiRecommendList from '@/components/ai/AiRecommendList.vue'
import http from "@/api/http-common";
import AiLikeList from '@/components/ai/AiLikeList.vue';
import HelpButton from '@/components/common/HelpButton.vue';
import MiniLoading from '@/components/MiniLoading.vue';
export default {
  data(){
    return {
      recommendList : [],
      selectedDto: "",
      selectedTitle: "",
      isLoading : false,
    }
  },
  components: {
    AiRecommendList, AiLikeList,HelpButton,MiniLoading,
  },
  watch: {
    selectedDto: function (newValue) {
      this.isLoading = true;
       http.get('/api/embed/recommend', { params: { contentId: newValue, number : 11 } })
        .then((response) => {
          this.recommendList = response.data.data;
        })
        .catch((error) => {
          console.log(error.response.status); // 상태 코드 출력
        })
        .finally(() => this.isLoading = false)

      http.get('/api/trip/find?contentId=' + newValue)
        .then((response) => {
          this.selectedTitle = response.data.title;
          console.log(this.selectedTitle);
        })
        .catch((error) => {
          console.log(error);
        })
    },
  },
  methods : {
    setSelectedLike(newValue) {
      this.selectedDto = newValue;
    },
    fetchMyLikes(){
      http.get(`/api/member/mylike`)
        .then((response) => {
            console.log(response.data.data)
            this.selectedDto = response.data.data[0].contentId;
        })
        .catch((error) => {
            alert(error.message); 
        });
    }
  },
  mounted() {
    this.fetchMyLikes();
  }
}
</script>
<style scoped src="./style/style.css"></style>
<style scoped>
.search-div {
  position: absolute;
  width: 380px;
  height: 100vh;
  z-index: 2;
  top: 0px;
  left: 0;
}

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

.explain-box {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 345px;
  top: 104px;
  align-items: center;
  justify-content: center;
}

.explain-box p {
  margin: 0; /* 추가: 텍스트와 버튼 사이의 간격을 줄이기 위해 */
}
</style>

