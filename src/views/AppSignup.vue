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
              v-model="user.id"
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
            v-if="user.id.length > 0 && user.id.length < 5"
            style="font-size: 14px; color: red"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;아이디는 5글자 이상이어야 합니다.
          </p>
          <p v-if="checkid" style="font-size: 14px; color: green">
            &nbsp;&nbsp;&nbsp;&nbsp;사용가능한 아이디입니다.
          </p>
          <p
            v-if="user.id.length >= 5 && !checkid"
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
              v-model="user.name"
              placeholder="이름을 입력해주세요."
            />
          </div>
        </div>
        <div class="row">
          <p class="col-sm-3"></p>
          <p v-if="user.name.length == 0" style="font-size: 14px; color: red">
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
              v-model="user.pass"
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
        </div>
        <div class="row">
          <p class="col-sm-3"></p>
          <p
            v-if="user.pass.length > 0 && user.pass.length < 8"
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
              v-model="temp"
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
        </div>
        <div class="row">
          <p class="col-sm-3"></p>
          <p
            v-if="user.pass.length >= 8 && user.pass == temp"
            style="font-size: 14px; color: blue"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;비밀번호가 일치합니다.
          </p>
          <p v-else-if="temp.length > 0" style="font-size: 14px; color: red">
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
              v-model="user.email"
              placeholder="이메일을 입력해주세요."
            />
          </div>
          <div class="col-sm-2">
            <button
              class="btn btn-dark d-flex m-auto"
              @submit.prevent=""
              @click.stop="sendEmailValid(user.email)"
            >
              인증하기
            </button>
          </div>
        </div>
        <div class="form-group row" v-if="sendComplete">
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
        </div>
        <div class="form-group row">
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
        </div>
        <button
          class="btn btn-dark d-flex m-auto"
          @submit.prevent=""
          @click="signup"
        >
          가입하기
        </button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "AppSignup",
  data() {
    return {
      image: null,
      contact: "",
      temp: "",
      checkid: false,
      time: "",
      inputCode: "",
      checkEmail: false,
      input: false,
      user: {
        id: "",
        pass: "",
        name: "",
        phone: "",
        email: "",
      },
    };
  },
};
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
