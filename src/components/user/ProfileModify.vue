<script setup>

</script>

<template>
    <div class="container p-3">
        <div class = "card">
            <h2 class = "row m-5">정보 수정</h2>
            <form>
                <div class= "ps-5 pe-5 pt-3">
                    <label for="userId" class = "row ms-2 mb-1">아이디</label>
                    <input type="text" class="form-control" id="userId">
                </div>
                <div class="ps-5 pe-5 pt-3">
                    <label for="userName" class = "row ms-2 mb-1">이름</label>
                    <input type="text" class="form-control" id="userName">
                </div>
                <div class="ps-5 pe-5 pt-3">
                    <label for="userEmail" class = "row ms-2 mb-1">이메일</label>
                    <input type="text" class="form-control" id="userEmail">
                </div>
                <div class="d-flex justify-content-end">
                    <button class="btn btn-primary m-5">저장</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>