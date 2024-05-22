<template>
  <div class="container text-center pt-5">
    <h4>{{ ban.subject }}</h4>

    <br />
    <div class="card mb-3 m-auto">
      <div class="card-header text-right" style="font-size: 0.8em">
        등록 날짜 : {{ ban.createDate }}<br />
        <div>
          <span v-if='ban.toxicity > 0.6' class="badge bg-warning text-light">유해성</span>
          <span v-if='ban.severeToxicity > 0.6' class="badge bg-danger text-light">심한 유해성</span>
          <span v-if='ban.identityAttack > 0.6' class="badge text-light" style='background-color: purple'>인신공격</span>
          <span v-if='ban.insult > 0.6' class="badge text-light" style='background-color: green'>모욕</span>
          <span v-if='ban.profanity > 0.6' class="badge text-light" style='background-color: darkblue'>비속어</span>
          <span v-if='ban.threat > 0.6' class="badge bg-dark text-light">폭력성</span>
        </div>
      </div>
      <div class="card-body" style="height: 300px">
        <p class="card-text text-left" v-html="ban.content"></p>
      </div>
    </div>
    <br />
    <div class="d-flex justify-content-end">
      <router-link class="btn btn-dark m-3" to="/userpage/banned"
        >목록으로</router-link
      >
    </div>
    <br />
  </div>
</template>

<script setup>
import http from "@/api/http-common";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const ban = ref({});
const route = useRoute();

onMounted(() => {
  const boardId = route.params.boardId;
  http
    .get(`/api/board/ban/${boardId}`)
    .then((response) => {
      console.log(response.data.data);

      ban.value = response.data.data;
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
