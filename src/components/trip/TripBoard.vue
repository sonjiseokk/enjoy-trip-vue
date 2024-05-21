<template>
    <div class="container">
      <div class="mb-2 input-group d-flex justify-content-between">
        <div class="">
          <button class="btn btn-dark" @click="getTripBoard">전체 목록</button>
          <button
            v-if="userInfo != null"
            class="btn btn-secondary ms-3"
            @click="writeTripBoard"
          >
            글쓰기
          </button>
        </div>
        <trip-board-search @search="search"></trip-board-search>
      </div>
      <table class="table table-hover">
        <colgroup>
          <col style="width: 5%" />
          <col style="width: 50%" />
          <col style="width: 15%" />
          <col style="width: 15%" />
          <col style="width: 15%" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>제목</th>
            <th>날짜</th>
            <th>작성자</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <trip-list-item
            v-for="trip in tripboards"
            :key="trip.num"
            :trip="trip"
          ></trip-list-item>
        </tbody>
      </table>
      <section class="py-7">
        <div class="container">
          <div class="py-2">
            <div class="">
              <ul
                class="pagination pagination-primary mt-4 d-flex justify-content-center"
              >
                <li class="page-item">
                  <a
                    class="page-link"
                    aria-label="Previous"
                    :class="{ hide: hidePrevious }"
                    @click="previousPage"
                  >
                    <span aria-hidden="true"
                      ><b-icon icon="chevron-left"></b-icon
                    ></span>
                  </a>
                </li>
                <li
                  class="page-item"
                  v-for="(page, index) in pages"
                  :key="index"
                  :class="{ active: page == curPage }"
                >
                  <a class="page-link" @click="getList(page)">{{ page }}</a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link"
                    aria-label="Next"
                    :class="{ hide: hideNext }"
                    @click="nextPage"
                  >
                    <span aria-hidden="true"
                      ><b-icon icon="chevron-right"></b-icon
                    ></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
import { useRouter } from "vue-router";
  import TripListItem from './TripBoardListItem.vue';
  import TripBoardSearch from './TripBoardSearch.vue';
  
  import http from "@/api/http-common";
  
  const userInfo = JSON.parse(sessionStorage.getItem("jwt"));
  const router = useRouter();
  
  export default {
    name: "TripBoard",
    data() {
      return {
        pages: [],
        tripboards: [],
        dataLength: 0,
        totalPage: 0,
        startPage: 1,
        endPage: 5,
        curPage: 1,
        hidePrevious: true,
        hideNext: true,
        userInfo: userInfo,
        router: router,
        contentId: "",
      };
    },
    mounted() {
      http
        .get(`/api/board/list?boardType=3&contentId=${this.$route.params.id}`)
        .then((response) => {
          this.tripboards = response.data.data;
        })
        .catch((e) => {
          console.error(e);
          this.tripboards = [];
        });
        
        this.contentId = this.$route.params.id;
    },
    components: {
        TripListItem, TripBoardSearch
    },
    methods: {
      search(receivedTitle) {
        http
          .get(`/api/board/list?boardType=3&contentId=${this.$route.params.id}&keyword=${receivedTitle}`)
          .then((response) => {
            this.tripboards = response.data.data;
          })
          .catch((e) => {
            this.tripboards = [];
            console.error(e);
          });
      },
      getTripBoard() {
        http
          .get(`/api/board/list?boardType=3&contentId=${this.$route.params.id}`)
          .then((response) => {
            this.tripboards = response.data.data;
            console.log(this.tripboards);
          })
          .catch((e) => {
            console.error(e);
          });
      },
      writeTripBoard() {
        this.$router.push("/tripboard/"+ this.contentId + "/insert/" + this.contentId );
      },
    },
  };
  </script>
  
  <style scoped>
  .page-link {
    width: 45px;
    height: 45px;
    text-align: center;
    line-height: 25px;
    border-radius: 50% !important;
    margin: 0 3px;
  }
  .hide {
    display: none;
  }
  .page-item.active .page-link {
    width: 45px;
    height: 45px;
    text-align: center;
    border-radius: 50% !important;
    background-color: #7895b2 !important;
    border-color: #7895b2 !important;
  }
  </style>
  