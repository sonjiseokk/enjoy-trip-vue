<template>
    <div class="container pt-5">
      <div class="row">
        <div class="col-lg-3">
          <div class="sidebar">
            <!-- User Widget -->
            <div class="card">
              <!-- User Image -->
              <div class="">
                <img src="" class="rounded-circle" style="width:200px; m-auto" />
              </div>
              <!-- User Name -->
              <div class="card-body">
                <h5 class="text-center">이름이 들어감</h5>
                <p>이메일이 들어감</p>
              </div>
            </div>
            <!-- Dashboard Links -->
            <div class="card m-auto">
              <div class="card-body">
                <ul class="list-unstyled">
                  <li class="active">
                    <router-link class="dash-links" to="/userpage/view"><b-icon icon="person-fill"></b-icon><span> 회원정보</span></router-link
                    >
                  </li>
                  <li>
                    <router-link class="dash-links" to="/userpage/favorite"
                      ><b-icon icon="star-fill"></b-icon><span> 관심지역</span></router-link
                    >
                  </li>
                  <li>
                    <router-link class="dash-links" to="/userpage/qna"
                      ><b-icon icon="inbox-fill"></b-icon><span> 내 질문</span></router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <router-view class="col-lg-9"></router-view>
      </div>
    </div>
  </template>
  
<script setup> 
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import http from "@/api/http-common";

const store = useStore();
const router = useRouter();

const loginUser = computed(() => store.state.session);
//const userInfo = ref({});

const find = () => {
    http.post(`/api/member/find`, loginUser.value.loginId)
        .then((response) => {
            console.log(response.data);
            //userInfo.value = response.data;
        })
    .catch((error) => {
      alert("요청 중 오류 발생:", error);
    });
}

onMounted(() => {
    if (Object.keys(loginUser).length !== 0) {
        alert("로그인 후 이용가능합니다.");
        router.push({ path: "/" });
    }
    else find();
});
</script>
  
  <style>
  .dash-links{
    text-decoration: none;
    color: #4b555e !important;
  }
  </style>
  