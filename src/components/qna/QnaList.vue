<template>
  <div class="container">
    <div class="mb-2 input-group d-flex justify-content-between">
      <div class="">
        <button class="btn btn-dark" @click="getQnaList">전체 목록</button>
        <button
          v-if="userInfo != null"
          class="btn btn-secondary ms-3"
          @click="writeQna"
        >
          글쓰기
        </button>
      </div>
      <qna-search @search="search"></qna-search>
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
        <qna-list-item
          v-for="qna in selectedQnas"
          :key="qna.boardId"
          :qna="qna"
        ></qna-list-item>
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
import http from "@/api/http-common";
import QnaSearch from "./QnaSearch.vue";
import QnaListItem from "./QnaListItem.vue";
import { useRouter } from "vue-router";

const userInfo = JSON.parse(sessionStorage.getItem("jwt"));
const router = useRouter();

export default {
  name: "QnaList",
  data() {
    return {
      pages: [],
      selectedQnas: [],
      dataLength: 0,
      totalPage: 0,
      startPage: 1,
      endPage: 5,
      curPage: 1,
      hidePrevious: true,
      hideNext: true,
      userInfo: userInfo,
      router: router,
    };
  },
  mounted() {
    http
      .get("/api/board/list?boardType=2")
      .then((response) => {
        this.selectedQnas = response.data.data;
        console.log(this.selectedQnas);
      })
      .catch((e) => {
        console.error(e);
        this.selectedQnas = [];
      });
  },
  components: {
    QnaSearch,
    QnaListItem,
  },
  methods: {
    search(receivedTitle) {
      http
        .get(`/api/board/list?boardType=2&keyword=${receivedTitle}`)
        .then((response) => {
          this.selectedQnas = response.data.data;
          console.log(this.selectedQnas);
        })
        .catch((e) => {
          this.selectedQnas = [];
          console.error(e);
        });
    },
    getQnaList() {
      http
        .get("/api/board/list?boardType=2")
        .then((response) => {
          this.selectedQnas = response.data.data;
          console.log(this.selectedQnas);
        })
        .catch((e) => {
          console.error(e);
          this.selectedQnas = [];
        });
    },
    writeQna() {
      this.$router.push("/qna/insert");
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
