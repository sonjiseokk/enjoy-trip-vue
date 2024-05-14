<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import http from "@/api/http-common";

const userInfo = ref(JSON.parse(sessionStorage.getItem('jwt')));
const store = useStore();

console.log(userInfo);

const modifyInfo = () => {
    http.patch(`/api/member/update/info`, userInfo.value, {
        headers: {
            'Authorization': "Bearer " + userInfo.value.accessToken
        }
    })
    .then((response) => {
        let jwt = response.data.data;

        store.commit('setJwt', {jwt : jwt});

        alert("정보 수정에 성공했습니다.");
        location.href = "/userpage/profile";

    })
    .catch((error) => {
        alert(error.message);
    });
}

</script>

<template>
    <div class="container p-3">
        <div class = "card">
            <h2 class = "row m-5">정보 수정</h2>
            <form @submit-prevent='modifyInfo'>
                <div class= "ps-5 pe-5 pt-3">
                    <label for="userId" class = "row ms-2 mb-1">아이디</label>
                    <input type="text" class="form-control" id="userId" readonly v-model='userInfo.userId'>
                </div>
                <div class="ps-5 pe-5 pt-3">
                    <label for="userName" class = "row ms-2 mb-1">이름</label>
                    <input type="text" class="form-control" id="userName" v-model='userInfo.userName'>
                </div>
                <div class="ps-5 pe-5 pt-3">
                    <label for="userEmail" class = "row ms-2 mb-1">이메일</label>
                    <input type="text" class="form-control" id="userEmail" v-model='userInfo.userEmail'>
                </div>
                <div class="d-flex justify-content-end">
                    <button class="btn btn-primary m-5">저장</button>
                </div>
                <div>
                    <input type='hidden' name = 'userPassword' value = ''>
                    <input type='hidden' name = "role" v-model = 'userInfo.role'>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>