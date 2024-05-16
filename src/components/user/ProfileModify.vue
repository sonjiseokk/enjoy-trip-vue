<script setup>
import { ref } from "vue";
//import { useStore } from 'vuex';
import http from "@/api/http-common";

const userInfo = ref(JSON.parse(sessionStorage.getItem("jwt")));
const inputJson = ref({
  userId: userInfo.value.userId,
  userPassword: "",
  userName: userInfo.value.userName,
  userEmail: userInfo.value.userEmail,
});

//const store = useStore();

const modifyInfo = () => {
  console.log(userInfo.value);
  http
    .patch(`/api/member/update/info`, inputJson.value)
    .then((response) => {
      console.log(response);

      alert("성공적으로 정보가 변경되었습니다. 다시 로그인해 주세요.");
      sessionStorage.removeItem("jwt");
      location.href = "/login";
    })
    .catch((error) => {
      alert(error.message);
    });
};
</script>

<template>
  <div class="container p-3">
    <div class="card">
      <h2 class="row m-5">정보 수정</h2>
      <form @submit.prevent="modifyInfo">
        <div class="ps-5 pe-5 pt-3">
          <label for="userId" class="row ms-2 mb-1">아이디</label>
          <input
            type="text"
            class="form-control"
            id="userId"
            readonly
            v-model="inputJson.userId"
          />
        </div>
        <div class="ps-5 pe-5 pt-3">
          <label for="userName" class="row ms-2 mb-1">이름</label>
          <input
            type="text"
            class="form-control"
            id="userName"
            v-model="inputJson.userName"
          />
        </div>
        <div class="ps-5 pe-5 pt-3">
          <label for="userEmail" class="row ms-2 mb-1">이메일</label>
          <input
            type="text"
            class="form-control"
            id="userEmail"
            v-model="inputJson.userEmail"
          />
        </div>
        <div class="d-flex justify-content-end">
          <button class="btn btn-primary m-5">저장</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
