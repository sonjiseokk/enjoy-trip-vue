<template>
  <div class="container sticky-top zindex-sticky top-0">
    <div class="row">
      <div class="col-12">
        <nav
          class="blur navbar navbar-expand-lg top-0 zindex-fixed shadow position-absolute my-3 py-2 start-0 end-0 w-100"
          style="background-color: #f5efe6"
        >
          <a
            class="navbar-brand ms-4 pt-3 pb-2"
            href="/"
            style="color: #4b555e; font-size: 2em; font-weight: 800"
            >#Enjoy_Trip</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <!-- <b-icon-list></b-icon-list> -->
          </button>

          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto me-auto">
              <li class="nav-item" @click="changed">
                <router-link
                  id="apt"
                  to="/trip"
                  class="ml-3 mr-3 nav-link text-secondary"
                  >관광지검색</router-link
                >
              </li>
              <li class="nav-item" @click="changed">
                <router-link
                  id="notice"
                  to="/notice"
                  class="ml-3 mr-3 nav-link text-secondary"
                  >공지사항</router-link
                >
              </li>
              <li class="nav-item" @click="changed">
                <router-link
                  id="qna"
                  to="/qna"
                  class="ml-3 mr-3 nav-link text-secondary"
                  >QnA</router-link
                >
              </li>
            </ul>
            <ul class="navbar-nav me-4">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i
                    v-if="!userInfo"
                    class="bi bi-people"
                    style="font-size: 2rem; padding-right: 10px"
                  ></i>
                  <i
                    v-else
                    class="bi bi-people-fill"
                    style="font-size: 2rem; padding-right: 10px"
                  ></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                  style="background-color: white"
                >
                  <router-link
                    id="userpage"
                    to="/userpage"
                    class="dropdown-item"
                    v-if="userInfo"
                  >
                    마이페이지
                  </router-link>
                  <router-link
                    id="join"
                    to="/signup"
                    class="dropdown-item"
                    v-if="!userInfo"
                  >
                    회원가입
                  </router-link>
                  <div
                    class="dropdown-divider"
                    style="border: #7895b2 1px"
                  ></div>
                  <a
                    href=""
                    v-if="userInfo"
                    class="dropdown-item"
                    @click="userLogout()"
                  >
                    로그아웃
                  </a>
                  <router-link
                    v-else
                    id="login"
                    to="/login"
                    class="dropdown-item"
                  >
                    로그인
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
const userInfo = sessionStorage.getItem("jwt");

const userLogout = () => {
  if (!userInfo) {
    alert("오류가 발생했습니다.");
  } else {
    sessionStorage.removeItem("jwt");
  }
};
</script>

<style scoped>
.nav-link,
.dropdown-item {
  text-decoration: none;
  color: #4b555e !important;
  font-weight: bold;
}
.nav-link:hover {
  background-color: #e8dfca;
  border-radius: 5px;
}
.dropdown-menu {
  background-color: #aebdca;
}
.dropdown-item:hover,
.dropdown-item:active {
  background-color: #f5efe6;
}
.activate {
  border: 2px #aebdca;
  background-color: #aebdca;
  color: black !important;
  font-weight: bold;
  border-radius: 5px;
}
.blur {
  box-shadow: inset 0px 0px 2px #fefefed1;
  -webkit-backdrop-filter: saturate(200%) blur(30px);
  backdrop-filter: saturate(200%) blur(30px);
  background-color: rgba(245, 239, 230, 0.8) !important;
}
.dropdown-menu-bell {
  right: 5em !important;
  top: 3.85em !important;
}
.dropdown-bell {
  background-color: #f5efe6 !important;
}
</style>
