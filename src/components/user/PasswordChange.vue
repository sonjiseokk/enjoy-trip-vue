<template>
    <div class="container p-3">
        <div class="card">
            <h2 class="row m-5">비밀번호 변경</h2>
            <form @submit.prevent="submitPassword">
                <div class="ps-5 pe-5 pt-3">
                    <label for="code" class="row ms-2 mb-1">인증 코드</label>
                    <input type="text" class="form-control" id="code" v-model="code" />
                </div>
                <div class="ps-5 pe-5 pt-3">
                    <label for="password" class="row ms-2 mb-1">변경할 비밀번호</label>
                    <input type="password" class="form-control" id="password" v-model="password" />
                </div>
                <div class="ps-5 pe-5 pt-3">
                    <label for="password-confirm" class="row ms-2 mb-1">변경할 비밀번호 확인</label>
                    <input type="password" class="form-control" id="password-confirm" v-model="passwordConfirm" />
                </div>
                <div class="d-flex justify-content-end">
                    <button class="btn btn-primary m-5">변경</button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import http from '@/api/http-common.js'
export default {
    data() {
        return {
            code: '',
            password: '',
            passwordConfirm: ''
        }
    },
    created() {
        // 쿼리 파라미터에서 인증 코드를 가져옵니다
        this.code = this.$route.query.code || '';
    },
    methods: {
        submitPassword() {
            if (this.password === this.passwordConfirm) {
                const formData = { code: this.code, password: this.password }
                http.post('/api/member/email/verify', formData)
                    .then((response) => {
                        alert(response.data.data)
                        this.$router.push('/login')
                    })
                    .catch((error) => {
                        console.error('이메일 인증에 실패했습니다.');
                        alert(error.response.data.data);
                    })
            }
        }
    }
}
</script>

<style></style>