<template>
    <div style="z-index: -1">
      <div class="page-header min-vh-75 relative">
        <div class="container absolute">
          <div class="row">
            <div class="col-md-7 text-center mx-auto">
              <h1 style="font-size: 50px !important; color: #FFFFFF !important;" class="mt-3">Travel Pick</h1>
              <div style="height: 30px;"></div>
              <h2 style="color: #ADD8E6;">당신의 성향, 취향 분석 완료! <br/>마음에 쏙 들 여행지를 추천해 드릴게요.</h2>
            </div>
          </div>
        </div>
      </div>
      <main>
        <home-view/>
      </main>
    </div>
  </template>
  
  <script>
  import HomeView from '../components/home/HomeDetail.vue';
  // import CrawlingBlog from "@/components/crawling/CrawlingBlog.vue";
  // import CrawlingNews from "@/components/crawling/CrawlingNews.vue";
  // import AptTopFive from "@/components/apt/AptTopFive";
  // import { mapState, mapActions } from "vuex";
  // import Constant from "@/Constant";
  
  // const noticeStore = "NoticeStore";
  // const aptStore = "AptStore";
  export default {
    name: "AppMain",
    created() {
      // this.$store.dispatch("NoticeStore/" + Constant.SELECT_THREE);
      // this.$store.dispatch("AptStore/" + Constant.SEARCH_BY_COUNT);
      // window.scroll({
      //   top: 0,
      //   behavior: "smooth",
      // });
    },
    data() {
      return {
        // staticMap: null,
        // map: null,
      };
    },
    components: {
      HomeView,
      // CrawlingBlog,
      // CrawlingNews,
      // AptTopFive,
    },
    computed: {
      // ...mapState(noticeStore, ["three"]),
      // ...mapState(aptStore, ["five", "idx"]),
    },
    methods: {
      // ...mapActions(noticeStore, ["getNotice"]),
      // getRoadNum(bon, bu) {
      //   let res = parseInt(bon);
      //   if (parseInt(bu) != 0) res += "-" + parseInt(bu);
      //   return res;
      // },
    },
  };
  </script>
  
  <style scoped src="./style/style.css"></style>
  <style scoped>
  .notice:hover {
    cursor: pointer;
    background-color: #f5efe6;
  }
  .apt:hover {
    cursor: pointer;
    background-color: #d3dde6;
  }
  </style>
  