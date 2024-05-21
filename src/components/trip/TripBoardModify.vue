<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import http from "@/api/http-common";

const userInfo = ref(JSON.parse(sessionStorage.getItem("jwt")));
const trip = history.state;
const router = useRouter();
const route = useRoute();

const newBoard = ref({
  boardId: 0,
  subject: "asfd",
  content: "asdf",
});

const modifyArticle = () => {
  if (userInfo.value.userId !== trip.userId) {
    alert("글 작성자만 수정 가능합니다.");
  } else {
    http
      .post(`/api/board/modify`, newBoard.value)
      .then(() => {
        router.push("/tripboard/"+ route.params.id + "/list/" + route.params.id);
      })
      .catch((e) => {
        console.log(e);
      });
  }
};

onMounted(() => {
    newBoard.value.boardId = trip.boardId;
    newBoard.value.subject = trip.subject;
    newBoard.value.content = trip.content;
});
</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="well well-sm">
            <form class="form-horizontal" @submit.prevent="modifyArticle">
              <fieldset>
                <div class="form-group d-flex flex-row m-3">
                  <span
                    class="col-md-1 col-md-offset-2 d-flex justify-content-center"
                    ><i class="bi bi-pencil-square fs-3"></i
                  ></span>
                  <div class="col-md-11">
                    <input
                      id="fname"
                      name="name"
                      type="text"
                      placeholder="제목을 입력하세요"
                      class="form-control"
                      v-model="newBoard.subject"
                    />
                  </div>
                </div>
                <div class="form-group d-flex flex-row m-3">
                  <span
                    class="col-md-1 col-md-offset-2 d-flex justify-content-center"
                    ><i class="bi bi-text-left fs-3"></i
                  ></span>
                  <div class="col-md-11">
                    <textarea
                      class="form-control"
                      id="message"
                      name="message"
                      placeholder="내용을 입력하세요"
                      rows="15"
                      v-model="newBoard.content"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-12 text-center m-6">
                    <button class="btn btn-dark">작성완료</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
