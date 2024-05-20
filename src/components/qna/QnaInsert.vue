<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import http from "@/api/http-common";

const userInfo = ref(JSON.parse(sessionStorage.getItem("jwt")));
const router = useRouter();

const boardInfo = ref({
  subject: "",
  content: "",
  userId: userInfo.value.userId,
  boardTypeId: 2,
  contentId: 0,
});

const writeArticle = () => {
  http
    .post(`/api/board/write`, boardInfo.value)
    .then((response) => {
      router.push("/qna/list");
      if (response.data.data.code < 0)
        alert(response.data.data.message);
    })
    .catch((e) => {
      console.log(e);
    });
};
</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="well well-sm">
            <form class="form-horizontal" @submit.prevent="writeArticle">
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
                      v-model="boardInfo.subject"
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
                      v-model="boardInfo.content"
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
