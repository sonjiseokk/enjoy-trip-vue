<template>
    <div style="width: 100%; height: 100%">
      <div class="position-relative">
        <main class="mt-0 main-content main-content-bg">
          <section>
            <KakaoMap class="kakao-map"></KakaoMap>
            <like-kakao-map/>
            <div>
              <div class="search-div">
                <h1 class = "pt-5">찜목록</h1>
                <div class="list-div type1">
                  <like-trip-list class="house-list" :tripList="tripList"/>
                </div>
                <button class = "btn btn-secondary">현재위치보기</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </template>
  
  <script>
  import LikeKakaoMap from '@/components/user/like/LikeKakaoMap.vue'
  import LikeTripList from './like/LikeTripList.vue';
  import http from "@/api/http-common";

  export default {
    data() {
      return {
        tripList : [],
      }
    },
    components: { LikeKakaoMap, LikeTripList},
    mounted() {
      http.get(`/api/member/mylike`)
        .then((response) => {
          this.tripList = response.data.data;
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  }
  </script>
  
  <style src="@/views/style/style.css"></style>
  <style scoped>
  .underline-orange {
    display: inline-block;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 70%,
      rgba(231, 149, 27, 0.3) 30%
    );
  }
  
  .search-div {
    position: absolute;
    width: 268px;
    height: 100vh;
    z-index: 2;
    top: 0px;
    left: 0;
    background-color: #fcfbf6e0;
  }
  
  .list-div {
    position: relative;
    width: 268px;
    height: 76vh;
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
    width: 268px;
    padding: 20px 20px 20px 20px;
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