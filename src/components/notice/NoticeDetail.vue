<template>
  <div class="container text-center pt-5">
    <h4>{{ notice.subject }}</h4>

    <br />
    <div class="card mb-3 m-auto">
      <div class="card-header text-right" style="font-size: 0.8em">
        등록 날짜 : {{ notice.createDate }}<br />조회수 : {{ notice.viewCount }}
      </div>
      <div class="card-body" style="height: 300px">
        <p class="card-text text-left" v-html="notice.content"></p>
      </div>
    </div>
    <br />
    <div class="d-flex justify-content-end">
      <router-link class="btn btn-dark m-3" to="/notice/list"
        >공지 목록</router-link
      >
      <router-link
        v-if="userInfo !== null && userInfo.userId === notice.userId"
        class="btn btn-dark m-3"
        :to="'/notice/modify/' + notice.boardId"
        >수정하기</router-link
      >
      <button
        v-if="userInfo !== null && userInfo.userId === notice.userId"
        class="btn btn-dark m-3"
        @click="deleteNotice(notice.boardId)"
      >
        삭제하기
      </button>
    </div>
    <br />
  </div>
</template>

<script setup>
import http from "@/api/http-common";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const userInfo = ref(JSON.parse(sessionStorage.getItem("jwt")));
const notice = ref({});
const router = useRouter();
const route = useRoute();

const deleteNotice = (id) => {
  http
    .post(`/api/board/delete/` + id)
    .then((response) => {
      notice.value = response.data.data;
      router.push("/notice/list");
    })
    .catch((e) => {
      console.log(e);
    });
};

onMounted(() => {
  const boardId = route.params.boardId;
  http
    .get(`/api/board/notice/detail/${boardId}`)
    .then((response) => {
      console.log(response.data.data);

      notice.value = response.data.data;
    })
    .catch((e) => {
      console.log(e);
    });
});
</script>

//
<script>
// import http from "@/api/http-common";
// import { useRouter } from "vue-router";
// // const userInfo = JSON.parse(sessionStorage.getItem('jwt'));
// const router = useRouter();

// export default {
//   name: "NoticeDetail",
//   data() {
//     return {
//       notice: {},
//       userinfo: JSON.parse(sessionStorage.getItem("jwt")),
//       router: router,
//     };
//   },
//   mounted() {
//     const boardId = this.$route.params.boardId;
//     http
//       .get(`/api/board/detail/${boardId}`)
//       .then((response) => {
//         console.log(response.data.data);

//         this.notice = response.data.data;
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   },
//   methods: {
//     deleteNotice(id) {
//       http
//         .post(`/api/board/delete/` + id)
//         .then((response) => {
//           this.notice = response.data.data;
//           this.$router.push("/notice/list");
//         })
//         .catch((e) => {
//           console.log(e);
//         });
//     },
//   },
// };
//
</script>

<style scoped>
h4 {
  font-weight: 600;
}
.card {
  border: #ffffff solid 1px;
  border-bottom-color: rgba(0, 0, 0, 0.125);
}
</style>
