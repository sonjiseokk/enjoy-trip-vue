<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const moveModify = () => {
    router.push("/userpage/modify");
}

const userInfo = JSON.parse(sessionStorage.getItem('jwt'));

</script>

<template>
    <div class="container p-3">
        <div class = "card">
            <h2 class = "row m-5">프로필</h2>
            <div class= "ps-5 pe-5 pt-3">
                <label for="userId" class = "row ms-2 mb-1">아이디</label>
                <input type="text" class="form-control" id="userId" aria-describedby="emailHelp" readOnly v-model='userInfo.userId'>
            </div>
            <div class="ps-5 pe-5 pt-3">
                <label for="userName" class = "row ms-2 mb-1">이름</label>
                <input type="text" class="form-control" id="userName" readOnly v-model='userInfo.userName'>
            </div>
            <div class="ps-5 pe-5 pt-3">
                <label for="userEmail" class = "row ms-2 mb-1">이메일</label>
                <input type="text" class="form-control" id="userEmail" readOnly v-model='userInfo.userEmail'>
            </div>
            <div class="d-flex justify-content-end">
                <button @click="moveModify" class="btn btn-primary m-5">정보 수정</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>