<template>
  <div v-if="trip">
    <div class="detail-name">
      <div class="title-area">
        <h3>{{ trip.title }}</h3>
        <like-button :contentId="trip.contentId"></like-button>
      </div>
    </div>
    <div class="detail-img-div">
      <img class="sell-thumbnail" :src="thumnailImage" alt="Image 1" />
    </div>
    <div>
      <button class="btn btn-secondary" @click='moveTripBoard'>
        여행 후기
      </button>
    </div>

    <hr />
    <div>
      <h4>Travel Pick!</h4>
      <h5>AI가 유사한 여행지를 추천해드려요</h5>
      <div style="display: inline-block; margin-top: 50px;">
        <mini-loading :isLoading="isLoading"></mini-loading>
      </div>
      <div class="related-trips">
        <div class="related-trip-card" v-for="embedTrip in embeddingTrips" :key="embedTrip.contentId">
          <img :src="getThumbnailImage(embedTrip.info.thumnailImage)" alt="Related Image" />
          <div style="margin-top: 20px;">
            <p>관광지명: {{ embedTrip.info.title }}
              <br />
              유사도: {{ formattedSimilarity(embedTrip.similarity) }}%
            </p>
          </div>
          <button class="btn btn-primary" @click="toDetail(embedTrip.info.contentId)">상세 정보</button>
        </div>
      </div>
    </div>

    <!-- <router-view /> -->
    <!-- <detail-info v-if="detail_type.info"></detail-info>
        <detail-deal v-else-if="detail_type.deal"></detail-deal>
        <detail-infra v-else-if="detail_type.infra"></detail-infra> -->
  </div>
</template>

<script>
import http from "@/api/http-common";
import LikeButton from './LikeButton.vue';
import MiniLoading from '@/components/MiniLoading.vue';
export default {
  components: { LikeButton, MiniLoading },
  data() {
    return {
      trip: {},
      thumnailImage: '',
      embeddingTrips: [],
      isLoading : true,
    }
  },
  watch: {
    '$store.state.clickedTrip': {
      handler(newVal) {
        this.trip = newVal;
        this.thumnailImage = this.trip.thumnailImage !== '' ? this.trip.thumnailImage : require('@/assets/noimage.jpg');
        this.fetchEmbeddingTrips();
      },
      immediate: true
    }
  },
  methods: {
    dispalynone() {
      this.$store.commit('closeDetail',);
    },
    moveTripBoard() {
      this.$router.push("/tripboard/" + this.trip.contentId + "/list/" + this.trip.contentId);
    },
    getThumbnailImage(thumbnail) {
      return thumbnail && thumbnail !== '' ? thumbnail : require('@/assets/noimage.jpg');
    },
    formattedSimilarity(similarity) {
      return (similarity * 100).toFixed(2);
    },
    fetchEmbeddingTrips() {
      this.embeddingTrips = [];
      this.isLoading = true;
      if (this.trip.contentId) {
        http.get('/api/embed/recommend', { params: { contentId: this.trip.contentId } })
          .then((response) => {
            console.log('받아온 임베딩 데이터는', response.data);
            this.embeddingTrips = response.data.data;
          })
          .catch((e) => {
            console.error(e);
          })
          .finally(() => this.isLoading = false);
      }
    },
    toDetail(contentId){
      this.$router.push("/tripboard/" + contentId + "/list/" + contentId);
    }
  },
}
</script>

<style scoped>
.title-area {
  display: flex;
  align-items: center;
  justify-content: space-between !important;
  width: 385px !important;
}

.mouse-over-bgcolor {
  background-color: rgb(214, 211, 211);
}

.close-div {
  position: relative;
  width: 323px;
  right: -180px;
}

.close {
  background-color: #9ca3b1;
  width: 32px;
  height: 32px;
  color: white;
  padding: 9px;
  border-radius: 3px;
}

.detail-name {
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.detail-img-div img {
  padding: 11px 11px 40px 0;
  width: 400px;
  height: 300px;
}

.detail-menu-bar {
  margin-left: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  width: 326px;
}

.on {
  font-weight: bold;
  color: #2196f3;
}

.table td,
.table th {
  white-space: break-spaces;
}

.detail-menu-bar .menu {
  font-weight: bold;
}

.menu.active {
  background-color: #2196f3 !important;
}

.related-trips {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.related-trip-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.related-trip-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
