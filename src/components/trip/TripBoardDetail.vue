<template>
    <div class="container text-center pt-5">
      <h4>{{ trip.subject }}</h4>
  
      <br />
      <div class="card mb-3 m-auto">
        <div class="card-header text-right" style="font-size: 0.8em">
          등록 날짜 : {{ trip.createDate }}<br />조회수 : {{ trip.viewCount }}
        </div>
        <div class="card-body" style="height: 300px">
          <p class="card-text text-left" v-html="trip.content"></p>
        </div>
      </div>
      <br />
      <div class="d-flex justify-content-end">
        <router-link class="btn btn-dark m-3" :to="'/tripboard/'+ route.params.id + '/list/' + route.params.id"
          >목록으로</router-link
        >
        <router-link
          v-if="userInfo !== null && userInfo.userId === trip.userId"
          class="btn btn-dark m-3"
          :to="moveModify()"
          >수정하기</router-link
        >
        <button
          v-if="userInfo !== null && userInfo.userId === trip.userId"
          class="btn btn-dark m-3"
          @click="deletetrip(trip.boardId)"
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
  const trip = ref(history.state);
  const router = useRouter();
  const route = useRoute();

  const moveModify = () => {
    return {
      path: `/tripboard/${route.params.id}/modify/${route.params.id}`,
      state: trip.value
    };
  };
  
  const deletetrip = (id) => {
    http
      .post(`/api/board/delete/` + id)
      .then((response) => {
        trip.value = response.data.data;
        router.push("/tripboard/"+ route.params.id + "/list/" + route.params.id);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  
  onMounted(() => {
    const boardId = trip.value.boardId;
    http
      .get(`/api/board/trip/detail/${boardId}`)
      .then((response) => {
        trip.value = response.data.data;
      })
      .catch((e) => {
        console.log(e);
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
  