<template>
  <div style="width: 100%; height: 100%">
    <div class="position-relative">
      <main class="mt-0 main-content main-content-bg">
        <section>
          <KakaoMap class="kakao-map"></KakaoMap>
          <my-kakao-map />
          <div>
            <div class="search-div">
              <trip-search class="house-search-bar" @search="search($event)" @allSearch="allSearch($event)" />
              <div class="list-div type1" @scrollend="onScroll">
                <trip-search-list class="house-list" :tripList="tripList" />
              </div>
            </div>
            <div v-if="$store.state.detailOpen" class="detail-div type1">
              <trip-detail class="house-detail" />
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import TripSearch from '@/components/trip/TripSearch.vue'
import MyKakaoMap from '@/components/trip/MyKakaoMap.vue'
import TripSearchList from '@/components/trip/TripSearchList.vue'


import http from "@/api/http-common";
import TripDetail from '@/components/trip/TripDetail.vue';
export default {
  data() {
    return {
      tripList: [],
      pageNum: 0,
      formData: {}
    }
  },
  mounted() {
    console.log(localStorage.getItem('accessToken'));
  },
  components: { TripSearch, MyKakaoMap, TripSearchList, TripDetail },
  methods: {
    search(formData) {
      this.formData = formData;
      this.pageNum = 0;
      this.hasMore = true; // 새로운 검색 시 더 불러올 데이터가 있는지 초기화
      this.fetchData(formData, 0);
    },
    fetchData(formData, pageNum) {
      if (this.isLoading) return;

      this.isLoading = true;
      http.post(`/api/trip/search?page=${pageNum}`, formData)
        .then((response) => {
          console.log('검색')
          console.log(response.data);
          if (pageNum === 0) {
            this.tripList = response.data.data;
          } else {
            this.tripList = [...this.tripList, ...response.data.data];
          }
          this.pageNum = response.data.pageNum;
          this.isLoading = false;
          if (response.data.data.length === 0) {
            this.hasMore = false; // 더 이상 불러올 데이터가 없는 경우
          }
        })
        .catch((error) => {
          if (pageNum === 0) {
            this.tripList = [];
          }
          this.isLoading = false;
          console.error("요청 중 오류 발생:", error);
        });
    },
    loadMore() {
      if (this.hasMore) {
        console.log('loadMore')
        this.fetchData(this.formData, this.pageNum + 1);
      }
    },
    onScroll(event) {
      const container = event.target;
      if (container.scrollTop + container.clientHeight >= container.scrollHeight - 5) {
        this.loadMore();
      }
    },
    allSearch(keyword) {
      console.log('전체 검색할 키워드는 ', keyword);
      http.get(`/api/trip/searchAll?keyword=${keyword}`)
        .then((response) => {
          this.tripList = [];
          this.tripList = response.data.data
        })
        .catch((error) => {
          this.tripList = [];
          console.error("요청 중 오류 발생:", error);
        });
    },
  }
}
</script>

<style src="@/views/style/style.css"></style>
<style scoped>
.underline-orange {
  display: inline-block;
  background: linear-gradient(180deg,
      rgba(255, 255, 255, 0) 70%,
      rgba(231, 149, 27, 0.3) 30%);
}

.search-div {
  position: absolute;
  width: 418px;
  height: 100vh;
  z-index: 2;
  top: 0px;
  left: 0;
  background-color: #fcfbf6e0;
}

.list-div {
  position: relative;
  width: 418px;
  height: 76vh;
  top: 142px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.detail-div {
  position: absolute;
  width: 401px;
  height: 100vh;
  z-index: 2;
  padding-top: 60px;
  top: 0px;
  left: 417px;
  background-color: #fcfbf6e0;
  overflow-y: scroll;
  /* overflow-x: hidden; */
}

.none {
  display: none;
}

.house-search-bar {
  z-index: 3;
  position: absolute;
  top: 34px;
  left: 28px;
  width: 340px;
}

.house-list {
  position: absolute;
  z-index: 3;
  top: 100px;
  width: 418px;
  padding: 20px 30px 20px 20px;
}

.kakao-map {
  height: 100vh;
  position: relative;
}

.house-search-bar {
  z-index: 3;
  position: absolute;
  top: 26px;
  left: 28px;
  width: 340px;
}

/* 스크롤바 설정*/
.type1::-webkit-scrollbar {
  width: 14px;
}

/* 스크롤바 막대 설정*/
.type1::-webkit-scrollbar-thumb {
  height: 17%;
  background-color: rgb(179 204 224 / 54%);
  border-radius: 47px;
}

/* 스크롤바 뒷 배경 설정*/
.type1::-webkit-scrollbar-track {
  background-color: rgb(255 255 254 / 35%);
}
</style>