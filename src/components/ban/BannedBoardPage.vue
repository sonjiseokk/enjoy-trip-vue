<template>
    <div class="container">
      <div class="mb-2 input-group d-flex justify-content-between">
        <div class="btn-group">
          <button class="btn btn-dark" @click="getList">전체 목록</button>
        </div>
        <notice-search @search="search"></notice-search>
      </div>
      <table class="table table-hover">
        <colgroup>
          <col style="width: 5%" />
          <col style="width: 10%" />
          <col style="width: 50%" />
          <col style="width: 20%" />
          <col style="width: 15%" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>게시판</th>
            <th>제목</th>
            <th>날짜</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          <BanListItem
            v-for="ban in banList"
            :key="ban.num"
            :ban="ban"
          ></BanListItem>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import http from "@/api/http-common";
  import BanListItem from "./BanListItem.vue";

  const userInfo = ref(JSON.parse(sessionStorage.getItem("jwt")));
  const banList = ref([]);
  
  onMounted(() => {
    http
      .get(`/api/board/banList/` + userInfo.value.userId)
      .then((response) => {
        console.log(response.data.data);
        banList.value = response.data.data;
      })
      .catch((e) => {
        console.error(e);
        banList.value = [];
      });
  });
  
  const getList = () => {
    http
      .get(`/api/board/banList/` + userInfo.value.userId)
      .then((response) => {
        banList.value = response.data.data;
      })
      .catch((e) => {
        console.error(e);
        banList.value = [];
      });
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
  