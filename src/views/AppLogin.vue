<template>
  <div>
    <!-- <the-modal
      v-if="showModal"
      @close="setShowModal(false)"
      :modalMessage="modalMessage"
    ></the-modal> -->
    <div class="page-header min-vh-40 relative">
      <div class="container absolute">
        <div class="row">
          <div class="col-md-7 text-center mx-auto">
            <h3><b-icon icon="key"></b-icon> 로그인</h3>
          </div>
        </div>
      </div>
    </div>
    <section class="card card-body blur shadow-blur mx-5 md-4 mt-n6 py-5">
      <form @submit.prevent="" class="text-left container-fluid grid w-50">
        <div class="form-group row">
          <label for="id" class="col-sm-3 col-form-label">아이디</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              v-model="user.loginId"
              placeholder="아이디를 입력해주세요."
              required=""
              @submit.prevent=""
              @keyup.enter="login"
            />
          </div>
        </div>
        <div class="form-group row mt-3">
          <label for="pass" class="col-sm-3 col-form-label">비밀번호</label>
          <div class="col-sm-9">
            <input
              type="password"
              class="form-control"
              v-model="user.loginPw"
              placeholder="비밀번호를 입력해주세요."
              required=""
              @submit.prevent=""
              @keyup.enter="login"
            />
          </div>
        </div>
        <div class="d-flex justify-content-center mt-3">
          <button class="btn btn-dark mr-2" @click="login">로그인</button>
          <button
            class="btn btn-dark mr-2"
            @submit.prevent=""
            @click="moveSignup"
          >
            회원가입
          </button>
          <!-- <button
            class="btn btn-dark mr-2"
            @submit.prevent=""
            @click="moveFindPass"
          >
            비밀번호 찾기
          </button> -->
        </div>
        <div class="d-flex justify-content-center mt-3">
          <!-- <div
            id="naveridlogin"
            @click="loginNaver"
            class=""
            style="float: left"
          >
            <img height="50" src="@/assets/btnW_완성형.png" />
          </div>
          <div
            id="googleidlogin"
            @click="loginGoogle"
            class="ml-3"
            style="float: left"
          >
            <img
              height="50"
              src="@/assets/btn_google_signin_light_normal_web.png"
            />
          </div> -->
        </div>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import http from "@/api/http-common";
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();

const user = ref({
  session: {
    loginId: "",
    loginPw: "",
  }
})

const router = useRouter();

const login = () => {
    http.post(`/api/member/login`, user.value)
    .then(() => {
      sessionStorage.setItem("userInfo", JSON.stringify(user.value));
      store.commit('setSession', user.value)
      console.log(store.state.session);
      router.push({ path: "/" });

    })
    .catch((error) => {
      alert("요청 중 오류 발생:", error);
    });
}

const moveSignup = () => {
  router.push({ name: "signup" });
}
</script>

<style scoped>
h3 {
  font-weight: 600;
}
</style>
