<template>
  <div class="container pt-1">
    <div class="row">
      <div class="col-lg-2">
        <div class="sidebar">
          <!-- User Widget -->
          <div class="card">
            <!-- User Image -->
            <div class="">
              <img src="" class="rounded-circle" style="width:200px; m-auto" />
            </div>
            <!-- User Name -->
            <div class="card-body">
              <h5 class="text-center">{{ userInfo.userName }}</h5>
              <p>{{ userInfo.userEmail }}</p>
            </div>
          </div>
          <div class="card m-2 p-2">
            <RouterLink class="dash-links" to="/userpage/profile"
              ><b-icon icon="person-fill"> </b-icon><span> 내 정보</span>
            </RouterLink>
          </div>
          <div class="card m-2 p-2">
            <RouterLink class="dash-links" to="/userpage/like"
              ><b-icon icon="person-fill"> </b-icon><span> 내 관광지</span>
            </RouterLink>
          </div>
          <div class="card m-2 p-2" v-if="userInfo.role === 'ADMIN'">
            <RouterLink class="dash-links" to="/userpage/manage"
              ><b-icon icon="person-fill"> </b-icon><span> 게시판 관리</span>
            </RouterLink>
          </div>
          <div class="card m-2 p-2" v-if="userInfo.role !== 'ADMIN'">
            <RouterLink class="dash-links" to="/userpage/banned"
              ><b-icon icon="person-fill"> </b-icon><span> 내 차단 기록</span>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="col-lg-10 overflow-hidden">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const userInfo = ref(JSON.parse(sessionStorage.getItem("jwt")));
</script>

<style>
.dash-links {
  text-decoration: none;
  color: #4b555e !important;
}
</style>
