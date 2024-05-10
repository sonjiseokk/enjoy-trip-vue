<template>
    <div>
      <div class="page-header min-vh-40 relative">
        <div class="container absolute">
          <div class="row">
            <div class="col-md-7 text-center mx-auto">
              <h3><b-icon icon="person-fill"></b-icon> 마이 페이지</h3>
            </div>
          </div>
        </div>
      </div>
      <section class="card card-body blur shadow-blur mx-5 md-4 mt-n6 py-5">
        <UserInfo></UserInfo>
      </section>
    </div>
  </template>
  
<script setup>
import UserInfo from "@/components/user/UserInfo.vue";
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

const userInfo = computed(() => store.state.session);

onMounted(() => {
    if (Object.keys(userInfo).length === 0) {
        router.push({ path: "/" });
    }
});


</script>
  
  <style scoped>
  h3 {
    font-weight: 600;
  }
  </style>
  