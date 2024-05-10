<template>
  <div>
    <div class="page-header min-vh-40 relative">
      <div class="container absolute">
        <div class="row">
          <div class="col-md-7 text-center mx-auto">
            <h3><b-icon icon="person-fill"></b-icon> 회원가입</h3>
          </div>
        </div>
      </div>
    </div>
    <section class="card card-body blur shadow-blur mx-5 md-4 mt-n6 py-5">
      <form @submit.prevent="" class="text-left container-fluid grid">
        <div class="form-group row">
          <label for="id" class="col-sm-3 col-form-label"
            >아이디&nbsp;<span style="color: red">*</span></label
          >
          <div class="col-sm-7">
            <input
              type="text"
              class="form-control"
              v-model="user.userId"
              @change="idchange"
              placeholder="아이디를 입력해주세요."
              required=""
            />
          </div>
          <div class="col-sm-2">
            <button
              class="btn btn-dark d-flex m-auto"
              @submit.prevent=""
              @click.stop="idcheck"
            >
              중복체크
            </button>
          </div>
        </div>
        <div class="row">
          <p class="col-sm-3"></p>
          <p
            v-if="user.userId.length > 0 && user.userId.length < 5"
            style="font-size: 14px; color: red"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;아이디는 5글자 이상이어야 합니다.
          </p>
          <p v-if="checkid" style="font-size: 14px; color: green">
            &nbsp;&nbsp;&nbsp;&nbsp;사용가능한 아이디입니다.
          </p>
          <p
            v-if="user.userId.length >= 5 && !checkid"
            style="font-size: 14px; color: red"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;중복체크를 해주세요.
          </p>
        </div>
        <div class="form-group row">
          <label for="text" class="col-sm-3 col-form-label"
            >이름&nbsp;<span style="color: red">*</span></label
          >
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              v-model="user.userName"
              placeholder="이름을 입력해주세요."
            />
          </div>
        </div>
        <div class="row">
          <p class="col-sm-3"></p>
          <p v-if="user.userName.length == 0" style="font-size: 14px; color: red">
            &nbsp;&nbsp;&nbsp;&nbsp;이름을 입력해주세요.
          </p>
        </div>
        <div class="form-group row">
          <label for="password" class="col-sm-3 col-form-label"
            >비밀번호&nbsp;<span style="color: red">*</span></label
          >
          <div class="col-sm-9">
            <input
              type="password"
              class="form-control"
              v-model="user.userPassword"
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
        </div>
        <div class="row">
          <p class="col-sm-3"></p>
          <p
            v-if="user.userPassword.length > 0 && user.userPassword.length < 8"
            style="font-size: 14px; color: red"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;비밀번호는 8글자 이상이어야 합니다.
          </p>
        </div>
        <div class="form-group row">
          <label for="password" class="col-sm-3 col-form-label"
            >비밀번호 확인&nbsp;<span style="color: red">*</span></label
          >
          <div class="col-sm-9">
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              v-model="secondPassword"
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
        </div>
        <div class="row">
          <p class="col-sm-3"></p>
          <p
            v-if="user.userPassword.length >= 8 && user.userPassword == secondPassword"
            style="font-size: 14px; color: blue"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;비밀번호가 일치합니다.
          </p>
          <p v-else-if="secondPassword.length > 0" style="font-size: 14px; color: red">
            &nbsp;&nbsp;&nbsp;&nbsp;비밀번호가 일치하지 않습니다.
          </p>
        </div>
        <div class="form-group row">
          <label for="email" class="col-sm-3 col-form-label"
            >이메일&nbsp;<span style="color: red">*</span></label
          >
          <div class="col-sm-7">
            <input
              type="email"
              class="form-control"
              v-model="user.userEmail"
              placeholder="이메일을 입력해주세요."
            />
          </div>
          <!-- <div class="col-sm-2">
            <button
              class="btn btn-dark d-flex m-auto"
              @submit.prevent=""
              @click.stop="sendEmailValid(user.email)"
            >
              인증하기
            </button>
          </div> -->
        </div>
        <!-- <div class="form-group row" v-if="sendComplete">
          <label for="email" class="col-sm-3 col-form-label"
            >인증번호&nbsp;<span style="color: red">*</span></label
          >
          <div class="col-sm-7">
            <input
              type="text"
              class="form-control"
              v-model="inputCode"
              placeholder="인증번호를 입력해주세요."
              @change="input = true"
            />
          </div>
          <div class="col-sm-2">
            <button
              class="btn btn-dark d-flex m-auto"
              @submit.prevent=""
              @click.stop="emailCheck"
            >
              확인
            </button>
          </div>
        </div>
        <div class="row" v-if="input">
          <p class="col-sm-3"></p>
          <p v-if="checkEmail" style="font-size: 14px; color: blue">
            &nbsp;&nbsp;&nbsp;&nbsp;인증번호가 일치합니다.
          </p>
          <p v-else style="font-size: 14px; color: red">
            &nbsp;&nbsp;&nbsp;&nbsp;인증번호가 일치하지 않습니다.
          </p>
        </div> -->
        <!-- <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"
            >휴대폰 번호&nbsp;<span style="color: red">*</span></label
          >
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              placeholder="- 제외 공백없이 번호만 입력해주세요."
              v-model="contact"
              @keyup="getPhoneMask(contact)"
            />
          </div>
        </div> -->
        <button
          class="btn btn-dark d-flex mt-3 m-auto"
          @submit.prevent=""
          @click="signup"
        >
          가입하기
        </button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import http from "@/api/http-common";
import { useRouter } from 'vue-router';
//import axios from 'axios'

const router = useRouter();

//const image = ref(null);
//const contact = ref('');
const secondPassword = ref('');
const checkid = ref(false);
//const time = ref('');
// const inputCode = ref('');
// const checkEmail = ref(false);
// const input = ref(false);

const user = ref({
  userId: "",
  userPassword: "",
  userName: "",
  userEmail: "",
})

/********************************* 중복체크 기능 없으니까 일단 넘어가자 *********************************/
const idcheck= () => {
  if (user.value.userId < 5) {
    alert("5글자 이상 입력해주세요!!");
    return;
  }
  else {
    checkid.value = true;
  }
  // http.get(`/users/idcheck/` + this.user.id).then(({ data }) => {
  //   if (data.message == "success") {
  //     this.checkid = true;
  //   } else {
  //     alert("사용할 수 없는 아이디입니다.");
  //   }
  // });
}

const signup = () => {
  if (checkid.value && user.value.userPassword == secondPassword.value) {
    console.log(user.value);

    http.post(`/api/member/join`, user.value)
        .then(() => {
          alert("회원가입에 성공했습니다.");
          router.push({ path: "/" });
        })
        .catch((error) => {
          alert("요청 중 오류 발생:", error);
        });
  } else {
    alert("정보를 다시 입력해주세요");
  }
}

</script>

<style scoped>
h3 {
  font-weight: 600;
}
label {
  font-weight: bold;
}
form {
  width: 55%;
}
</style>
