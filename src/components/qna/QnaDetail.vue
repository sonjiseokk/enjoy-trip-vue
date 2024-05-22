<template>
  <div class="container text-center pt-5">
    <h4>{{ qna.subject }}</h4>

    <br />
    <div class="card mb-3 m-auto">
      <div class="card-header text-right" style="font-size: 0.8em">
        등록 날짜 : {{ qna.createDate }}<br />조회수 : {{ qna.viewCount }}
      </div>
      <div class="card-body" style="height: 300px">
        <p class="card-text text-left" v-html="qna.content"></p>
      </div>
    </div>
    <br />
    <div class="d-flex justify-content-end">
      <router-link class="btn btn-dark m-3" to="/qna/list"
        >공지 목록</router-link
      >
      <router-link
        v-if="userInfo !== null && userInfo.userId === qna.userId"
        class="btn btn-dark m-3"
        :to="'/qna/modify/' + qna.boardId"
        >수정하기</router-link
      >
      <button
        v-if="userInfo !== null && userInfo.userId === qna.userId"
        class="btn btn-dark m-3"
        @click="deleteQna(qna.boardId)"
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
const qna = ref({});
const router = useRouter();
const route = useRoute();

const deleteQna = (id) => {
  http
    .post(`/api/board/delete/` + id)
    .then((response) => {
      qna.value = response.data.data;
      router.push("/qna/list");
    })
    .catch((e) => {
      console.log(e);
    });
};

onMounted(() => {
  const boardId = route.params.boardId;
  http
  .get(`/api/board/qna/detail/${boardId}`)
  .then((response) => {
    console.log(response.data.data);
    
    qna.value = response.data.data;
  })
  .catch((e) => {
      console.log('디테일은')
      console.error();
      if(e.response.status == 401){
        alert('작성자와 관리자만 접속할 수 있습니다.');
        router.push('/qna/list')
      }

    });
});
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
